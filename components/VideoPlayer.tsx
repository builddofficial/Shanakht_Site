"use client";
import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  width: string | number;
  src: string;
  height?: string | number; 
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ width, src, height, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoElement.play();
            } else {
              videoElement.pause();
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(videoElement);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const handleVideoClick = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        width={width}
        height={height}
        src={src}
        muted
        autoPlay
        loop
        className={`w-full h-full ${className}`} // Make video responsive
        onClick={handleVideoClick} // Toggle play/pause on click
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
