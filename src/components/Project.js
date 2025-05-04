import styles from "../styles/components/Project.module.scss";
import { Link } from "react-router-dom";
import { ClickIcon } from "../utils/Icons";
import useIsTablet from "../hooks/useIsTablet";
import useOnScreen from "../hooks/useOnScreen";

const Project = ({
  company,
  title,
  description,
  img,
  link,
  reverse = false,
  isFirst = false,
}) => {
  const isTablet = useIsTablet();
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  const handleClick = () => {
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      ref={ref}
      className={`
        ${styles.container} 
        ${isVisible ? styles.appear : ""} 
        ${reverse ? styles.containerReverse : ""} 
        ${isFirst ? styles.firstDelay : ""}
        ${isTablet && link ? styles.linkCursor : ""}
      `}
      onClick={isTablet ? handleClick : undefined}
    >
      <section className={styles.textContainer}>
        <section className={reverse ? styles.headerReverse : ""}>
          <p className={styles.company}>{company}</p>
          <h2 className={styles.title}>{title}</h2>
        </section>
        <section
          className={`
            ${styles.descriptionContainer} 
            ${reverse ? styles.descriptionContainerReverse : ""}
          `}
        >
          <p className={styles.description}>{description}</p>
        </section>
        {!isTablet && link && (
          <section
            className={`
              ${styles.linksContainer} 
              ${reverse ? styles.linksContainerReverse : ""}
              ${!isTablet && link ? styles.linkCursor : ""}
            `}
            onClick={handleClick}
          >
            <ClickIcon />
          </section>
        )}
      </section>

      <div className={styles.gradientWrapper}>
        <div
          className={`
            ${styles.gradientCircle} 
            ${reverse ? styles.gradientCircleReverse : ""}
          `}
        ></div>
        <div
          className={`
            ${styles.gradientCircle} 
            ${styles.gradientCircleRight} 
            ${reverse ? `${styles.gradientCircleReverse} ${styles.gradientCircleRightReverse}` : ""}
          `}
        ></div>
      </div>

      <section
        className={`
          ${styles.imgContainer} 
          ${reverse ? styles.imgContainerReverse : ""}
          ${!isTablet && link ? styles.linkCursor : ""}
        `}
        onClick={handleClick}
      >
        <img className={styles.img} src={img} alt={title} />
      </section>

      {isTablet && link && (
        <section className={styles.linksContainer}>
          <Link to={link} target="_blank">
            <ClickIcon />
          </Link>
        </section>
      )}
    </article>
  );
};

export default Project;
