import styles from "./ProjectsActions.module.css";

export default function ProjectsActions() {
  return (
    <div className={styles.projects_wraper}>
      <button className={styles.btn}>All projects</button>
      <button className={styles.btn}>Contact me</button>
    </div>
  );
}
