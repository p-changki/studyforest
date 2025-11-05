import { useState } from "react";
import { StudyCard } from "../StudyCard/StudyCard";
import { EmptyState } from "../EmptyState/EmptyState";
import styles from "./StudyListSection.module.scss";

export function StudyListSection({ studies, onSelectStudy, onReactionUpdate }) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = studies.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );


  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>스터디 모두보기</h2>
        <div className={styles.actions}>
          <input
            type="text"
            placeholder="검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </header>

      {filtered.length === 0 ? (
        <EmptyState message="등록된 스터디가 없습니다." />
      ) : (
        <>
          <div className={styles.cardGrid}>
            {visible.map((study) => (
              <StudyCard
                key={study.id}
                {...study}
                onClick={() => onSelectStudy(study)}
                onReactionUpdate={onReactionUpdate}
              />
            ))}
          </div>

          {filtered.length > 6 && (
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
