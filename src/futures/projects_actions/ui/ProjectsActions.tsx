import Link from "next/link";
import styles from "./ProjectsActions.module.css";

export default function ProjectsActions() {
  return (
    <div className={styles.projects_wraper}>
      <Link className={styles.btn} href="/projects">
        <img src="/arrow.png" alt="" width={24} /> All projects
      </Link>
      <Link className={styles.btn} href="/contact">
        <img src="/arrow.png" alt="" width={24} /> Contact me
      </Link>
    </div>
  );
}
