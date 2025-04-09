import React from "react";
import styles from "./cardContent.module.css"; 

const CardContent = ({ children }) => {
  return <div className={styles.cardContent}>{children}</div>;
};

export default CardContent;
