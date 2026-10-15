import "./Projects.css";

import landingPageImage from "../assets/Landing Page Image.png";
import ecommerceImage from "../assets/E-commerce Image.png";
import portfolioImage from "../assets/Portfolio Image.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <h2>My Projects</h2>

        <p>
          Explore some of the websites and digital experiences I've created.
        </p>

        <div className="projects-grid">

          {/* Portfolio */}
          <div className="project-card">

            <div className="project-image">
              <img
                src={portfolioImage}
                alt="Portfolio Website"
              />
            </div>

            <h3>Portfolio Website</h3>

            <p>
              A modern and responsive portfolio website designed to showcase
              creative work and projects.
            </p>

            <button>View Project</button>

          </div>


          {/* E-commerce */}
          <div className="project-card">

            <div className="project-image">
              <img
                src={ecommerceImage}
                alt="E-commerce Store"
              />
            </div>

            <h3>E-commerce Store</h3>

            <p>
              A clean online shopping experience designed for products,
              customers, and businesses.
            </p>

            <button>View Project</button>

          </div>


          {/* Landing Page */}
          <div className="project-card">

            <div className="project-image">
              <img
                src={landingPageImage}
                alt="Landing Page"
              />
            </div>

            <h3>Landing Page</h3>

            <p>
              A modern landing page built to introduce a brand, service, or
              product.
            </p>

            <button>View Project</button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;