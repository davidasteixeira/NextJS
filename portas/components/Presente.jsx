import styles from "../src/styles/Presente.module.css";

export default function Presente() {
  return (
    <div className={styles.presente}>
      <div className={styles.tampa}></div>
      <div className={styles.corpo}></div>
      <div className={styles.laco_primeiro}></div>
      <div className={styles.laco_segundo}></div>
    </div>
  );
}
