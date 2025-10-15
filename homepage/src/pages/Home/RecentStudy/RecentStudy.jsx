import { EmptyState } from "../EmptyState/EmptyState";
import { StudyCard } from "../StudyCard/StudyCard";
import styles from "./RecentStudy.module.scss";

export function RecentStudy({ recentStudies, onReset }) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>현재 조회 스터디</h2>
        <div className={styles.actions}>
          <button className={styles.resetBtn} onClick={onReset}>
            초기화
          </button>
        </div>
      </header>

      {recentStudies.length === 0 ? (
        <EmptyState message="현재 선택된 스터디가 없습니다." />
      ) : (
        <div className={styles.cardGrid}>
          {recentStudies.map((study) => (
            <StudyCard key={study.id} {...study} />
          ))}
        </div>
      )}
    </section>
  );
}
