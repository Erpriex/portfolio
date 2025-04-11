import styles from '../styles/components/Project.module.scss';
import { Link } from 'react-router-dom';
import { ClickIcon } from '../utils/Icons';
import useIsTablet from "../hooks/useIsTablet";

const Project = ({ company, title, description, img, link, reverse = false }) => {

    const isTablet = useIsTablet();

    return (
        <article className={`${styles.container} ${reverse ? styles.containerReverse : ''}`}>
            <section className={styles.textContainer}>
                <section className={`${reverse ? styles.headerReverse : ''}`}>
                    <p className={styles.company}>{company}</p>
                    <h2 className={styles.title}>{title}</h2>
                </section>
                <section className={`${styles.descriptionContainer} ${reverse ? styles.descriptionContainerReverse : ''}`}>
                    <p className={styles.description}>{description}</p>
                </section>
                {!isTablet && link && (
                    <section className={`${styles.linksContainer} ${reverse ? styles.linksContainerReverse : ''}`}>
                        <Link to={link} target="_blank">
                            <ClickIcon />
                        </Link>
                    </section>
                )}
            </section>

            <div className={styles.gradientWrapper}>
                <div className={`${styles.gradientCircle} ${reverse ? styles.gradientCircleReverse : ''}`}></div>
                <div className={`
              ${styles.gradientCircle} 
              ${styles.gradientCircleRight} 
              ${reverse ? `${styles.gradientCircleReverse} ${styles.gradientCircleRightReverse}` : ''}
            `}></div>
            </div>

            <section className={`${styles.imgContainer} ${reverse ? styles.imgContainerReverse : ''}`}>
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
