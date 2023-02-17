import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <div>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>
            Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing
            elit sed do <span>eiusmod</span>
          </h1>
        </div>
        <button className={styles.heroButton}></button>
      </div>
    </section>
  );
}
