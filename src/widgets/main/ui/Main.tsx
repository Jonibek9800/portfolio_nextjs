import { ProjectCard } from "@/entities/project_card";
import styles from "./Main.module.css";
import { ProjectsActions } from "@/futures/projects_actions";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { skills } from "../model";
import { SkillCard } from "@/futures/skill_card";

const textAnimate = {
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
  hidden: {
    x: 150,
    opacity: 0,
  },
};

export default function Main() {
  const [ref, animateOne] = useAnimate();
  const [ref2, animateTwo] = useAnimate();
  const inView = useInView(ref);
  const isSkillsView = useInView(ref2);

  useEffect(() => {
    if (inView) {
      animateOne("#about_title", { opacity: 1, marginLeft: 0 }, { delay: 0.5 });
      animateOne(
        "#aboute_content",
        { opacity: 1, marginLeft: 0 },
        { delay: 0.5 }
      );
    }
    if (isSkillsView) {
      animateTwo("#skills", { opacity: 1 }, { delay: 1 });
    }
  }, [inView, animateOne]);

  return (
    <main className={styles.main}>
      <div ref={ref2} className={styles.main_wraper}>
        <div ref={ref} id="about" className={styles.about_me}>
          <h4 id="about_title" className={styles.about_me_title}>
            About me
          </h4>
          <span id="aboute_content" className={styles.about_me_content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse
            cum optio repudiandae deserunt ex facere nobis delectus autem
            maiores veritatis velit, vitae sint iure nemo ducimus, omnis ut
            iusto.
          </span>
        </div>
        <motion.div
          className={styles.my_skils}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
        >
          <motion.h4
            custom={1}
            variants={textAnimate}
            className={styles.my_skills_title}
          >
            My Skills
          </motion.h4>
          <div id="skills" className={styles.my_skills_wrapper}>
            {skills.map((skill) => {
              return (
                <SkillCard
                  key={skill.id}
                  classes=""
                  title={skill.title}
                  href={skill.link}
                  sourse={skill.sourse}
                />
              );
            })}
          </div>
        </motion.div>
        <div className={styles.my_projects}>
          <div className={styles.project_card_wrapper}>
            <ProjectCard
              image="/maket.jpg"
              title="Restaurant site from Nextjs and Antd"
              description="Restaurant website made using Next js, TypeScrypt, Antd as state manager selected by Zustand"
            />
            <ProjectCard
              image="/maket.jpg"
              title="My Pro"
              description="Lorem ipsum"
            />
            <ProjectCard
              image="/maket.jpg"
              title="My Pro"
              description="Lorem ipsum"
            />
          </div>
          <ProjectsActions />
        </div>
      </div>
    </main>
  );
}
