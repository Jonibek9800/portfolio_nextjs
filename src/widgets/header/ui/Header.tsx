"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { links } from "../model";

export default function Header() {
  const path = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.nav_bar}>
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              className={
                path == link.lable
                  ? `${styles.nav_bar_link} ${styles.nav_bar_link_active}`
                  : styles.nav_bar_link
              }
              href={link.lable}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
