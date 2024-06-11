import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/widgets/header";
import { Main } from "@/widgets/main";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <h1 style={{ fontSize: 96, fontWeight: "regular" }}>
          Mahmudov Jonibek
        </h1>
        <h3 style={{ fontSize: 32, fontWeight: 500 }}>Frontend developer</h3>
      </div>
      <Main />
    </>
  );
}
