import styles from '../styles/pages/Home.module.scss';
import ProfilePicture from "../components/ProfilePicture";

const HomePage = () => {
    return (
        <section className={styles.container}>
            <main className={styles.mainSection}>
                <ProfilePicture />
                <section>
                    <h1 className={styles.mainTitle}>Salut 👋, moi c'est Clément !</h1>
                    <p className={styles.mainSubtitle}>Développement 💻 | DevOps 🚀 | Gestion de projet 🌍</p>
                </section>
            </main>
        </section>
    );
}

export default HomePage;