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
    <>
      <style>{`
        .cf {
          max-width: 420px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem;
          font-family: inherit;
        }
        .cf-title {
          font-size: 13px;
          color: #999;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }
        .cf-links {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .cf-links a {
          font-size: 13px;
          color: #666;
          text-decoration: none;
        }
        .cf-links a:hover { color: #111; }
        .cf-row { margin-bottom: 1.5rem; }
        .cf-row label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 6px;
        }
        .cf-row input,
        .cf-row textarea {
          width: 100%;
          box-sizing: border-box;
          background: transparent;
          border: none;
          border-bottom: 0.5px solid #ddd;
          padding: 6px 0;
          font-size: 14px;
          font-family: inherit;
          color: #111;
          outline: none;
          resize: none;
          transition: border-color 0.15s;
        }
        .cf-row input:focus,
        .cf-row textarea:focus { border-bottom-color: #111; }
        .cf-row input.err,
        .cf-row textarea.err { border-bottom-color: #c0392b; }
        .cf-err {
          font-size: 11px;
          color: #c0392b;
          margin-top: 4px;
        }
        .cf-status { font-size: 12px; margin-bottom: 1rem; }
        .cf-status.ok   { color: #2d7a4f; }
        .cf-status.fail { color: #c0392b; }
        .cf-submit {
          background: #111;
          color: #fff;
          border: none;
          padding: 9px 24px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: inherit;
          border-radius: 2px;
          transition: opacity 0.15s;
        }
        .cf-submit:hover:not(:disabled) { opacity: 0.75; }
        .cf-submit:disabled { opacity: 0.35; cursor: default; }
      `}</style>

      <section id="contact">
        <div className="cf">

          <p className="cf-title">Get in touch</p>

          <div className="cf-links">
            <a href="mailto:kausher01imam@gmail.com">kausher01imam@gmail.com</a>
            <a href="https://www.linkedin.com/in/kausher-i-441b78119/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate>

            <div className="cf-row">
              <label>Name</label>
              <input
                name="from_name"
                className={errors.name ? "err" : ""}
                disabled={status === "sending"}
              />
              {errors.name && <p className="cf-err">{errors.name}</p>}
            </div>

            <div className="cf-row">
              <label>Email</label>
              <input
                name="from_email"
                type="email"
                className={errors.email ? "err" : ""}
                disabled={status === "sending"}
              />
              {errors.email && <p className="cf-err">{errors.email}</p>}
            </div>

            <div className="cf-row">
              <label>Message</label>
              <textarea
                name="message"
                rows={4}
                className={errors.message ? "err" : ""}
                disabled={status === "sending"}
              />
              {errors.message && <p className="cf-err">{errors.message}</p>}
            </div>

            {status === "success" && (
              <p className="cf-status ok">Message sent — I'll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="cf-status fail">Something went wrong. Try again or email directly.</p>
            )}

            <button type="submit" className="cf-submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send"}
            </button>

          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;