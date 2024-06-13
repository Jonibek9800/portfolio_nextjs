"use client";
import { NameContent } from "@/entities/name_content";
import styles from "./page.module.css";
import { Main } from "@/widgets/main";
import { Footer } from "@/widgets/footer";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <NameContent />
      </div>
      <Main />
      <Footer />
    </>
  );
}
