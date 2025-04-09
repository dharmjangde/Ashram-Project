import styles from"./about.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About Us</h1>
      <p className={styles.aboutDescription}>
        Our mission is to empower communities by providing education, healthcare, and sustainable development programs.
      </p>
    </div>
  );
}
