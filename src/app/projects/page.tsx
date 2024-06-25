import { ProjectList } from "@/widgets/project_list";
import styles from "./Project.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.projects_header}>
        <h1>MY PROJECTS</h1>
        <span>MADE WITH LOVE</span>
      </div>
      <ProjectList />
    </>
  );
};

export default Projects;
