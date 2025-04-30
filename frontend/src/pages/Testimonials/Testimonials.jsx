import React from "react";
import 'remixicon/fonts/remixicon.css';
import styles from "./Testimonials.module.css";
import bageshvar from "./bageshvarBaba.jpeg";
import rambhacharya from "./rambhacharkya.jpeg";
import jaikishori from './jaikishori.jpeg';
import Pradeep from './pradeep.jpeg';
const Testimonials = () => {
  const testimonials = [
    {
      name: "Bageshwar Baba",
      image: bageshvar,
      text: "We had a great time collaborating with the Filament team!!.",
    },
    {
      name: "Rambhacharya",
      image: rambhacharya,
      text: "We had a great time collaborating with the Filament team.",
    },
    {
      name: "Jayakishori",
      image: jaikishori,
      text: "We had a great time collaborating with the Filament team.",
    },
    {
      name: "Pradeep Mishra",
      image: Pradeep,
      text: "We had a great time collaborating with the Filament team.",
    },

  ];

  return (
    <div className={styles.testimonials}>
      {testimonials.map((testimonial, index) => (
        <div className={styles.card} key={index}>
          <img
            className={styles.card__img}
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div className={styles.card_content}>
            <div className={styles.card__content}>
              <div className={styles.card__details}>
                <p>{testimonial.text}</p>
                <h6>- {testimonial.name}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
