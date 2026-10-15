import './About.css'

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        <div className="about-content">

          <p className="section-label">
            ABOUT WEBLYST
          </p>

          <h2>
            We Build More Than
            <span> Websites.</span>
          </h2>

          <p>
            WEBLYST is focused on creating modern digital experiences
            that help individuals, creators, and businesses bring
            their ideas to life.
          </p>

          <p>
            From simple portfolio websites to full digital experiences,
            our goal is to combine clean design, modern technology,
            and great user experiences.
          </p>

          <a href="#contact" className="about-button">
            Let's Work Together →
          </a>

        </div>

        <div className="about-stats">

          <div className="stat-card">
            <h3>100+</h3>
            <p>Ideas Created</p>
          </div>

          <div className="stat-card">
            <h3>24/7</h3>
            <p>Digital Possibilities</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Creative Focus</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;