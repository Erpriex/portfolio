import styles from "../styles/components/Toast.module.scss";

export const showToast = (message, type = "success") => {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `${styles.toast} ${styles[type]}`;
  toast.innerHTML = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add(styles.fadeOut);
  }, 3000);

  setTimeout(() => {
    toast.remove();
  }, 3300);
};
