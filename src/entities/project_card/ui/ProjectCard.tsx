import styles from "./ProjectCard.module.css";

interface IProjectProps {
  image: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  image,
  title,
  description,
}: IProjectProps) {
  return (
    <div className={styles.project_card}>
      <img className={styles.project_poster} src={image} />
      <h3 className={styles.prolect_title}>{title}</h3>
      <p className={styles.project_desc}>{description}</p>
    </div>
  );
}
