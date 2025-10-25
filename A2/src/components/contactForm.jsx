import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ fullName: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: "" }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
    console.log("Form submitted:", form);
    // TODO: integrate EmailJS / Formspree / backend
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-group">
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={form.fullName}
          onChange={onChange}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "err-fullName" : undefined}
        />
        {errors.fullName && <small id="err-fullName" className="error">{errors.fullName}</small>}
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email && <small id="err-email" className="error">{errors.email}</small>}
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your message..."
          rows="5"
          value={form.message}
          onChange={onChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        {errors.message && <small id="err-message" className="error">{errors.message}</small>}
      </div>

      <button type="submit" className="btn primary">Send </button>

      {submitted && <p className="success-msg"> Message sent successfully ✅ </p>}
    </form>
  );
}
