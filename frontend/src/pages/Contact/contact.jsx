import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; 
import styles from "./contact.module.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Message Sent Successfully! ✅");
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 2000);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Feel free to reach out.</p>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <span>support@ourngo.org</span>
          </div>
          <div className={styles.infoItem}>
            <FaPhone className={styles.icon} />
            <span>+123 456 7890</span>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>123 NGO Street, City, Country</span>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2>Send a Message</h2>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label>Message</label>
          </div>

          <button type="submit" className={styles.submitBtn}>Send</button>

          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
