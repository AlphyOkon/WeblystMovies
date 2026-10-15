import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">WELCOME TO WEBLYST</p>

        <h1>
          We Build
          <span> Digital Experiences.</span>
        </h1>

        <p className="hero-description">
          Modern websites designed to help brands, businesses, and ideas
          stand out online.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="hero-btn secondary-btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;