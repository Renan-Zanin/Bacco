import styles from "./Prizes.module.css";

export function Prizes() {
  return (
    <section className={styles.prizesContainer}>
      <div className={styles.mediumPrize}></div>
      <div className={styles.bigPrize}></div>
      <div className={styles.mediumPrize}></div>
    </section>
  );
}
