import styles from '../styles/pages/Home.module.scss';
import ProfilePicture from "../components/ProfilePicture";
import Project from "../components/Project";
import WaveEmoji from "../components/WaveEmoji";
import rifraichImg from '../assets/img/rifraich.png';
import bookmetrieImg from '../assets/img/bookmetrie.png';
import gleephImg from '../assets/img/gleeph.jpg';

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
                    company="F-451"
                    title="Bookmétrie"
                    description="Bookmétrie est un SaaS regroupant les tendances, les tops via le social listening, des études de lectorat, l'accès à des titres et auteurs similaires, ainsi que des données précieuses sur le lectorat et l'environnement concurrentiel pour les professionnels de l'édition."
                    img={bookmetrieImg}
                    link="https://gleeph.pro/"
                    reverse
                />
                <Project
                    company="F-451"
                    title="Gleeph"
                    description="Gleeph est une application mobile qui aide les utilisateurs à organiser leur bibliothèque, à se connecter avec d'autres lecteurs pour partager des avis sur les livres, et obtenir des recommandations de lecture."
                    img={gleephImg}
                    link="https://gleeph.com/"
                />
            </aside>
        </section>
    );
};

export default HomePage;
