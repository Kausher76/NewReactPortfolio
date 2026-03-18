function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>

        <div className="contact-info">
          <div className="contact-info-item">
            <span className="icon">✉️</span>
            <span>kausher@example.com</span>
          </div>
          <div className="contact-info-item">
            <span className="icon">💼</span>
            <span>linkedin.com/in/kausher</span>
          </div>
        </div>

        <div className="col-md-6 mx-auto">
          <input className="form-control" placeholder="Your Name" />
          <input className="form-control" placeholder="Email" />
          <textarea className="form-control" rows={4} placeholder="Message" />
          <button className="btn btn-dark w-100 mt-1">Send Message</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;