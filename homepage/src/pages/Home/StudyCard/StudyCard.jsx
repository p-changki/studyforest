import styles from "./StudyCard.module.scss";

export function StudyCard({
  owner,
  title,
  progressDays,
  description,
  points,
  members,
  fireCount,
  heartCount,
  onClick,
}) {
  return (
    <article className={styles.card} onClick={onClick}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          <strong className={styles.owner}>{owner}</strong> 의 {title}
        </h3>
        <div className={styles.badge}>🍃 {points}P 획득</div>
      </header>

      <p className={styles.progress}>{progressDays}일째 진행 중</p>
      <p className={styles.description}>{description}</p>

      <footer className={styles.reactionBar}>
        <div className={styles.reaction}>
          <span>👩‍💻</span> {members}
        </div>
        <div className={styles.reaction}>
          <span>🔥</span> {fireCount}
        </div>
        <div className={styles.reaction}>
          <span>🤍</span> {heartCount}
        </div>
      </footer>
    </article>
  );
}
