import React, { useEffect, useState } from 'react';

import styles from './Award.module.css';
import award1 from './ngo-1.webp';
import award2 from './ngo-2.webp';
import award3 from './ngo-3.webp';

const awardsData = [
  {
    title: "Unsung Heroes Covid Warrior Award",
    description: "Honourable Sh. Parvesh Sahib Singh Verma, Member of Parliament, West Delhi, Lok Sabha Constituency, presented the Unsung Heroes Covid Warrior Award to Raise India Foundation for outstanding contribution in the fight against the COVID-19 pandemic.",
    image: award1
  },
  {
    title: "Community Excellence Award",
    description: "Raise India Foundation was honored for its exceptional dedication to community service and upliftment of underprivileged groups across rural India.",
    image: award2
  },
  {
    title: "Best NGO of the Year",
    description: "Awarded by the National Social Council, recognizing outstanding efforts in education, healthcare, and women empowerment programs.",
    image: award3
  }
];

const AwardsRecognition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? awardsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === awardsData.length - 1 ? 0 : prev + 1));
  };

  const { title, description, image } = awardsData[currentIndex];

  const reviews = [
    {
      name: "Felicia",
      avatar: "F",
      verified: true,
      date: "02.11.2023",
      stars: 5,
      text: "After meeting several students that had great things to say about the teaching and the facility, I p...",
    },
    {
      name: "Rahul",
      avatar: "R",
      verified: true,
      date: "15.12.2023",
      stars: 5,
      text: "An absolutely transformative experience. The peaceful environment and holistic approach are unmatched.",
    },
    {
      name: "Emily",
      avatar: "E",
      verified: true,
      date: "20.01.2024",
      stars: 4,
      text: "The yoga sessions were excellent. I felt rejuvenated and more aware of my inner peace.",
    },
  ];
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const review = reviews[currentReview];
 
  return (
    <>
    <section className={styles.ctaSection}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.highlight}>Awards</span> & <strong>Recognition</strong>
      </h2>
      <p className={styles.sectionDescription}>
        Celebrating excellence, honoring achievements, and inspiring others to reach new heights through acknowledgment and appreciation.
      </p>
      <div className={styles.slider}>
  <div className={styles.sliderContent}>
  <button className={styles.arrowLeft} onClick={handlePrev}>&#10094;</button>

    <div className={styles.imageBox}>

      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
    </div>

    <div key={currentIndex} className={styles.textBox}>
      <h3 className={styles.awardTitle}>{title}</h3>
      <p className={styles.awardDescription}>{description}</p>

    </div>
    <button className={styles.arrowRight} onClick={handleNext}>&#10095;</button>

  </div>

  
</div>
{/* Slider Dots */}
<div className={styles.dotContainer}>
    {awardsData.map((_, index) => (
      <div
        key={index}
        className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
    </section>
    
    <div className={styles.container}>
    <div className={styles.section}>
      <h2 className={styles.heading}>AyurYoga Videos</h2>
      <div className={styles.videoBox}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/XYZ12345" // Replace with your video ID
          title="AyurYoga Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <a className={styles.link} href="/videos">
        View More Ayur Yoga Videos
      </a>
    </div>

    <div className={styles.reviewsSection}>
      <h2 className={styles.heading}>AyurYoga Reviews</h2>

      <div className={styles.reviewCard}>
        <div className={styles.reviewHeader}>
          <div className={styles.avatar}>{review.avatar}</div>
          <div>
            <strong>{review.name}</strong>
            {review.verified && <div className={styles.verified}>Verified Reviewer</div>}
          </div>
          <div className={styles.date}>{review.date}</div>
        </div>

        <div className={styles.stars}>
          {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
        </div>
        <p className={styles.reviewText}>
          <em>{review.text}</em>
        </p>
      </div>

      <p className={styles.rating}>
        Rated <strong>5.0</strong> Out of 5 Based on <strong>10 Reviews</strong> on <strong>Kudobuzz</strong>
      </p>
      <a className={styles.link} href="/reviews">
        Read More Ayur Yoga Reviews
      </a>
    </div>
  </div>
  
  </>
);
};



export default AwardsRecognition;
