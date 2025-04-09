import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import Button from "../common/components/buttons/Button";
import Card from "../common/components/card";
import CardContent from "../common/components/cardContent";
import Navbar from "../common/components/header/Navbar";
import Footer from "../common/components/footer/footer";
import styles from "./home.module.css"; 
import EducationImg from "../aessets/Edue.jpeg";
import HealthcareImg from "../aessets/Helth.jpeg";
import CommunityImg from "../aessets/community.jpeg";
import PartnerImg from "../aessets/partnr1.png";
import backgroundImage from"./t6.jpg";
import Testimonials from "./Testimonials/Testimonials"; // Updated import statement

const Home = () => {
  const [impactNumbers, setImpactNumbers] = useState({
    lives: 0,
    states: 0,
    districts: 0,
    projects: 0,
  });

  const finalNumbers = {
    lives: 1830000,
    states: 15,
    districts: 25,
    projects: 17,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImpactNumbers((prev) => ({
        lives: Math.min(prev.lives + 20000, finalNumbers.lives),
        states: Math.min(prev.states + 1, finalNumbers.states),
        districts: Math.min(prev.districts + 1, finalNumbers.districts),
        projects: Math.min(prev.projects + 1, finalNumbers.projects),
      }));
    }, 90);

    return () => clearInterval(interval);
  }, []);






  return (
    <>
      <div className={styles.homeContainer}>
        <Navbar />

        <div className={styles.heroSection}>
          <img src={backgroundImage} alt="Background" className={styles.backgroundImage} />
          <div className={styles.heroOverlay}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.heroTitle}
            >
              Empowering Communities, Changing Lives
            </motion.h1>
            <p className={styles.heroText}>Join us in making a difference.</p>
            <Button text="Get Involved" className={styles.button} onClick={() => alert("Get Involved clicked!")} />
          </div>
        </div>

        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.sectionText}>
            We are dedicated to providing resources and support to underserved communities worldwide.
          </p>
        </section>

        {/* Programs Section */}
        <section className={styles.programsSection}>
          <h2 className={styles.sectionTitle}>Our Programs</h2>
          <div className={styles.programGrid}>
            <Card
              title="Education for All"
              text="Providing education and school supplies to children in need."
              image={EducationImg}
              backgroundColor="#ffff"
            />
            <Card
              title="Healthcare Support"
              text="Ensuring access to essential medical care and wellness programs."
              image={HealthcareImg}
              backgroundColor="#ffff"
            />
            <Card
              title="Community Development"
              text="Building sustainable solutions for thriving communities."
              image={CommunityImg}
              backgroundColor="#ffff"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <h2 className={styles.sectionTitle}>What People Say</h2>

          <Testimonials/>
        </section>

        {/* Partners Section */}
        <section className={styles.partnersSection}>
          <h2 className={styles.sectionTitle1}>Our Partners</h2>
          <div className={styles.partnerLogos}>
            <img src={PartnerImg} alt="Partner 1" />
            <img src="/partner5.png" alt="Partner 5" />
          </div>
        </section>

        {/* Our Impact Section */}
        <section className={styles.impactSection}>
          <h2 className={styles.sectionTitle}>🌍 Our Impact</h2>
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <h3>Lives Impacted</h3>
              <p className={styles.counter}>{impactNumbers.lives.toLocaleString()}</p>
            </div>
            <div className={styles.impactCard}>
              <h3>States</h3>
              <p className={styles.counter}>{impactNumbers.states}</p>
            </div>
            <div className={styles.impactCard}>
              <h3>Districts</h3>
              <p className={styles.counter}>{impactNumbers.districts}</p>
            </div>
            <div className={styles.impactCard}>
              <h3>Projects</h3>
              <p className={styles.counter}>{impactNumbers.projects}</p>
            </div>
          </div>
        </section>

        {/* Daily Programme, Festivals, Updates, CTA */}
        <div className={styles.contentWrapper}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>📅 Daily Programme</h2>
            <ul className={styles.scheduleList}>
              <li><strong>4:45 AM</strong> - Temple Open</li>
              <li><strong>5:00 AM</strong> - Bhupali</li>
              <li><strong>5:15 AM</strong> - Kakad Aarti (Morning)</li>
              <li><strong>5:50 AM</strong> - Mangal Snaan In Samadhi Mandir</li>
            </ul>
            <button className={styles.moreButton}>More</button>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>📅 Upcoming Festivals</h2>
            <p className={styles.festivalName}><strong>SHREE RAM NAVAMI FESTIVAL</strong></p>
            <p>2025</p>
            <button className={styles.moreButton}>More</button>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>📅 Latest Updates</h2>
            <ul className={styles.updateList}>
              <li>We are excited to announce our latest initiative focused on youth empowerment.</li>
              <li>Devotees’ List for Shri Sai Baba Aarti-Clothes (April 2025)</li>
              <li>Join us for an impactful event (March–April 2025)</li>
              <li>We have partnered with an organization for Non Practicing Allowance reforms.</li>
              <li>Appeal to Sai Baba Devotees for free Electric Lighting for Ramnavami Festival 2025 (05–04–2025 to 07–04–2025)</li>
            </ul>
            <button className={styles.moreButton}>More</button>
          </section>

          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Support Our Cause</h2>
            <p className={styles.ctaText}>Your donation can change lives. Join us today!</p>
            <Button text="Donate Now" className={styles.button} onClick={() => alert("Donate Now clicked!")} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;