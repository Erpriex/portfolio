import React, { useState, useEffect } from "react";
import styles from "../styles/components/BackToTop.module.scss";
import { ArrowUpIcon } from "../utils/Icons";
import LiquidGlassButton from "./LiquidGlassButton";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.activeElement.blur();
  };

  return (
    <LiquidGlassButton
      className={`${styles.container} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      <ArrowUpIcon />
    </LiquidGlassButton>
  );
};

export default BackToTop;
