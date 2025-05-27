import React, { useEffect, useState, useCallback, useRef } from "react";
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

  const [currentJob, setCurrentJob] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const intervalRef = useRef(null);

  const handleJobChange = useCallback(() => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentJob((prevJob) => (prevJob + 1) % jobList.length);
      setIsChanging(false);
    }, 300);
  }, [jobList.length]);

  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      handleJobChange();
    }, 6000);
  }, [handleJobChange]);

  const handleClick = useCallback(() => {
    handleJobChange();
    startInterval();
  }, [handleJobChange, startInterval]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]);

  return (
    <section className={styles.container}>
      <img className={styles.img} src={arrowImg} alt="arrow" />
      <p className={styles.label}>
        Développeur{" "}
        <span
          className={`${styles.jobLabel} ${isChanging ? styles.leaving : styles.entering}`}
          onClick={handleClick}
        >
          {jobList[currentJob]}
        </span>
      </p>
    </section>
  );
};

export default JobCaroussel;
