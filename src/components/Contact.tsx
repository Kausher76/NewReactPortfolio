import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = (name: string, email: string, message: string) => {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = "Required";
    if (!email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email";
    if (!message.trim()) errs.message = "Required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current!;
    const name = (form.elements.namedItem("from_name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("from_email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const errs = validate(name, email, message);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="eyebrow">Contact</div>
        <h2 className="section-title">Let's work together</h2>

        <div className="contact-layout">
          <div className="glass contact-info-card">
            <div>
              <p className="contact-blurb">
                Open to full-time roles and freelance work. Reach out directly or
                send a message — I usually reply within a day.
              </p>
            </div>

            <div className="contact-link-list">
              <a href="mailto:kausher01imam@gmail.com" className="contact-link-item">
                <span className="ico">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M4 4l8 8 8-8" /></svg>
                </span>
                kausher01imam@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/kausher-i-441b78119/" target="_blank" rel="noreferrer" className="contact-link-item">
                <span className="ico">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /><path d="M10 9v12M10 13a4 4 0 018 0v8" /></svg>
                </span>
                linkedin.com/in/kausher-i
              </a>
              <a href="https://github.com/Kausher76" target="_blank" rel="noreferrer" className="contact-link-item">
                <span className="ico">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
                </span>
                github.com/Kausher76
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="glass contact-form-card">
            <div className="form-row">
              <label>Name</label>
              <input
                name="from_name"
                placeholder="Your name"
                className={errors.name ? "err" : ""}
                disabled={status === "sending"}
              />
              {errors.name && <p className="field-err">{errors.name}</p>}
            </div>

            <div className="form-row">
              <label>Email</label>
              <input
                name="from_email"
                type="email"
                placeholder="you@example.com"
                className={errors.email ? "err" : ""}
                disabled={status === "sending"}
              />
              {errors.email && <p className="field-err">{errors.email}</p>}
            </div>

            <div className="form-row">
              <label>Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="What's this about?"
                className={errors.message ? "err" : ""}
                disabled={status === "sending"}
              />
              {errors.message && <p className="field-err">{errors.message}</p>}
            </div>

            {status === "success" && (
              <p className="form-status ok">✓ Message sent — I'll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="form-status fail">✕ Something went wrong. Try again or email directly.</p>
            )}

            <button type="submit" className="btn btn-gradient" disabled={status === "sending"} style={{ width: "100%", justifyContent: "center" }}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;