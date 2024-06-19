import { ProjectCard } from "@/entities/project_card";
import styles from "./ProjectList.module.css";

export default function ProjectList() {
  return (
    <div className={styles.project_list}>
      <ProjectCard image="/" title="" description="" />
      <ProjectCard image="/" title="" description="" />
      <ProjectCard image="/" title="" description="" />
      <ProjectCard image="/" title="" description="" />
      <ProjectCard image="/" title="" description="" />
      <ProjectCard image="/" title="" description="" />
    </div>
  );
}
