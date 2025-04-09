// /common/components/card/index.jsx
import React, { useEffect, useRef } from "react";
import styles from "./card.module.css";

const Card = ({ title, text, image, backgroundColor }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // comment this if you want re-animate
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={styles.card}
      style={{ backgroundColor }}
    >
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default Card;
