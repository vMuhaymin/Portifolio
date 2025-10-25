

// ServicesCarousel.jsx
import React, { useEffect, useRef, useState } from "react";

export default function ServicesCarousel({ services = [] }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const prev = () => setIndex((i) => clamp(i - 1, 0, services.length - 1));
  const next = () => setIndex((i) => clamp(i + 1, 0, services.length - 1));

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
      deltaX.current = 0;
    };
    const onTouchMove = (e) => {
      deltaX.current = e.touches[0].clientX - startX.current;
    };
    const onTouchEnd = () => {
      if (Math.abs(deltaX.current) > 40) {
        if (deltaX.current < 0) next();
        else prev();
      }
      startX.current = 0;
      deltaX.current = 0;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [services.length]);

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-head">
          <h2 className="sec-title">Services</h2>
          <div className="nav-arrows">
            <button aria-label="Previous" className="arrow" onClick={prev}>‹</button>
            <button aria-label="Next" className="arrow" onClick={next}>›</button>
          </div>
        </div>

        <div className="carousel">
          <div
            ref={trackRef}
            className="track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {services.map((s) => (
              <div key={s.title} className="slide">
                <div className={`card glass ${s.highlight ? "highlight" : ""}`}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dots">
          {services.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

