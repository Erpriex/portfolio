import styles from "../styles/components/ProfilePicture.module.scss";
import profileImg from "../assets/img/profile.png";
import JobCaroussel from "./JobCaroussel";

const ProfilePicture = () => {
  return (
    <section className={styles.imageWrapper}>
      <section className={styles.whiteGlow}></section>
      <section className={styles.purpleGradient}></section>
      <img
        src={profileImg}
        alt="Clément Trempé Développeur"
        className={styles.profileImg}
      />
      <JobCaroussel />
    </section>
  );
};

export default ProfilePicture;
