import styles from "../styles/pages/Home.module.scss";
import ProfilePicture from "../components/ProfilePicture";
import Project from "../components/Project";
import WaveEmoji from "../components/WaveEmoji";
import { GitHubIcon, LinkedInIcon } from "../utils/Icons";
import { Link } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import RecommendationCard from "../components/RecommendationCard";
import rifraichImg from "../assets/img/rifraich.png";
import bookmetrieImg from "../assets/img/bookmetrie.jpeg";
import gleephImg from "../assets/img/gleeph.jpg";
import glecomteImg from "../assets/img/glecomte.png";
import ymauffreyImg from "../assets/img/ymauffrey.png";
import aglacialImg from "../assets/img/aglacial.png";
import ContactForm from "../components/ContactForm";

const HomePage = () => {
  const currentDate = new Date();

  const recommendations = [
    {
      img: ymauffreyImg,
      name: "Yann Mauffrey",
      job: "CTO & Senior Data Scientist @ Gleeph",
      link: "https://www.linkedin.com/in/yann-mauffrey-8b33b6106",
      content:
        "J'ai eu le plaisir d'encadrer Clément pendant son alternance chez Gleeph. En tant que développeur frontend, il a rapidement fait ses preuves grâce à sa maîtrise de NextJs, de React Native et ReactJs. Son sens aigu du détail, son approche positive et collaborative ont fait de lui une pièce essentielle de l'équipe. Son envie de monter en compétence l’a aussi poussé à explorer le backend, ce qui n'a fait que renforcer sa polyvalence.\n" +
        "Si vous cherchez un développeur compétent, fiable et surtout agréable à côtoyer au quotidien, Clément est le profil idéal. Je le recommande vivement !",
    },
    {
      img: glecomteImg,
      name: "Guillaume Lecomte",
      job: "Développeur Full Stack @ Dioqa",
      link: "https://www.linkedin.com/in/guillaumelecomte-pro/",
      content:
        "Clément est un développeur full stack talentueux, alliant rigueur technique et leadership collaboratif. Toujours à l’écoute et force de proposition, c’est un partenaire idéal pour des projets ambitieux. Un plaisir de coder à ses côtés !",
    },
    {
      img: aglacialImg,
      name: "Alban Glacial",
      job: "Ingénieur infrastructure @ Centre Hospitalier de Quimper",
      link: "https://www.linkedin.com/in/alban-glacial-39966224b/",
      content:
        "Clément est un développeur web talentueux et rigoureux. Il se distingue également par une grande intelligence relationnelle : toujours à l’écoute, bienveillant et excellent en travail d’équipe !",
    },
  ];

  return (
    <>
      <section className={styles.container}>
        <main className={styles.mainSection}>
          <div className={`${styles.appear} ${styles["appear--delay-1"]}`}>
            <ProfilePicture />
          </div>
          <div>
            <h1
              className={`${styles.mainTitle} ${styles.appear} ${styles["appear--delay-1"]}`}
            >
              Salut <WaveEmoji />, moi c'est Clément !
            </h1>
            <p
              className={`${styles.mainSubtitle} ${styles.appear} ${styles["appear--delay-2"]}`}
            >
              Développement 💻 | DevOps 🚀 | Gestion de projet 🌍 | Vision
              produit 🧭
            </p>
          </div>
        </main>
        <aside className={styles.projectsSection}>
          <Project
            company="ESPL"
            title="RIFRAICH"
            description="Plateforme SaaS de gestion et de vente en ligne dédiée aux professionnels de la seconde main. Elle permet de digitaliser la gestion des boutiques, du stock, de la clientèle et des ventes, afin de faciliter le pilotage quotidien et d’améliorer la visibilité en ligne."
            img={rifraichImg}
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
        <section className={styles.recommendationsSection}>
          <h2 className={styles.recommendationsTitle}>Témoignages</h2>
          <section className={styles.recommendationsContent}>
            {recommendations.map((rec, i) => (
              <RecommendationCard
                key={i}
                img={rec.img}
                name={rec.name}
                job={rec.job}
                link={rec.link}
                content={rec.content}
              />
            ))}
          </section>
        </section>
        <section className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Contact</h2>
          <ContactForm />
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerSocials}>
            <Link to="https://github.com/Erpriex" target="_blank">
              <GitHubIcon size="60" stroke="#FFF" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/clement-trempe/"
              target="_blank"
            >
              <LinkedInIcon stroke="#FFF" size="50" />
            </Link>
          </div>
          <p className={styles.footerText}>
            © Clément {currentDate.getFullYear()}. Tous droits réservés.
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
        <BackToTop />
      </section>
      <div
        id="toast-container"
        style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}
      ></div>
    </>
  );
};

export default HomePage;
