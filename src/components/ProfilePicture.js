import styles from "../styles/components/ProfilePicture.module.scss";
import profileImg from "../assets/img/profile.png";

const ProfilePicture = ({ img }) => {
  return (
    <section className={styles.imageWrapper}>
      <section className={styles.whiteGlow}></section>
      <section className={styles.purpleGradient}></section>
      <img
        src={profileImg}
        alt="Clément Trempé Développeur"
        className={styles.profileImg}
      />
    </section>
  );
};

export default ProfilePicture;
