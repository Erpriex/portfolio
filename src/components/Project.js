import styles from '../styles/components/Project.module.scss';

const Project = ({company, title}) => {
    return (
        <article>
            <p>{company}</p>
            <h2>{title}</h2>
        </article>
    )
}

export default Project;