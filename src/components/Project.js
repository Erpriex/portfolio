import styles from '../styles/components/Project.module.scss';
import { Link } from 'react-router-dom';
import { ClickIcon } from '../utils/Icons';

const Project = ({ company, title, description, img, link }) => {
    return (
        <article className={styles.container}>
            <section className={styles.textContainer}>
                <p className={styles.company}>{company}</p>
                <h2 className={styles.title}>{title}</h2>
                <section className={styles.descriptionContainer}>
                    <p className={styles.description}>{description}</p>
                </section>
                {link && (
                    <section className={styles.linksContainer}>
                        <Link to={link} target="_blank">
                            <ClickIcon />
                        </Link>
                    </section>
                )}
            </section>

            <div className={styles.gradientWrapper}>
                <div className={styles.gradientCircle}></div>
                <div className={`${styles.gradientCircle} ${styles.gradientCircleRight}`}></div>
            </div>

            <section className={styles.imgContainer}>
                <img className={styles.img} src={img} alt={title} />
            </section>
        </article>
    );
};

export default Project;
