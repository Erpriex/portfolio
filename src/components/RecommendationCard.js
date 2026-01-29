import React from "react";
import styles from "../styles/components/RecommendationCard.module.scss";

const RecommendationCard = ({ img, name, job, link, content }) => {
  const gradients = [
    "linear-gradient(110deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)",
    "linear-gradient(96deg,  #130428 0.58%,  #251043 16.32%,  #38126D 29.33%,  #261045 45.66%,  #190634 54.44%)",
    "linear-gradient(96deg,  #130428 0.58%,  #251043 16.32%,  #38126D 29.33%,  #261045 45.66%,  #190634 54.44%)",
    "linear-gradient(150deg, #130428 37.22%, #251043 70.43%, #38126D 97.89%, #261045 132.38%, #190634 150.9%)",
  ];

  const gradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <section
      className={styles.container}
      style={{ background: gradient }}
      onClick={() => window.open(link, "_blank")}
    >
      <section className={styles.header}>
        <img className={styles.img} src={img} alt={name} />
        <section>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.job}>{job}</p>
        </section>
      </section>
      <p className={styles.content}>{content}</p>
    </section>
  );
};

export default RecommendationCard;
