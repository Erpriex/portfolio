import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/components/ContactForm.module.scss";
import GlassSwitch from "./GlassSwitch";
import WaveEmoji from "./WaveEmoji";
import VoiceRecordPlayer from "./VoiceRecordPlayer";
import GlassButton from "./GlassButton";
import { showToast } from "../utils/Toast";
import useOnScreen from "../hooks/useOnScreen";

const ContactForm = () => {
  const [contactMessageTypeAudio, setContactMessageTypeAudio] = useState(true);
  const [contactMessageAudio, setContactMessageAudio] = useState(null);
  const resetAudioPlayerRef = useRef(null);
  const [formRef, isFormVisible] = useOnScreen({ threshold: 0.2 });
  const [hasFormAppeared, setHasFormAppeared] = useState(false);

  useEffect(() => {
    if (isFormVisible) {
      setHasFormAppeared(true);
    }
  }, [isFormVisible]);

  const handleContactMessageTypeChange = (newState) => {
    setContactMessageTypeAudio(newState);
  };

  const handleContactForm = async (event) => {
    event.preventDefault();

    const fd = new FormData();
    fd.append("name", document.getElementById("name").value);
    fd.append("email", document.getElementById("email").value);
    fd.append("subject", document.getElementById("subject").value);

    if (contactMessageTypeAudio) {
      if (!contactMessageAudio) {
        showToast("Enregistre un message vocal avant d’envoyer 🎙️", "error");
        return;
      }
      const filename = `message-${Date.now()}.webm`;
      const audioFile = new File([contactMessageAudio], filename, {
        type: contactMessageAudio.type || "audio/webm",
      });
      fd.append("audio", audioFile);
      fd.append("message", "Message vocal en pièce jointe.");
    } else {
      fd.append("message", document.getElementById("message").value);
    }

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        body: fd,
      });

      if (response.ok) {
        showToast("Votre message a été envoyé !");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        if (contactMessageTypeAudio) {
          resetAudioPlayerRef.current?.();
        } else {
          document.getElementById("message").value = "";
        }
      } else {
        showToast("Une erreur est survenue", "error");
      }
    } catch (error) {
      console.error(error);
      showToast("Une erreur est survenue", "error");
    }
  };

  return (
    <form
      ref={formRef}
      name="contact"
      onSubmit={handleContactForm}
      className={styles.contactForm}
    >
      <input
        className={`${styles.contactFormInput} ${hasFormAppeared ? styles.appear : ""}`}
        type="text"
        id="name"
        name="name"
        placeholder="Votre nom"
        required
      />
      <input
        className={`${styles.contactFormInput} ${styles.delay1} ${hasFormAppeared ? styles.appear : ""}`}
        type="text"
        id="email"
        name="email"
        placeholder="Votre email"
        required
      />
      <input
        className={`${styles.contactFormInput} ${styles.delay2} ${hasFormAppeared ? styles.appear : ""}`}
        type="text"
        id="subject"
        name="subject"
        placeholder="Objet"
        required
      />
      <div
        className={`${styles.contactMessageHeader} ${styles.delay3} ${hasFormAppeared ? styles.appear : ""}`}
      >
        <p className={styles.contactMessageHeaderLabel}>
          Message {contactMessageTypeAudio ? "vocal" : "texte"}
        </p>
        <GlassSwitch
          checked={contactMessageTypeAudio}
          handleClick={handleContactMessageTypeChange}
        />
      </div>
      {contactMessageTypeAudio ? (
        <div
          className={`${styles.contactAudioPlayerContainer} ${styles.delay4} ${hasFormAppeared ? styles.appear : ""}`}
        >
          <div className={styles.contactAudioPlayerLabelContainer}>
            <p className={styles.contactAudioPlayerLabel}>
              Laissez moi un message audio !
            </p>
            <p className={styles.contactAudioPlayerLabel}>
              Prise de contact, témoignage, ou simple bonjour <WaveEmoji />
            </p>
          </div>
          <VoiceRecordPlayer
            onResetRef={(resetFn) => {
              resetAudioPlayerRef.current = resetFn;
            }}
            onRecordingComplete={(audioBlob) => {
              setContactMessageAudio(audioBlob);
            }}
            onDelete={() => {
              setContactMessageAudio(null);
            }}
          />
        </div>
      ) : (
        <textarea
          className={`${styles.contactFormTextarea} ${styles.delay4} ${hasFormAppeared ? styles.appear : ""}`}
          id="message"
          name="message"
          placeholder="Votre message"
          required
        />
      )}
      <GlassButton
        className={`${styles.contactFormSubmitButton} ${styles.delay5} ${hasFormAppeared ? styles.appear : ""}`}
        type="submit"
      >
        Envoyer
      </GlassButton>
    </form>
  );
};

export default ContactForm;
