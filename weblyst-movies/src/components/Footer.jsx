import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            WEBLYST
          </a>

          <p>Digital Experiences</p>
        </div>


        {/* Customer Care */}
        <div className="footer-column">
          <h3>CUSTOMER CARE</h3>

          <a href="#services">Web Development →</a>
          <a href="#services">Design Services →</a>
          <a href="#services">E-Commerce →</a>
          <a href="#contact">Contact Us →</a>
          <a href="#about">About Us →</a>
        </div>


        {/* Reviews */}
        <div className="footer-column footer-review">
          <h3>REVIEW</h3>

          <p>Please Don't Forget To</p>
          <p>Leave A Review</p>

          <a href="#contact" className="review-link">
            Leave A Review →
          </a>
        </div>


        {/* Stay Connected */}
        <div className="footer-column connected-column">
          <h3>STAY CONNECTED</h3>

          <div className="connected-content">

            {/* QR Code Placeholder */}
            <div className="qr-code">
              <div className="qr-pattern">
                QR
              </div>

              <span>
                QR code of our site
                <br />
                will appear here
              </span>
            </div>

            {/* Instagram */}
            <a
              href="#"
              className="social-icon"
              aria-label="Instagram"
            >
              ◎
            </a>

          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 WEBLYST. All rights reserved.
        </p>

      </div>


      {/* Floating Chat Button */}
      <a href="#contact" className="chat-button">
        <span className="chat-icon">●</span>
        Let's Chat!
      </a>

    </footer>
  );
}

export default Footer;