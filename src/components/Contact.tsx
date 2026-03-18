import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = (name: string, email: string, message: string) => {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email.";
    if (!message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    debugger;
    e.preventDefault();
    const form = formRef.current!;
    const name    = (form.elements.namedItem("from_name")  as HTMLInputElement).value;
    const email   = (form.elements.namedItem("from_email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message")    as HTMLTextAreaElement).value;

    const errs = validate(name, email, message);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

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

        <div className="section-header">
          <h2>Contact</h2>
          <span className="divider-line" />
        </div>

        {/* Info chips */}
        <div className="contact-info">
          <div className="contact-info-item">
            <span>✉️</span>
            <span>kausher01imam@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <span>💼</span>
            <a
              href="https://www.linkedin.com/in/kausher-i-441b78119/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              linkedin.com/in/kausher-i
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="col-md-6 mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} noValidate>

            <div className="contact-field">
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                name="from_name"
                placeholder="Your Name"
                disabled={status === "sending"}
              />
              {errors.name && <div className="contact-error">{errors.name}</div>}
            </div>

            <div className="contact-field">
              <input
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                name="from_email"
                type="email"
                placeholder="Your Email"
                disabled={status === "sending"}
              />
              {errors.email && <div className="contact-error">{errors.email}</div>}
            </div>

            <div className="contact-field">
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                name="message"
                rows={4}
                placeholder="Message"
                disabled={status === "sending"}
              />
              {errors.message && <div className="contact-error">{errors.message}</div>}
            </div>

            {status === "success" && (
              <div className="contact-status contact-status--success">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="contact-status contact-status--error">
                ✕ Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              type="submit"
              className="btn btn-dark w-100 mt-2"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? <span className="contact-sending"><span className="contact-spinner" /> Sending...</span>
                : "Send Message"
              }
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;