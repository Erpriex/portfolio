import styles from '../styles/components/Project.module.scss';

const Project = ({company, title}) => {
    return (
        <article>
            <p className={styles.company}>{company}</p>
            <h2 className={styles.title}>{title}</h2>
        </article>
    )
}

export default Project;