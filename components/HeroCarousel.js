"use client";

import { useState, useEffect, useRef } from "react";

const CAROUSEL_IMAGES = [
  { src: "/Home Page Banner/Image_2.jpg", alt: "Chittorgarh Fort View 1" },
  { src: "/Home Page Banner/Image_3.jpg", alt: "Chittorgarh Fort View 2" },
  { src: "/Home Page Banner/Image 4.jpg", alt: "Chittorgarh Fort View 3" },
  { src: "/Home Page Banner/Image 5.jpg", alt: "Chittorgarh Fort View 4" },
];

const INTERVAL_MS   = 5000;  // 5 seconds auto-rotation
const TRANSITION_MS = 800;   // 0.8s smooth transition

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const lockRef               = useRef(false);
  const timerRef              = useRef(null);

  const goToSlide = (targetIdx) => {
    if (lockRef.current || targetIdx === current) return;
    lockRef.current = true;
    setCurrent(targetIdx);

    setTimeout(() => {
      lockRef.current = false;
    }, TRANSITION_MS + 100);
  };

  const advance = () => {
    if (lockRef.current) return;
    lockRef.current = true;

    setCurrent((c) => (c + 1) % CAROUSEL_IMAGES.length);

    setTimeout(() => {
      lockRef.current = false;
    }, TRANSITION_MS + 100);
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="hc-section" aria-label="Home Page Banner Carousel">
      <div className="hc-frame">
        {CAROUSEL_IMAGES.map((img, idx) => {
          const isActive = idx === current;

          return (
            <div
              key={idx}
              className={`hc-slide ${isActive ? "hc-active" : ""}`}
            >
              {/* Ambient Background Blur to fill desktop wide container seamlessly */}
              <div 
                className="hc-bg-blur" 
                style={{ backgroundImage: `url("${encodeURI(img.src)}")` }} 
              />
              
              {/* 100% Uncropped Foreground Image */}
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

        {/* Slide Dots Positioned Low at Bottom Edge */}
        <div className="hc-dots-container">
          {CAROUSEL_IMAGES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              className={`hc-dot ${dotIdx === current ? "active" : ""}`}
              onClick={() => goToSlide(dotIdx)}
              aria-label={`Go to banner image ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Desktop / Laptop View (Full Height, Uncropped Banner) */
        .hc-section {
          position: relative;
          width: 100%;
          height: clamp(420px, 62vh, 680px);
          margin-top: 65px;
          padding: 0;
          background: #09090b;
          overflow: hidden;
          border-bottom: 2px solid rgba(212, 175, 55, 0.35);
        }

        .hc-frame {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        /* Clean transition without ghosting */
        .hc-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 1;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
        }

        .hc-active {
          opacity: 1;
          z-index: 2;
        }

        /* Ambient Background Blur Layer for Desktop & Mobile */
        .hc-bg-blur {
          position: absolute;
          inset: -30px;
          background-size: cover;
          background-position: center;
          filter: blur(28px) brightness(0.38) saturate(1.2);
          z-index: 1;
          transform: scale(1.15);
        }

        .hc-fg-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          box-sizing: border-box;
        }

        /* object-fit: contain guarantees 100% FULL image without cutting top, bottom, or sides */
        .hc-fg-img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 12px 30px rgba(0,0,0,0.8));
          border-radius: 6px;
        }

        /* Dots positioned low at bottom */
        .hc-dots-container {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
          background: rgba(0, 0, 0, 0.55);
          padding: 4px 12px;
          border-radius: 16px;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(212, 175, 55, 0.35);
        }

        .hc-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .hc-dot.active {
          background: #D4AF37;
          transform: scale(1.3);
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.9);
        }

        /* Mobile View (Perfect Uncropped Ratio) */
        @media (max-width: 768px) {
          .hc-section {
            height: clamp(320px, 50vh, 480px);
            margin-top: 55px;
          }
          .hc-fg-wrapper {
            padding: 6px;
          }
          .hc-dots-container {
            bottom: 6px;
            padding: 3px 8px;
            gap: 6px;
          }
          .hc-dot {
            width: 7px;
            height: 7px;
          }
        }
      `}</style>
    </section>
  );
}
