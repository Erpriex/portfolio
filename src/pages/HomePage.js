import styles from '../styles/pages/Home.module.scss';
import ProfilePicture from "../components/ProfilePicture";
import Project from "../components/Project";
import WaveEmoji from "../components/WaveEmoji";
import rifraichImg from '../assets/img/rifraich.png';

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
                <Project
                    company="ESPL"
                    title="RIFRAICH"
                    description="RIFRAICH est une marketplace dédiée aux friperies locales, qui rassemble une sélection de vêtements vintage et de seconde main. La plateforme met en valeur les boutiques indépendantes en leur offrant une vitrine en ligne commune, alliant mode responsable, économie circulaire et commerce de proximité."
                    img={rifraichImg}
                    link="https://rifraich.fr/"
                />
                <Project
                    company="ESPL"
                    title="RIFRAICH"
                    description="RIFRAICH est une marketplace dédiée aux friperies locales, qui rassemble une sélection de vêtements vintage et de seconde main. La plateforme met en valeur les boutiques indépendantes en leur offrant une vitrine en ligne commune, alliant mode responsable, économie circulaire et commerce de proximité."
                    img={rifraichImg}
                    link="https://rifraich.fr/"
                    reverse
                />
            </aside>
        </section>
    );
};

export default HomePage;
