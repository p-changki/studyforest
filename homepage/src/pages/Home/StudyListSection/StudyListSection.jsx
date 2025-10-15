import { useState } from "react";
import { StudyCard } from "../StudyCard/StudyCard";
import { allStudies } from "@/api/mockData";
import { EmptyState } from "../EmptyState/EmptyState";
import styles from "./StudyListSection.module.scss";

export function StudyListSection({ onSelectStudy }) {
  const [query, setQuery] = useState("");

  const filteredStudies = allStudies.filter((study) =>
    study.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className={styles.section}>
      {/* Header */}
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

      {/* Content */}
      {filteredStudies.length === 0 ? (
        <EmptyState message="등록된 스터디가 없습니다." />
      ) : (
        <div className={styles.cardGrid}>
          {filteredStudies.map((study) => (
            <StudyCard
              key={study.id}
              {...study}
              onClick={() => onSelectStudy(study)}
            />
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <button className={styles.moreBtn}>더보기</button>
      </footer>
    </section>
  );
}
