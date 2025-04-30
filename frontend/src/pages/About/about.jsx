import React from "react";
import aboutstyle from "./about.module.css";

const AboutUs = () => {
  return (
    <section className={aboutstyle.aboutUs}>
      <div className={aboutstyle.container}>
        <h2 className={aboutstyle.heading}>
          Shriram Seva - A Life of Service & Simplicity
        </h2>
        <p className={aboutstyle.description}>
          <strong>Shriram Seva</strong> is a spiritual and humanitarian trust
          devoted to living and spreading the timeless values of Lord Ram.
          Guided by simplicity, humility, and unwavering devotion, we serve
          communities across India by providing education, healthcare, and food
          to those in need, while nurturing a deeper connection with dharma.
        </p>

        <div className={aboutstyle.mission}>
          <h3 className={aboutstyle.subheading}>Our Mission</h3>
          <p className={aboutstyle.text}>
            At Shriram Seva, we follow the grounded path of monk-like living—
            minimal needs, maximum service. Our mission is to carry the light of
            Lord Ram's teachings into every corner of society. Through seva
            (selfless service), we uplift underprivileged lives, preserve sacred
            traditions, and rebuild lost spiritual roots by renovating temples
            and supporting sadhus and saints.
          </p>
        </div>

        <div className={aboutstyle.grid}>
          <div className={aboutstyle.featureBox}>
            <h3 className={aboutstyle.subheading}>Our Initiatives</h3>
            <ul className={aboutstyle.list}>
              <li>Temple Construction & Rural Restoration Projects</li>
              <li>Gurukuls for Vedic & Modern Education</li>
              <li>Healthcare Camps in Remote Villages</li>
              <li>Annadan Yatra - Serving Prasadam to Thousands</li>
              <li>Promotion of Spiritual Living & Monkhood Training</li>
            </ul>
          </div>

          <div className={aboutstyle.featureBox}>
            <h3 className={aboutstyle.subheading}>Walk the Path With Us</h3>
            <p className={aboutstyle.text}>
              Shriram Seva welcomes hearts willing to serve. Join our cause as a
              volunteer, a donor, or simply by living the teachings in your own
              life. Experience the joy of giving, the peace of simplicity, and
              the blessings of Lord Ram.
            </p>
          </div>
        </div>

        <p className={aboutstyle.cta}>
          Renounce excess, embrace service — let’s build a world of compassion,
          one step at a time, in the name of Shri Ram.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;