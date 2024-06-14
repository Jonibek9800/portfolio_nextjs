import { useEffect, useState } from "react";
import styles from "./NameContent.module.css";
import { strName } from "../model";

export default function NameContent() {
  const [strIndex, setStrIndex] = useState(0);
  const [myName, setMyName] = useState("");
  const [myProf, setMyProf] = useState("");

  useEffect(() => {
    const timeOne = setTimeout(() => {
      const timer = setTimeout(() => {
        if (strIndex <= 15) {
          setMyName((prev) => (prev += strName[strIndex]));
        } else {
          setMyProf((prev) => (prev += strName[strIndex]));
        }
        setStrIndex((prev) => (prev += 1));
      }, 100);

      if (strIndex === strName.length) {
        clearTimeout(timer);
      }
    }, 0);
    return () => clearTimeout(timeOne);
  }, [strIndex]);
  return (
    <div className={styles.name_content}>
      <h1
        className={
          strIndex >= 15 ? styles.name : `${styles.activeName} ${styles.name}`
        }
      >
        {myName}
      </h1>
      <h4
        className={
          strIndex <= 15
            ? styles.profession
            : `${styles.profession} ${styles.activeName}`
        }
      >
        {myProf}
      </h4>
    </div>
  );
}
