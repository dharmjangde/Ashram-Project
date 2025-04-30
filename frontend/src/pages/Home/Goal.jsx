import React, { useEffect } from "react";
import styles from "./Goal.module.css";
import smartCityImg from "./YogaAshram1.jpg";
import YogaT from "./Yoga.jpg";
import { FaCloudSun, FaTint, FaSeedling, FaFish, FaPaw, FaHandsHelping } from "react-icons/fa";

const goals = [
  {
    icon: <FaCloudSun />,
    text: "Create a climate-resilient and zero-carbon world",
    bgColor: styles.bgYellow,
  },
  {
    icon: <FaHandsHelping />,
    text: "Rebuild food systems to nourish people and nature",
    bgColor: styles.bgPurple,
  },
  {
    icon: <FaSeedling />,
    text: "Conserve the world's most important forests",
    bgColor: styles.bgGreen,
  },
  {
    icon: <FaTint />,
    text: "Protect freshwater resources and landscapes",
    bgColor: styles.bgTeal,
  },
  {
    icon: <FaFish />,
    text: "Achieve healthy oceans and nature-positive seascapes",
    bgColor: styles.bgPeach,
  },
  {
    icon: <FaPaw />,
    text: "Conserve wildlife and wild places",
    bgColor: styles.bgOrange,
  },
];

const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);

          }
          else{
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll(
      `.${styles.animateFromLeft}, .${styles.animateFromRight}`
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.homepageContainer}>
      <section className={styles.smartcitySection}>
        <div className={styles.imageContainer}>
          <img src={smartCityImg} alt="Smart City" />
        </div>
        <div className={`${styles.contentContainer} ${styles.animateFromRight}`}>
          <h2>Aashram Campus</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque esse
            ducimus fugit itaque earum unde veritatis, cum a vel, ipsum inventore
            quisquam excepturi ullam facilis!
          </p>
          <p>
            Perspiciatis iure aut neque earum debitis impedit suscipit nemo dolorum esse,
            eaque vel, fugit vero nam delectus quo facere quibusdam sequi explicabo ullam minima.
          </p>
        </div>
      </section>

      <section className={styles.smartcitySection}>
        <div className={`${styles.contentContainer} ${styles.animateFromLeft}`}>
          <h2>Yoga Teacher Training</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque esse
            ducimus fugit itaque earum unde veritatis, cum a vel, ipsum inventore
            quisquam excepturi ullam facilis!
          </p>
          <p>
            Perspiciatis iure aut neque earum debitis impedit suscipit nemo dolorum esse,
            eaque vel, fugit vero nam delectus quo facere quibusdam sequi explicabo ullam minima.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={YogaT} alt="YogaT" />
        </div>
      </section>

      <section className={styles.goalsContainer}>
        <div className={`${styles.animateFromLeft}`}>
          <h2>Our Goals</h2>
          <p className={styles.goalsIntro}>
            Recognizing that the problems facing our planet are increasingly more complex and urgent,
            Aashram NGO focuses its work on six ambitious goals. Through this integrative approach, we can
            challenge the planet’s greatest threats and ensure a healthy future for people and nature.
          </p>
        </div>

        <div className={styles.goalsGrid}>
          {goals.map((goal, index) => (
            <div key={index} className={styles.goalCard}>
              <div className={`${styles.iconWrapper} ${goal.bgColor}`}>{goal.icon}</div>
              <div className={styles.goalText}>{goal.text}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
