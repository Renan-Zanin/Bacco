import styles from "./Preparation.module.css";

export function Preparation() {
  return (
    <section className={styles.preparationContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.preparationTitle}></h1>
        <span className={styles.preparationDescription}>oi</span>
      </div>

      <div className={styles.descriptionWrapper}>
        <div className={styles.preparationGrid}>
          <div className={styles.preparationItem}>
            <h2 className={styles.itemTitle}></h2>
            <div className={styles.itemImage}></div>
            <span className={styles.itemDescription}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, ut
              facere. Id.
            </span>
          </div>
          <div className={styles.preparationItem}>
            <h2 className={styles.itemTitle}></h2>
            <div className={styles.itemImage}></div>
            <span className={styles.itemDescription}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, ut
              facere. Id.
            </span>
          </div>
          <div className={styles.preparationItem}>
            <h2 className={styles.itemTitle}></h2>
            <div className={styles.itemImage}></div>
            <span className={styles.itemDescription}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, ut
              facere. Id.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
