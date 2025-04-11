import React from "react";
import styles from "./News.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bhandara from "./bhandara.jpeg";
import tree from "./tree.jpeg";
import healtha from "./heltha.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LatestContent from "./latestContent";

const newsData = [
  {
    title: "NGO Launches New Food Drive",
    date: "April 5, 2025",
    image: bhandara,
    description: "Our NGO kicked off a food drive to support families in need.",
    breaking: true,
  },
  {
    title: "Volunteers Plant 1,000 Trees",
    date: "March 30, 2025",
    image: tree,
    description: "Over 1,000 trees planted by our amazing volunteers.",
  },
  {
    title: "Free Health Camp Held",
    date: "March 20, 2025",
    image: healtha,
    description: "We offered free checkups to 500+ rural residents.",
  },
];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <div className={styles.arrow + " " + styles.next} onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={styles.arrow + " " + styles.prev} onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.newsWrapper}>
      <div className={styles.newsContainer}>
        <h1 className={styles.title}>Latest News</h1>
        <Slider {...settings} className={styles.slider}>
          {newsData.map((news, index) => (
            <div key={index} className={styles.newsCard}>
              <img src={news.image} alt={news.title} className={styles.image} />
              <div className={styles.content}>
                <h2 className={styles.newsTitle}>
                  {news.title}
                  {news.breaking && (
                    <span className={styles.blinking}>Breaking</span>
                  )}
                </h2>  
                <p className={styles.date}>{news.date}</p>
                <p className={styles.description}>{news.description}</p>
                <button className={styles.readMoretBn}>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
        
      </div> 
       <LatestContent/>
    </div>
  );
};

export default News;
