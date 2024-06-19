import styles from "./aboute.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.about_header}>
        <h1 className={styles.about_header_title}>About me</h1>
        <h4 className={styles.about_header_name}>It`s me Jonibek</h4>
      </div>
      <div className={styles.about_info_wrap}>
        <h3 className={styles.about_info_title}>Обо мне</h3>
        <p className={styles.about_info_contect}>
          Родился и вырос в г.Душанбе, окончил Технологический университет
          Таджикистана, освоил программирование и преподавал информатику в
          средней школе, а также проходил курс Junior Fronted Developer с
          01.01.22 по 01.08.22, в школе IT-result Владилена Минина. Мои сильные
          стороны-стрессоустойчивость, быстрая обучаемость, адаптация к любой
          среде. Ключевые навыки Figma, HTML5, CSS3, SCSS, JavaScript, Rest API,
          React, Next JS, Redux, Redux/Toolkit, Zustand, Git, Node.js, Type
          Script, Bootstrap, Material ui, Кросс браузерная верстка. Начало
          кареры Humo Lab с 01.05.24 по настоящее время
        </p>
      </div>
      <div className={styles.about_info_wrap}>
        <h3 className={styles.about_info_title}>Мои хобби и интересы</h3>
        <p className={styles.about_info_contect}>
          Родился и вырос в г.Душанбе, окончил Технологический университет
          Таджикистана, освоил программирование и преподавал информатику в
          средней школе, а также проходил курс Junior Fronted Developer с
          01.01.22 по 01.08.22, в школе IT-result Владилена Минина. Мои сильные
          стороны-стрессоустойчивость, быстрая обучаемость, адаптация к любой
          среде. Ключевые навыки Figma, HTML5, CSS3, SCSS, JavaScript, Rest API,
          React, Next JS, Redux, Redux/Toolkit, Zustand, Git, Node.js, Type
          Script, Bootstrap, Material ui, Кросс браузерная верстка. Начало
          кареры Humo Lab с 01.05.24 по настоящее время
        </p>
      </div>
    </div>
  );
};

export default About;
