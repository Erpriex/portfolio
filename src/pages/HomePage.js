import styles from "../styles/pages/Home.module.scss";
import ProfilePicture from "../components/ProfilePicture";
import Project from "../components/Project";
import WaveEmoji from "../components/WaveEmoji";
import rifraichImg from "../assets/img/rifraich.png";
import bookmetrieImg from "../assets/img/bookmetrie.png";
import gleephImg from "../assets/img/gleeph.jpg";
import { GitHubIcon, LinkedInIcon } from "../utils/Icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className={styles.container}>
      <main className={styles.mainSection}>
        <section className={`${styles.appear} ${styles["appear--delay-1"]}`}>
          <ProfilePicture />
        </section>
        <section>
          <h1
            className={`${styles.mainTitle} ${styles.appear} ${styles["appear--delay-1"]}`}
          >
            Salut <WaveEmoji />, moi c'est Clément !
          </h1>
          <p
            className={`${styles.mainSubtitle} ${styles.appear} ${styles["appear--delay-2"]}`}
          >
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
          isFirst
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
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <form className={styles.contactForm}>
          <input
            className={styles.contactFormInput}
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            required
          />
          <input
            className={styles.contactFormInput}
            type="text"
            id="email"
            name="email"
            placeholder="Votre email"
            required
          />
          <input
            className={styles.contactFormInput}
            type="text"
            id="subject"
            name="subject"
            placeholder="Objet"
            required
          />
          <textarea
            className={styles.contactFormTextarea}
            id="message"
            name="message"
            placeholder="Votre message"
            required
          />
          <button className={styles.contactFormSubmitButton} type="submit">
            Envoyer
          </button>
        </form>
      </section>
      <footer className={styles.footer}>
        <section className={styles.footerSocials}>
          <Link to="https://github.com/Erpriex" target="_blank">
            <GitHubIcon size="60" stroke="#FFF" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/clement-trempe/"
            target="_blank"
          >
            <LinkedInIcon stroke="#FFF" size="50" />
          </Link>
        </section>
        <p className={styles.footerText}>
          © Clément 2025. Tous droits réservés.
        </p>
        <p className={styles.footerText}>
          Design inspiré de{" "}
          <a
            href="https://www.figma.com/@ibrahimmemon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ibrahim Memon
          </a>
        </p>
      </footer>
    </section>
  );
};

export default HomePage;
