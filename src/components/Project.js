import styles from '../styles/components/Project.module.scss';

const Project = ({company, title, description}) => {
    return (
        <article>
            <section>
                <p className={styles.company}>{company}</p>
                <h2 className={styles.title}>{title}</h2>
                <section className={styles.descriptionContainer}>
                    <p className={styles.description}>{description}</p>
                </section>
            </section>

        </article>
    )
}

export default Project;