import { ProjectCard } from "@/entities/project_card";
import styles from "./Main.module.css";
import { ProjectsActions } from "@/futures/projects_actions";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

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
  const [scope, animate] = useAnimate();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      animate("#about_title", { opacity: 1, marginLeft: 0 }, { delay: 0.5 });
      animate(
        "#aboute_content",
        { opacity: 1, marginLeft: 0 },
        { delay: 0.5 }
      );
    }
  }, [inView, animate]);

  return (
    <main className={styles.main}>
      <div className={styles.main_wraper}>
        <div ref={scope} id="about" className={styles.about_me}>
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
          <div className={styles.my_skills_wrapper}>
            <motion.div
              custom={2}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/html.png" alt="" width={24} /> Html
            </motion.div>
            <motion.div
              custom={2.1}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/css.png" alt="" width={24} /> Css
            </motion.div>
            <motion.div
              custom={2.2}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/javascript.png" alt="" width={24} /> JavaScript
            </motion.div>
            <motion.div
              custom={2.3}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/scss.png" alt="" width={24} /> Scss
            </motion.div>
            <motion.div
              custom={2.4}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/bootstrap.png" alt="" width={24} /> Bootstrap
            </motion.div>
            <motion.div
              custom={2.5}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/git.png" alt="" width={24} /> Git
            </motion.div>
            <motion.div
              custom={2.6}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/react.png" alt="" width={24} /> React Js
            </motion.div>
            <motion.div
              custom={2.7}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/redux.png" alt="" width={24} /> Redux
            </motion.div>
            <motion.div
              custom={2.8}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/redux.png" alt="" width={24} /> Redux Toolkit
            </motion.div>
            <motion.div
              custom={2.9}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/zustand.png" alt="" width={24} /> Zustand
            </motion.div>
            <motion.div
              custom={3}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/nextjs.png" alt="" width={24} /> Next Js
            </motion.div>
            <motion.div
              custom={3.1}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/materialui.png" alt="" width={24} /> Material Ui
            </motion.div>
            <motion.div
              custom={3.2}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/typescript.png" alt="" width={24} /> Type Script
            </motion.div>
            <motion.div
              custom={3.3}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/npm.png" alt="" width={24} /> NPM
            </motion.div>
            <motion.div
              custom={3.4}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/figma.png" alt="" width={24} /> Figma
            </motion.div>
            <motion.div
              custom={3.5}
              variants={textAnimate}
              className={styles.my_content_skill}
            >
              <img src="/vscode.png" alt="" width={24} /> VScode
            </motion.div>
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
