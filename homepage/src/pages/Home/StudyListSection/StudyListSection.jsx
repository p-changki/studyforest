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
    <section className={styles.StudyListWrap}>
      <h2>스터디 모두보기</h2>
      <div className={styles.searchWrap}>
        <input
          type="text"
          placeholder="검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      {filteredStudies.length === 0 ? (
        <EmptyState message="등록된 스터디가 없습니다." />
      ) : (
        <>
          <div className={styles.cardGrid}>
            {filteredStudies.map((study) => (
              <StudyCard
                key={study.id}
                {...study}
                onClick={() => onSelectStudy(study)}
              />
            ))}
          </div>

          <button>더보기</button>
        </>
      )}
    </section>
  );
}
