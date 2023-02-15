
import styles from './modal.module.css'

export default function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose()
    }
  }

  return (
    <div className={styles["modal-wrapper"]} id="wrapper" onClick={handleClose}>
      <div className={styles["modal"]}>
        <button className={styles["modal-close-button"]} onClick={() => onClose()}>
          X
        </button>
        <div className={styles["modal-body"]}>{children}</div>
      </div>
    </div>
  )
}
