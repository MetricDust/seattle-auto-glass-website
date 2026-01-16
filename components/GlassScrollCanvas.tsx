import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

export interface GlassScrollCanvasProps {
  /** Scroll progress value from framer-motion's useScroll (0 to 1) */
  scrollYProgress: MotionValue<number>;
  /** Total number of frames in the animation */
  totalFrames: number;
  /** Optional starting frame index (1-based) */
  startFrame?: number;
  /** Public folder path where frame images are stored */
  imageFolderPath: string;
}

/**
 * GlassScrollCanvas – renders a scroll‑driven frame‑by‑frame animation on a high‑DPI canvas.
 */
export default function GlassScrollCanvas({
  scrollYProgress,
  totalFrames,
  startFrame = 1,
  imageFolderPath,
}: GlassScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInitialLoaded, setIsInitialLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  // Build URLs for the frames
  const imageUrls = useMemo(() => {
    const urls: string[] = [];
    for (let i = 0; i < totalFrames; i++) {
      const frameIndex = startFrame + i;
      const paddedIndex = frameIndex.toString().padStart(3, "0");
      urls.push(`${imageFolderPath}/ezgif-frame-${paddedIndex}.jpg`);
    }
    return urls;
  }, [totalFrames, imageFolderPath, startFrame]);

  // Progressive loading logic
  useEffect(() => {
    let cancelled = false;
    const loadedImages: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null);
    let loadedCount = 0;

    const loadSingleImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          if (cancelled) return resolve();
          loadedImages[index] = img;
          loadedCount++;
          if (index === 0) setIsInitialLoaded(true);
          setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load frame: ${imageUrls[index]}`);
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
          resolve();
        };
        img.src = imageUrls[index];
      });
    };

    const loadImages = async () => {
      // 1. Load the very first frame immediately for fast display
      await loadSingleImage(0);
      imagesRef.current = [...loadedImages];

      if (cancelled) return;

      // 2. Load the rest in chunks to avoid blocking the network
      const chunkSize = 8;
      for (let i = 1; i < imageUrls.length; i += chunkSize) {
        if (cancelled) break;
        const chunk = [];
        for (let j = i; j < i + chunkSize && j < imageUrls.length; j++) {
          chunk.push(loadSingleImage(j));
        }
        await Promise.all(chunk);
        // Periodically update the ref so current loading images are available
        imagesRef.current = [...loadedImages];
      }
    };

    loadImages();
    return () => {
      cancelled = true;
    };
  }, [imageUrls, totalFrames]);

  /**
   * Render a frame to the canvas with object-fit: cover logic and fallback.
   */
  const renderFrame = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current.length || !isInitialLoaded) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Map 0-1 to 0-(totalFrames-1)
    const frameIndex = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(progress * totalFrames))
    );

    // Fallback logic: if target frame isn't loaded, use first frame or closest loaded frame
    let img = imagesRef.current[frameIndex];
    if (!img) {
      // Find the closest loaded frame (searching backwards is usually better for scroll feel)
      for (let i = frameIndex; i >= 0; i--) {
        if (imagesRef.current[i]) {
          img = imagesRef.current[i];
          break;
        }
      }
    }

    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Cover vs Contain logic
    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;

    const transitionStart = 0.9;
    const t = Math.max(0, (progress - transitionStart) / (1 - transitionStart));
    const easeT = t * t * (3 - 2 * t);

    const scaleCover = Math.max(rect.width / img.width, rect.height / img.height);
    const scaleContain = Math.min(rect.width / img.width, rect.height / img.height);

    // Interpolate scale - stop at 40% of the way to contain
    const zoomLimit = 0.4;
    const scale = scaleCover + (scaleContain - scaleCover) * (easeT * zoomLimit);

    const drawWidth = img.width * scale;
    const drawHeight = img.height * scale;
    const offsetX = (rect.width - drawWidth) / 2;
    const offsetY = (rect.height - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [isInitialLoaded, totalFrames]);

  // Subscribe to scroll progress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    requestAnimationFrame(() => renderFrame(latest));
  });

  // Initial draw and handle orientation/resize
  useEffect(() => {
    if (isInitialLoaded) {
      renderFrame(scrollYProgress.get());
    }

    const handleResize = () => renderFrame(scrollYProgress.get());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isInitialLoaded, renderFrame, scrollYProgress]);

  if (!isInitialLoaded) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900 text-white font-light tracking-widest uppercase">
        <div className="flex flex-col items-center gap-4">
          <span>Synchronizing Visuals...</span>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="w-full h-full block touch-none"
        style={{ background: "black" }}
      />
      {/* Background loading progress indicator (subtle) */}
      {loadProgress < 100 && (
        <div className="absolute bottom-4 right-4 text-[10px] text-white/30 tracking-widest uppercase pointer-events-none">
          Optimizing {loadProgress}%
        </div>
      )}
    </>
  );
}
