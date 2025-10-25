// ProjectsGrid.jsx
import React from "react";

export default function ProjectsGrid({ projects = [] }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="sec-title">Projects</h2>
        <div className="grid">
          {projects.map((p, i) => (
            <article key={i} className="project-card glass">
              <img src={p.img} alt={`${p.title} preview`} />
              <div className="overlay">
                <span className="badge">{p.cat}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="center">{/* Button area if needed */}</div>
      </div>
    </section>
  );
}
