// App.jsx — Dark Blue Themed Portfolio (React 19 + Vite)
import React, { useEffect, useMemo, useRef, useState } from "react";
import myPhoto from "./assets/Me.jpg";
import ecommerceImg from "./assets/MangementSys.png";
import AI from "./assets/Ai.png";
import eStore from "./assets/eStore.png";
import black from "./assets/image.png";

import "./App.css";

export default function App() {
  const services = useMemo(
    () => [
      {
        title: "UI / UX",
        desc: "Human-centered, accessible interfaces with micro-interactions.",
        highlight: true,
      },
      {
        title: "Web Design",
        desc: "Responsive, SEO-friendly landing pages and websites.",
      },
      {
        title: "Game Develpent ",
        desc: "Mobile-first flows, design systems, and Prototyping.",
      },
      {
      title: "Hardware & IoT",
      desc: "Integrating hardware and software to build interactive and connected systems.",
    },
    ],
    []
  );

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

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="site-root">
      <Header onContact={() => scrollToId("contact")} />

      {/* Hero */}

      <section id="hero" className="section hero">
        <div className="hero-inner container">
          <div className="hero-copy">
            <div className="eyebrow glass">hello, this is Abdulmuhaymin </div>
            <h1 className="title-gradient">A Creative Developer</h1>
            <p className="sub">
              Junior Student at KFUPM. Passionate about <span>programming</span> and always eager to learn new things.
             My goal is to keep growing as a developer while contributing to exciting and meaningful work.

            </p>
            <div className="hero-ctas">
              <button className="btn primary" onClick={() => scrollToId("projects")}>
                <span>My Projects</span>
              </button>
              <button className="btn ghost" onClick={() => scrollToId("contact")}>
                <span>Contact me</span>
              </button>
            </div>


            <div className="socials">
              <Social href="https://github.com/" label="GitHub" icon={GitHubIcon} />
            </div>
          </div>

          <div className="hero-visual">
            <div className="blob-wrap">
              <div className="blob"></div>
              <div className="avatar">
                <img src={myPhoto} alt="Your portrait" className="avatar-img" />
              </div>
            </div>

            <div className="scroll-indicator" onClick={() => scrollToId("about")}>
              <span />
              <small>Scroll</small>
            </div>
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="section about">
        <div className="container about-inner">
          <h2 className="sec-title">About Me</h2>
          <p className="max-600">
            I’m a dedicated Full Stack Developer with a focus on building complete and dynamic web solutions. 
            I enjoy developing both intuitive frontends and robust backends to create seamless and efficient user experiences.
          </p>
          <div className="bubbles" aria-hidden>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container center">
          <h2 className="sec-title">Skills</h2>
          <div className="glass skills-card">
            <ul className="skills-list">
              <li><iconify-icon icon="logos:javascript" width="20"></iconify-icon> JavaScript</li>
              <li><iconify-icon icon="vscode-icons:file-type-html" width="20"></iconify-icon> HTML</li>
              <li><iconify-icon icon="vscode-icons:file-type-css" width="20"></iconify-icon> CSS</li>
              <li><iconify-icon icon="logos:python" width="20"></iconify-icon> Python</li>
              <li><iconify-icon icon="logos:java" width="20"></iconify-icon> Java</li>
              <li><iconify-icon icon="logos:django-icon" width="20"></iconify-icon> Django</li>
              <li><iconify-icon icon="logos:mysql" width="20"></iconify-icon> MySQL</li>
              <li><iconify-icon icon="logos:react" width="20"></iconify-icon> react</li>

            </ul>
          </div>
        </div>
      </section>

      {/* Services / Carousel */}
      <section id="services" className="section services">
        <div className="container">
          <div className="services-head">
            <h2 className="sec-title">Services</h2>
            <div className="nav-arrows">
              <button aria-label="Previous" className="arrow" onClick={prev}>
                ‹
              </button>
              <button aria-label="Next" className="arrow" onClick={next}>
                ›
              </button>
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

      {/* Projects */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="sec-title">Projects</h2>
          <div className="grid">
            {[
              { title: "Management system", cat: "Web app ", img: ecommerceImg , desc: "A system to simplify database operations"},
              { title: "Portfolio Site", cat: "Implementing KNN", img: AI,desc: "A machine learning project" },
              { title: "Mobile Banking", cat: "E-Store", img: eStore , desc: "A full-stack web application for online shopping " },
              { title: "Will be added later", cat: "...", img: black ,desc: " " },
            ].map((p, i) => (
              <article key={i} className="project-card glass">
                <img src={p.img} alt="Project preview" />
                <div className="overlay">
                  <span className="badge">{p.cat}</span>
                  <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="center">
             {/* Button */}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container contact-inner glass">
          <h2 className="sec-title">Let's work together</h2>
          <p className="max-600">
            Have a challenge in mind? I’d love to hear about it—drop me a line and let’s
            bring it to life.
          </p>
          <a href="mailto:hello@example.com" className="btn primary big">
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ---------------- UI Partials ----------------
function Header({ onContact }) {
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

function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-inner">
        <p>© {new Date().getFullYear()} MyWeb. All rights reserved.</p>
        <div className="foot-links">
          <a href="#about">About me</a>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, icon: Icon }) {
  return (
    <a className="social" href={href} aria-label={label} title={label} target="_blank" rel="noreferrer">
      <Icon />
    </a>
  );
}

// ---------------- GitHub Icon ONLY ----------------
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.77-1.62-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.47-2.36 1.25-3.2-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 016 0c2.29-1.54 3.3-1.22 3.3-1.22.66 1.65.24 2.87.12 3.17.78.84 1.25 1.9 1.25 3.2 0 4.58-2.8 5.6-5.47 5.9.43.38.82 1.12.82 2.26v3.35c0 .32.21.69.83.57A12 12 0 0012 .5z"
      />
    </svg>
  );
}


