import styles from "../styles/pages/Home.module.scss";
import ProfilePicture from "../components/ProfilePicture";
import Project from "../components/Project";
import WaveEmoji from "../components/WaveEmoji";
import { GitHubIcon, LinkedInIcon } from "../utils/Icons";
import { Link } from "react-router-dom";
import { showToast } from "../utils/Toast";
import BackToTop from "../components/BackToTop";
import RecommendationCard from "../components/RecommendationCard";
import rifraichImg from "../assets/img/rifraich.png";
import bookmetrieImg from "../assets/img/bookmetrie.jpeg";
import gleephImg from "../assets/img/gleeph.jpg";
import glecomteImg from "../assets/img/glecomte.png";
import aglacialImg from "../assets/img/aglacial.png";
import LiquidGlassButton from "../components/LiquidGlassButton";

const HomePage = () => {
  const currentDate = new Date();

  const recommendations = [
    {
      img: glecomteImg,
      name: "Guillaume Lecomte",
      job: "Développeur Full Stack",
      content:
        "Clément est un développeur full stack talentueux, alliant rigueur technique et leadership collaboratif. Toujours à l’écoute et force de proposition, c’est un partenaire idéal pour des projets ambitieux. Un plaisir de coder à ses côtés !",
    },
    {
      img: aglacialImg,
      name: "Alban Glacial",
      job: "Ingénieur Systèmes et Réseaux",
      content:
        "Clément est un développeur web talentueux et rigoureux. Il se distingue également par une grande intelligence relationnelle : toujours à l’écoute, bienveillant et excellent en travail d’équipe !",
    },
  ];

  const handleContactForm = async (event) => {
    event.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        showToast("Votre message a été envoyé !");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      } else {
        showToast("Une erreur est survenue", "error");
      }
    } catch (error) {
      showToast("Une erreur est survenue", "error");
    }
  };

  return (
    <>
      <section className={styles.container}>
        <main className={styles.mainSection}>
          <section className={`${styles.appear} ${styles["appear--delay-1"]}`}>
            <ProfilePicture />
          </section>
          <section>
            <h1
              className={`${styles.mainTitle} ${styles.appear} ${styles["appear--delay-1"]}`}
            >
              Hello <WaveEmoji />, moi c'est Clément !
            </h1>
            <p
              className={`${styles.mainSubtitle} ${styles.appear} ${styles["appear--delay-2"]}`}
            >
              Développement 💻 | DevOps 🚀 | Gestion de projet 🌍 |
              Collaboration en équipe 🤝
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
        <section className={styles.recommendationsSection}>
          <h2 className={styles.recommendationsTitle}>Ils donnent leur avis</h2>
          <section className={styles.recommendationsContent}>
            {recommendations.map((rec, i) => (
              <RecommendationCard
                key={i}
                img={rec.img}
                name={rec.name}
                job={rec.job}
                content={rec.content}
              />
            ))}
          </section>
        </section>
        <section className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Contact</h2>
          <form
            name="contact"
            onSubmit={handleContactForm}
            className={styles.contactForm}
          >
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
            <LiquidGlassButton
              className={styles.contactFormSubmitButton}
              type="submit"
            >
              Envoyer
            </LiquidGlassButton>
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
