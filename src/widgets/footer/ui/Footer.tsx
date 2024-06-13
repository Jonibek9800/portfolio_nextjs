import Link from "next/link";
import { links } from "../model";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        {links.map((link) => {
          return (
            <Link
              className={styles.navigation_link}
              key={link.id}
              href={link.lable}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className={styles.contacts}>
        <p className={`${styles.contact_phone} ${styles.contact}`}>
          Phone: +992 00 177 7786
        </p>
        <p className={`${styles.contact_email} ${styles.contact}`}>
          Email: Jonibek.mahmudov1998@mail.ru
        </p>
        <div className={styles.network}>
          <button className={styles.sosial_btn}>
            <a
              target="_blank"
              className={styles.sosial_btn_link}
              href="https://www.instagram.com/Jonibek_9800"
            >
              <img src="/instagram.png" alt="" width={32} />
            </a>
          </button>
          <button className={styles.sosial_btn}>
            <a
              target="_blank"
              className={styles.sosial_btn_link}
              href="https://t.me/Polzovatel_000"
            >
              <img src="/telegram.png" alt="" width={32} />
            </a>
          </button>
          <button className={styles.sosial_btn}>
            <a
              className={styles.sosial_btn_link}
              href="https://discord.com/"
              target="_blank"
            >
              <img src="/discord.png" alt="" width={32} />
            </a>
          </button>
        </div>
      </div>
      <div className={styles.logo}>
        <img src="/logo_portfolio.jpg" alt="" width={80} />
      </div>
    </footer>
  );
}
