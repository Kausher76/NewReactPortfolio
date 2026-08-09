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
    if (!name.trim()) errs.name = "required";
    if (!email.trim()) errs.email = "required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "invalid email";
    if (!message.trim()) errs.message = "required";
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
        <div className="eyebrow">
          <span className="method post">POST</span>
          <span className="path">/contact</span>
        </div>
        <h2 className="section-title">Contact</h2>

        <div className="contact-layout">
          <div>
            <p className="contact-blurb">
              Open to full-time roles and freelance work. Reach out directly or send
              a message — I usually reply within a day.
            </p>

            <div className="contact-link-list">
              <a href="mailto:kausher01imam@gmail.com" className="contact-link-item">
                <span className="k">email</span>
                kausher01imam@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/kausher-i-441b78119/"
                target="_blank"
                rel="noreferrer"
                className="contact-link-item"
              >
                <span className="k">linkedin</span>
                kausher-i
              </a>
              <a
                href="https://github.com/Kausher76"
                target="_blank"
                rel="noreferrer"
                className="contact-link-item"
              >
                <span className="k">github</span>
                Kausher76
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label>name</label>
              <input
                name="from_name"
                placeholder="Your name"
                className={errors.name ? "err" : ""}
                disabled={status === "sending"}
              />
              {errors.name && <p className="field-err">{errors.name}</p>}
            </div>

            <div className="form-row">
              <label>email</label>
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
              <label>message</label>
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
              <p className="form-status ok">200 OK — message sent, I'll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="form-status fail">500 — something went wrong, try again or email directly.</p>
            )}

            <button type="submit" className="btn btn-solid" disabled={status === "sending"}>
              {status === "sending" ? "sending…" : "send message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;