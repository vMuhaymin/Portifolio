// Footer.jsx
import React from "react";

export default function Footer() {
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
