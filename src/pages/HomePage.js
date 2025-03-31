import styles from '../styles/pages/Home.module.scss';
import ProfilePicture from "../components/ProfilePicture";
import Project from "../components/Project";
import WaveEmoji from "../components/WaveEmoji";

const HomePage = () => {
    return (
        <section className={styles.container}>
            <main className={styles.mainSection}>
                <section className={`${styles.appear} ${styles['appear--delay-1']}`}>
                    <ProfilePicture />
                </section>
                <section>
                    <h1 className={`${styles.mainTitle} ${styles.appear} ${styles['appear--delay-1']}`}>
                        Salut <WaveEmoji />, moi c'est Clément !
                    </h1>
                    <p className={`${styles.mainSubtitle} ${styles.appear} ${styles['appear--delay-2']}`}>
                        Développement 💻 | DevOps 🚀 | Gestion de projet 🌍
                    </p>
                </section>
            </main>
            <aside className={styles.projectsSection}>
                <Project company="ESPL" title="RIFRAICH" />
            </aside>
        </section>
    );
};

export default HomePage;
