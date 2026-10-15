import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <div className="contact-heading">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's Build Something
            <span> Great.</span>
          </h2>

          <p>
            Have an idea for a website or digital project?
            Let's talk about it.
          </p>

        </div>

        <form className="contact-form">

          <div className="form-row">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

          </div>

          <input
            type="text"
            placeholder="Project Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;