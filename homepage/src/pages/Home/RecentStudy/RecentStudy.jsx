import { useState } from "react";
import { StudyCard } from "../StudyCard/StudyCard";
import { EmptyState } from "../EmptyState/EmptyState";
import styles from "./RecentStudy.module.scss";

export function RecentStudy({ recentStudies, onReset, onReactionUpdate }) {
  const [showAll, setShowAll] = useState(false);

  const visibleStudies = showAll ? recentStudies : recentStudies.slice(0, 3);

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
        <>
          <div className={styles.cardGrid}>
            {visibleStudies.map((study) => (
              <StudyCard
                key={study.id}
                {...study}
                onReactionUpdate={onReactionUpdate}
              />
            ))}
          </div>

          {recentStudies.length > 3 && (
            <footer className={styles.footer}>
              <button
                className={styles.moreBtn}
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "접기" : "더보기"}
              </button>
            </footer>
          )}
        </>
      )}
    </section>
  );
}
