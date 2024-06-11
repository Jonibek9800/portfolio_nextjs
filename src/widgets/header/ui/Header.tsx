import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.nav_bar}>
        <Link className={styles.nav_bar_link} href="/">
          Home
        </Link>
        <Link className={styles.nav_bar_link} href="/projects">
          Projects
        </Link>
        <Link className={styles.nav_bar_link} href="/about">
          About
        </Link>
        <Link className={styles.nav_bar_link} href="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
}
