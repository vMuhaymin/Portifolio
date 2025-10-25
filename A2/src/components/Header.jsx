// Header.jsx
import React, { useEffect, useState } from "react";

export default function Header({ onContact }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector("header.nav");
      if (!header) return;
      if (window.scrollY > 8) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav glass">
      <a href="#hero" className="brand" aria-label="Home">
        <span>MyWeb</span>
      </a>
      <nav className={`links ${open ? "open" : ""}`} aria-label="Primary">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <button className="btn sm primary" onClick={onContact}>
          Contact
        </button>
      </nav>
      <button
        className={`hamburger ${open ? "active" : ""}`}
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
