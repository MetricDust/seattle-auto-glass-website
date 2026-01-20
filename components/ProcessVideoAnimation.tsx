"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Play, Pause } from "lucide-react";

export interface ProcessVideoAnimationProps {
  /** Path to the video file */
  videoSrc: string;
}

/**
 * ProcessVideoAnimation – renders a simple click-to-play video.
 */
export default function ProcessVideoAnimation({
  videoSrc,
}: ProcessVideoAnimationProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const setupVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) {
      console.log("ProcessVideoAnimation: video ref is null, retrying...");
      return false;
    }

    console.log("ProcessVideoAnimation: video element found, setting up events");

    const handleCanPlay = () => {
      console.log("ProcessVideoAnimation: canplay event fired");
      setIsLoaded(true);
      video.pause();
    };

    const handleError = (e: Event) => {
      console.error("ProcessVideoAnimation: error event fired:", e);
      const target = e.target as HTMLVideoElement;
      setError(`Video error: ${target.error?.message || 'Unknown error'}`);
    };

    const handleLoadStart = () => {
      console.log("ProcessVideoAnimation: loadstart event fired");
    };

    const handleLoadedData = () => {
      console.log("ProcessVideoAnimation: loadeddata event fired");
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    // Simple approach - just set the src and let it load
    console.log("ProcessVideoAnimation: setting video src to:", videoSrc);
    video.src = videoSrc;

    // Check if video is already ready
    setTimeout(() => {
      console.log("ProcessVideoAnimation: checking video readyState:", video.readyState);
      console.log("ProcessVideoAnimation: video src:", video.src);
      console.log("ProcessVideoAnimation: video error:", video.error);
    }, 1000);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [videoSrc]);

  useEffect(() => {
    console.log("ProcessVideoAnimation: useEffect triggered");
    
    // Try immediately
    const cleanup = setupVideo();
    
    // If that didn't work, try after a short delay
    if (!cleanup) {
      const timeoutId = setTimeout(() => {
        console.log("ProcessVideoAnimation: retrying setup after delay");
        setupVideo();
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
    
    return cleanup;
  }, [setupVideo]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(err => {
        console.log("Play failed:", err);
      });
    }
  };

  return (
    <div className="relative w-full h-full">
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/20 text-white p-4 z-10">
          <div className="text-center">
            <p className="text-red-300 mb-2">Video Error</p>
            <p className="text-sm text-red-400">{error}</p>
          </div>
        </div>
      )}

      {!isLoaded && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white p-4 z-10">
          <div className="text-center">
            <span>Loading Animation...</span>
            <p className="text-xs text-gray-400 mt-2">Source: {videoSrc}</p>
            <p className="text-xs text-gray-500">Check browser console for details</p>
          </div>
        </div>
      )}

      {/* Play/Pause button overlay */}
      {isLoaded && !error && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group"
          onClick={handleVideoClick}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg transition-transform group-hover:scale-110">
            {isPlaying ? (
              <Pause className="w-8 h-8 text-slate-900 fill-current" />
            ) : (
              <Play className="w-8 h-8 text-slate-900 fill-current" />
            )}
          </div>
          <p className="absolute bottom-4 left-4 text-xs text-white/60 bg-black/50 px-2 py-1 rounded">
            {isPlaying ? 'Click to pause' : 'Click to play'}
          </p>
        </div>
      )}

      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${!isLoaded ? 'invisible' : ''}`}
        playsInline
        preload="auto"
      />
    </div>
  );
}
