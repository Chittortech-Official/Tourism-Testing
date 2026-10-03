"use client";

import { useState, useEffect, useRef } from "react";

const CAROUSEL_IMAGES = [
  { src: "/Image 1.jpg", alt: "Chittorgarh Heritage Image 1" },
  { src: "/Image_2.jpg", alt: "Chittorgarh Heritage Image 2" },
  { src: "/Image_3.jpg", alt: "Chittorgarh Heritage Image 3" },
  { src: "/Image 4.jpg", alt: "Chittorgarh Heritage Image 4" },
  { src: "/Image 5.jpg", alt: "Chittorgarh Heritage Image 5" },
];

const INTERVAL_MS    = 30000;  // 30 seconds between slides
const TRANSITION_MS  = 1200;  // CSS transition duration

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const lockRef               = useRef(false);
  const timerRef              = useRef(null);
  const lockResetRef          = useRef(null);

  const advance = () => {
    if (lockRef.current) return;
    lockRef.current = true;

    setCurrent((c) => {
      setPrev(c);
      return (c + 1) % CAROUSEL_IMAGES.length;
    });

    clearTimeout(lockResetRef.current);
    lockResetRef.current = setTimeout(() => {
      lockRef.current = false;
    }, TRANSITION_MS + 300);
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(lockResetRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTransitionEnd = (idx) => {
    if (idx === current) {
      lockRef.current = false;
    }
  };

  return (
    <section className="hc-section" aria-label="Chittorgarh photo carousel">
      <div className="hc-frame">
        {CAROUSEL_IMAGES.map((img, idx) => {
          let stateClass = "hc-idle";
          if (idx === current) stateClass = "hc-active";
          else if (idx === prev) stateClass = "hc-prev";

          return (
            <div
              key={idx}
              className={`hc-slide ${stateClass}`}
              onTransitionEnd={() => handleTransitionEnd(idx)}
            >
              {/* Blurred Background Layer (solves empty space) */}
              <div className="hc-blur-bg">
                <img
                  src={img.src}
                  alt=""
                  className="hc-bg-img"
                  draggable={false}
                />
                <div className="hc-overlay"></div>
              </div>

              {/* Foreground Image Layer (Complete Original Image) */}
              <div className="hc-fg-wrapper">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="hc-fg-img"
                  loading={idx === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        /* 
          Outer section below the fixed navbar.
        */
        .hc-section {
          position: relative;
          z-index: 10;
          width: 100%;
          padding-top: 57px;
          background: #0a0806;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* 
          Fixed container height. 
          Provides a stable full-width cinematic layout.
        */
        .hc-frame {
          position: relative;
          width: 100%;
          height: clamp(350px, 60vh, 650px);
          background: #0a0806;
          overflow: hidden;
        }

        /* 
          Slides are absolute and crossfade via opacity.
        */
        .hc-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
          z-index: 1;
        }

        .hc-active {
          opacity: 1;
          z-index: 2;
        }

        .hc-prev {
          opacity: 0;
          z-index: 1;
        }

        .hc-idle {
          opacity: 0;
          transition: none; /* Snap to hidden when idle */
          z-index: 0;
        }

        /* 
          BACKGROUND LAYER
          Uses the same image stretched and heavily blurred
        */
        .hc-blur-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hc-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(4px);
          transform: scale(1.1); /* Prevents unblurred edges */
        }

        .hc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(10, 8, 6, 0.10) 0%, rgba(10, 8, 6, 0.25) 100%);
        }

        /* 
          FOREGROUND LAYER
          Holds the original image safely with NO cropping.
        */
        .hc-fg-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .hc-fg-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* Guarantees complete visibility */
          border-radius: 6px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .hc-section { padding-top: 55px; }
          .hc-frame { height: clamp(280px, 50vh, 450px); }
          .hc-fg-wrapper { padding: 10px; }
          .hc-fg-img { border-radius: 4px; box-shadow: 0 5px 25px rgba(0,0,0,0.5); }
        }
        @media (max-width: 360px) {
          .hc-section { padding-top: 52px; }
          .hc-frame { height: clamp(250px, 45vh, 350px); }
          .hc-fg-wrapper { padding: 8px; }
        }
        @media (min-width: 1024px) {
          .hc-section { padding-top: 60px; }
          .hc-frame { height: clamp(450px, 45vw, 650px); }
          .hc-fg-wrapper { padding: 20px; }
        }
      `}</style>
    </section>
  );
}



