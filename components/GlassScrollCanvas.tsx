import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

export interface GlassScrollCanvasProps {
  /** Scroll progress value from framer-motion's useScroll (0 to 1) */
  scrollYProgress: MotionValue<number>;
  /** Total number of frames in the animation */
  totalFrames: number;
  /** Public folder path where frame images are stored */
  imageFolderPath: string;
}

/**
 * GlassScrollCanvas – renders a scroll‑driven frame‑by‑frame animation on a high‑DPI canvas.
 */
export default function GlassScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
}: GlassScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Build URLs for the frames
  const imageUrls = useMemo(() => {
    const urls: string[] = [];
    for (let i = 1; i <= totalFrames; i++) {
      const paddedIndex = i.toString().padStart(3, "0");
      urls.push(`${imageFolderPath}/ezgif-frame-${paddedIndex}.jpg`);
    }
    return urls;
  }, [totalFrames, imageFolderPath]);

  // Preload all images on mount
  useEffect(() => {
    let cancelled = false;
    const loadedImages: HTMLImageElement[] = new Array(totalFrames);
    let loadedCount = 0;

    imageUrls.forEach((src, idx) => {
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        loadedImages[idx] = img;
        loadedCount++;
        if (loadedCount === totalFrames) {
          imagesRef.current = loadedImages;
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame: ${src}`);
        loadedCount++;
        if (loadedCount === totalFrames) {
          imagesRef.current = loadedImages;
          setIsLoaded(true);
        }
      };
      img.src = src;
    });

    return () => {
      cancelled = true;
    };
  }, [imageUrls, totalFrames]);

  /**
   * Render a frame to the canvas with object-fit: contain logic.
   */
  const renderFrame = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current.length || !isLoaded) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Map 0-1 to 0-(totalFrames-1)
    const frameIndex = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(progress * totalFrames))
    );

    const img = imagesRef.current[frameIndex];
    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // Ensure canvas internal size matches display size * DPR
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    // Scale context by devicePixelRatio
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Cover vs Contain logic
    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;

    // We want 'cover' for most of the sequence, but 'contain' for the end
    // so that all labels (Heating Glass Layer, etc.) are visible.
    const transitionStart = 0.9;
    const t = Math.max(0, (progress - transitionStart) / (1 - transitionStart));
    const easeT = t * t * (3 - 2 * t); // Smoothstep

    // Calculate 'cover' scale
    const scaleCover = Math.max(rect.width / img.width, rect.height / img.height);
    // Calculate 'contain' scale
    const scaleContain = Math.min(rect.width / img.width, rect.height / img.height);

    // Interpolate scale - stop at 40% of the way to contain
    // This creates the "small, thin black border" requested by the user
    const zoomLimit = 0.4;
    const scale = scaleCover + (scaleContain - scaleCover) * (easeT * zoomLimit);

    const drawWidth = img.width * scale;
    const drawHeight = img.height * scale;
    const offsetX = (rect.width - drawWidth) / 2;
    const offsetY = (rect.height - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [isLoaded, totalFrames]);

  // Subscribe to scroll progress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    requestAnimationFrame(() => renderFrame(latest));
  });

  // Initial draw and handle orientation/resize
  useEffect(() => {
    if (isLoaded) {
      renderFrame(scrollYProgress.get());
    }

    const handleResize = () => renderFrame(scrollYProgress.get());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, renderFrame, scrollYProgress]);

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900 text-white font-light tracking-widest uppercase">
        Loading Visuals...
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block touch-none"
      style={{ background: "black" }}
    />
  );
}
