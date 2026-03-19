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
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }
        .cf-links {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .cf-links a {
          font-size: 13px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }
        .cf-links a:hover { color: var(--text-primary); }

        .cf-row { margin-bottom: 1.5rem; }

        .cf-row label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        /* ✅ Key fix: use CSS variables so text is visible in dark mode */
        .cf-row input,
        .cf-row textarea {
          width: 100%;
          box-sizing: border-box;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-color);
          padding: 6px 0;
          font-size: 14px;
          font-family: inherit;
          color: var(--text-primary);           /* ✅ was hardcoded #111 */
          outline: none;
          resize: none;
          transition: border-color 0.2s, color 0.2s;
        }

        /* Autofill fix — browsers override bg/color on autofill */
        .cf-row input:-webkit-autofill,
        .cf-row input:-webkit-autofill:focus {
          -webkit-text-fill-color: var(--text-primary) !important;
          -webkit-box-shadow: 0 0 0 1000px var(--bg-primary) inset !important;
          transition: background-color 9999s ease-in-out 0s;
        }

        .cf-row input::placeholder,
        .cf-row textarea::placeholder {
          color: var(--text-muted);
        }

        .cf-row input:focus,
        .cf-row textarea:focus {
          border-bottom-color: var(--text-primary);  /* ✅ was hardcoded #111 */
        }

        .cf-row input.err,
        .cf-row textarea.err { border-bottom-color: #ef4444; }

        .cf-err {
          font-size: 11px;
          color: #ef4444;
          margin-top: 4px;
        }

        .cf-status { font-size: 12px; margin-bottom: 1rem; }
        .cf-status.ok   { color: #22c55e; }
        .cf-status.fail { color: #ef4444; }

        .cf-submit {
          background: var(--btn-solid-bg);        /* ✅ theme-aware */
          color: var(--bg-primary);               /* ✅ theme-aware */
          border: none;
          padding: 9px 24px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: inherit;
          border-radius: 4px;
          transition: opacity 0.15s;
        }
        .cf-submit:hover:not(:disabled) { opacity: 0.8; }
        .cf-submit:disabled { opacity: 0.35; cursor: default; }
      `}</style>

      <section id="contact">
        <div className="container">

          <div className="section-header">
            <h2>Contact</h2>
            <span className="divider-line" />
          </div>

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
                <p className="cf-status ok">✓ Message sent — I'll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="cf-status fail">✕ Something went wrong. Try again or email directly.</p>
              )}

              <button type="submit" className="cf-submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send"}
              </button>

            </form>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;