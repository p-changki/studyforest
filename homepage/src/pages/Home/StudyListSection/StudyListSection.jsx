import { StudyCard } from "../StudyCard/StudyCard";
import { allStudies } from "@/api/mockData";
import styles from "./StudyListSection.module.scss";

export function StudyListSection({ onSelectStudy }) {
  return (
    <section className={styles.StudyListWrap}>
      <h2>스터디 모두보기</h2>
      <div>
        <input type="text" placeholder="검색" />
      </div>
      <div className={styles.cardGrid}>
        {allStudies.map((study) => (
          <StudyCard
            key={study.id}
            {...study}
            onClick={() => onSelectStudy(study)}
          />
        ))}
      </div>
      <button>더보기</button>
    </section>
  );
}
