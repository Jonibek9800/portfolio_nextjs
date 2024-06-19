import Link from "next/link";
import styles from "./SkillCard.module.css";

export default function SkillCard({
  classes,
  sourse,
  title,
  href,
}: {
  classes: string;
  sourse: string;
  title: string;
  href: string;
}) {
  return (
    <a className={`${styles.my_skill} ${classes}`} href={href} target="_blank">
      <img src={sourse} alt="" width={24} height={24} /> {title}
    </a>
  );
}
