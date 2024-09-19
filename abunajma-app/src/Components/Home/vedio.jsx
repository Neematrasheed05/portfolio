import React, { useRef, useEffect, useState } from "react";
import abunajma from "../../Assets/abunajma.mp4";

function BackgroundVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (video) {
        const rect = video.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsPlaying(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover opacity-90 ${isPlaying ? "" : "hidden"}`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={abunajma} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVideo;
