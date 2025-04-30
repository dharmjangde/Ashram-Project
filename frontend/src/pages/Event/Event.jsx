import React from "react";
import styles from "./Event.module.css"; // Fixed the variable name to match usage

const buddhismImage =
    "https://as1.ftcdn.net/v2/jpg/11/11/98/68/1000_F_1111986856_t8s1SWtaXHMSVZf8obffm9IGWItE7Yb0.jpg";

const Event = () => {
    const events = [
        {
            title: "Meditation & Peace Talk",
            date: "April 25, 2025",
            location: "Ram Mandir Hall, Varanasi",
            description:
                "Join us for a spiritual gathering that includes guided meditation and discourse on Dhamma and Ramayana values.",
        },
        {
            title: "Free Health Camp",
            date: "May 10, 2025",
            location: "Shri Ram Seva Ashram, Ayodhya",
            description:
                "A health initiative for the underprivileged with free check-ups, medicine, and wellness sessions.",
        },
        {
            title: "Ram Navami Celebration",
            date: "April 17, 2025",
            location: "Shri Ram Mandir, Lucknow",
            description:
                "Cultural programs, Bhajan Sandhya, and community meal (Bhandara) in celebration of Lord Ram’s birth.",
        },
    ];

    return (
        <div className={styles.eventsSection}>
            <div className={styles.banner}>
                <img
                    src={buddhismImage}
                    alt="Buddhism Theme"
                    className={styles.bannerImage}
                />{" "}
                <div className={styles.bannerText}>
                    <h1> Upcoming Events </h1> <p> Serving Dharma, Seva, and Humanity </p>{" "}
                </div>{" "}
            </div>{" "}
            <div className={styles.eventList}>
                {" "}
                {events.map((event, index) => (
                    <div key={index} className={styles.eventCard}>
                        <h2> {event.title} </h2>{" "}
                        <p className={styles.eventDate}>
                            {" "}
                            {event.date}• {event.location}{" "}
                        </p>{" "}
                        <p> {event.description} </p>{" "}
                    </div>
                ))}{" "}
            </div>{" "}
        </div>
    );
};

export default Event;











//https://www.lakshmanjooacademy.org/kashmir-ashram#gsc.tab=0 refrence