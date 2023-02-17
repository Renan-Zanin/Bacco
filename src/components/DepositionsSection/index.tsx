import styles from "./DepositionsSection.module.css";
import { IoMdStar } from "react-icons/io";

export function DepositionsSection() {
  return (
    <section className={styles.depositionsContainer}>
      <div className={styles.depositionItems}>
        <div>
          <div className={styles.depositionHeader}>
            <div className={styles.img}></div>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Lorem ipsum dolor</h1>
              <div className={styles.starsContainer}>
                <IoMdStar color="#7E7E7E" size={34} />
                <IoMdStar color="#7E7E7E" size={34} />
                <IoMdStar color="#7E7E7E" size={34} />
                <IoMdStar color="#7E7E7E" size={34} />
                <IoMdStar color="#7E7E7E" size={34} />
              </div>
            </div>
          </div>
          <p className={styles.depositionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
        <div>
          <div className={styles.depositionHeader}>
            <div className={styles.img}></div>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Lorem ipsum dolor</h1>
              <div className={styles.starsContainer}>
                <IoMdStar color="#7E7E7E" size={34} />
                <IoMdStar color="#7E7E7E" size={34} />
                <IoMdStar color="#7E7E7E" size={34} />
                <IoMdStar color="#7E7E7E" size={34} />
                <IoMdStar color="#7E7E7E" size={34} />
              </div>
            </div>
          </div>
          <p className={styles.depositionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </div>
      </div>

      <button className={styles.depositionButton}></button>
    </section>
  );
}
