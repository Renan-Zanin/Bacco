import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.navMenu}>
        <div className={styles.menuItems}></div>
        <div className={styles.menuItems}></div>
        <div className={styles.menuItems}></div>
      </div>
    </header>
  );
}
