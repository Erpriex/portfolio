import styles from '../styles/pages/Home.module.scss';
import ProfilePicture from "../components/ProfilePicture";

const HomePage = () => {
    return (
        <section className={styles.container}>
            <main className={styles.mainSection}>
                <div className={`${styles.appear} ${styles['appear--delay-1']}`}>
                    <ProfilePicture />
                </div>
                <section>
                    <h1 className={`${styles.mainTitle} ${styles.appear} ${styles['appear--delay-1']}`}>
                        Salut <span className={styles.wave}>👋</span>, moi c'est Clément !
                    </h1>
                    <p className={`${styles.mainSubtitle} ${styles.appear} ${styles['appear--delay-2']}`}>
                        Développement 💻 | DevOps 🚀 | Gestion de projet 🌍
                    </p>
                </section>
            </main>
        </section>
    );
};

export default HomePage;
