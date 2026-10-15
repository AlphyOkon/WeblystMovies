import './Services.css'

function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">

        <p className="section-tag">WHAT WE DO</p>

        <h2>Our Services</h2>

        <p className="section-description">
          We create modern digital experiences designed to help businesses
          build their presence online.
        </p>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-number">01</div>

            <h3>Web Design</h3>

            <p>
              Clean, modern, and responsive website designs created to
              represent your brand and connect with your audience.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>

            <h3>Web Development</h3>

            <p>
              Fast and responsive websites built with modern technologies
              and a focus on performance and usability.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">03</div>

            <h3>E-commerce</h3>

            <p>
              Online stores designed to provide customers with a smooth and
              enjoyable shopping experience.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">04</div>

            <h3>Landing Pages</h3>

            <p>
              High-impact landing pages designed to introduce products,
              services, campaigns, or new ideas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;