import React from "react";
import styles from "../styles/components/JobCaroussel.module.scss";
import arrowImg from "../assets/img/arrow.png";

const JobCaroussel = () => {
  const jobList = [
    "Full Stack",
    "Frontend",
    "Backend",
    "Mobile",
    "React",
    "Node.js",
    "Java",
    "DevOps",
  ];

  const [currentJob, setCurrentJob] = React.useState(0);

  const handleClickJob = () => {
    setCurrentJob((prevJob) => (prevJob + 1) % jobList.length);
  };

  return (
    <section className={styles.container}>
      <img className={styles.img} src={arrowImg} alt="arrow" />
      <p className={styles.label}>
        Développeur{" "}
        <span className={styles.jobLabel} onClick={handleClickJob}>
          {jobList[currentJob]}
        </span>
      </p>
    </section>
  );
};

export default JobCaroussel;
