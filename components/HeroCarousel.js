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
              {/* Single Premium Image Layer */}
              <div className="hc-fg-wrapper">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="hc-fg-img"
                  loading={idx === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
                <div className="hc-overlay"></div>
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
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          background: var(--charcoal);
          overflow: hidden;
        }

        /* 
          Fixed container height. 
          Provides a stable full-width cinematic layout.
        */
        .hc-frame {
          position: relative;
          width: 100%;
          height: 100%;
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

        .hc-fg-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .hc-fg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hc-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(28, 27, 25, 0.4) 0%, rgba(28, 27, 25, 0.7) 100%);
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          
        }
        @media (max-width: 360px) {
          
        }
        @media (min-width: 1024px) {
          
        }
      `}</style>
    </section>
  );
}



