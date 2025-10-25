// App.jsx — Dark Blue Themed Portfolio (React 19 + Vite)
import React, { useMemo } from "react";
import myPhoto from "./assets/Me.jpg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Social from "./components/Social";
import GitHubIcon from "./components/icons/GitHubIcon";
import ServicesCarousel from "./components/ServicesCarousel";
import ProjectsGrid from "./components/ProjectsGrid";
import ContactForm from "./components/ContactForm"; // 👈 add this

import { services as servicesData } from "./data/services";
import { projects as projectsData } from "./data/projects";

export default function App() {
  const services = useMemo(() => servicesData, []);
  const projects = useMemo(() => projectsData, []);

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
            <div className="eyebrow glass">hello, this is Abdulmuhaymin</div>
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

      {/* Skills */}
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
              <li><iconify-icon icon="logos:react" width="20"></iconify-icon> React</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesCarousel services={services} />

      {/* Projects */}
      <ProjectsGrid projects={projects} />

      {/* Contact — replaced button with form */}
      <section id="contact" className="section contact">
        <div className="container contact-inner glass">
          <h2 className="sec-title">Let's work together</h2>
          <p className="max-600">
            Have a challenge in mind? I’d love to hear about it — send me a message and I’ll get back to you.
          </p>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
