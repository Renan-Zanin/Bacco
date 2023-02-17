import styles from "./InstitutionalSection.module.css";

export function InstitutionalSection() {
  return (
    <section className={styles.institutionalContainer}>
      <div className={styles.institutionalDescription}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className={styles.institutionalImage}></div>
    </section>
  );
}
