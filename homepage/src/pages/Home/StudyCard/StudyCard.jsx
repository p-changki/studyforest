import styles from "./StudyCard.module.scss";

export function StudyCard({ title, members, description, onClick }) {
  return (
    <div className={styles.StudyCardWrap} onClick={onClick}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.members}>{members}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
