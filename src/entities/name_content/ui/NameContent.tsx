import { useEffect, useRef, useState } from "react";
import styles from "./NameContent.module.css";
import { useAnimate, useInView } from "framer-motion";

export default function NameContent() {
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
    <div ref={scope} className={styles.name_content}>
      <h1 id="name_title" className={styles.name}>
        Jonibek Mahmudov
      </h1>
      <h4 id="job_name" className={`${styles.profession}`}>
        Front end developer
      </h4>
    </div>
  );
}
