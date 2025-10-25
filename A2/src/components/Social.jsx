// Social.jsx
import React from "react";

export default function Social({ href, label, icon: Icon }) {
  return (
    <a className="social" href={href} aria-label={label} title={label} target="_blank" rel="noreferrer">
      <Icon />
    </a>
  );
}
