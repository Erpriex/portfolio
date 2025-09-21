import React from "react";
import styles from "../styles/components/GlassButton.module.scss";

const GlassButton = ({
  className = "",
  onClick = () => {},
  type = "button",
  arialLabel = "",
  children,
}) => {
  return (
    <button
      className={`${styles.container} ${className}`}
      onClick={onClick}
      type={type}
      aria-label={arialLabel}
    >
      {children}
    </button>
  );
};

export default GlassButton;
