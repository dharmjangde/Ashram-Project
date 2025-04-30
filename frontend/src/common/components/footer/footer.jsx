import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* About Section */}
        <div className={styles.footerAbout}>
          <h3>About Us</h3>
          <p>We are committed to empowering communities through education, healthcare, and sustainable programs.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <Link to="/contact" className={styles.footerLink}>Contact Us</Link>
          <Link to="/programs" className={styles.footerLink}>Our Programs</Link>
          <Link to="/volunteer" className={styles.footerLink}>Volunteer</Link>
          <Link to="/donate" className={styles.footerLink}>Donate</Link>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={styles.newsletter}>
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest news and events.</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
            <button className={styles.subscribeButton}>
              <FaEnvelope /> Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
