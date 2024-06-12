"use client";
import styles from "./page.module.css";
import { Main } from "@/widgets/main";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const aniMated = async () => {
        await animate(
          "#name_title",
          { opacity: 1, marginLeft: 0 },
          { duration: 1.5, ease: "easeInOut" }
        );
        await animate("#job_name", { opacity: 1, marginRight: 0 });
      };
      aniMated();
    }
  }, [isInView, animate]);

  return (
    <>
      <div ref={scope} className={styles.main}>
        <h1
          id="name_title"
          style={{
            fontSize: 96,
            fontWeight: "regular",
            opacity: 0,
            marginLeft: -300,
          }}
        >
          Mahmudov Jonibek
        </h1>
        <h3
          id="job_name"
          style={{
            fontSize: 32,
            fontWeight: 500,
            opacity: 0,
            marginRight: -350,
          }}
        >
          Frontend developer
        </h3>
      </div>
      <Main />
    </>
  );
}
