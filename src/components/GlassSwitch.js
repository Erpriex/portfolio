import React, { useState } from "react";
import styles from "../styles/components/GlassSwitch.module.scss";

const GlassSwitch = ({
  className = "",
  handleClick = () => {},
  checked: checkedProp,
  disabled = false,
  ariaLabel = "",
}) => {
  const [isChecked, setIsChecked] = useState(checkedProp || false);

  const handleOnClick = () => {
    if (!disabled) {
      const newCheckedState = !isChecked;
      setIsChecked(newCheckedState);
      handleClick(newCheckedState);
    }
  };

  return (
    <button
      className={`${styles.container} ${isChecked ? styles.checked : ""} ${disabled ? styles.disabled : ""} ${className}`}
      onClick={handleOnClick}
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      role="switch"
      aria-checked={isChecked}
    >
      <div className={styles.track}>
        <div className={styles.thumb}></div>
      </div>
    </button>
  );
};

export default GlassSwitch;
