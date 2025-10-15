import { RecentStudy } from "./RecentStudy/RecentStudy";
import { StudyListSection } from "./StudyListSection/StudyListSection";
import { useState } from "react";
import styles from "./HomePage.module.scss";

export function HomePage() {
  const [recentStudies, setRecentStudies] = useState([]);

  const handleStudyClick = (study) => {
    const isAlreadyAdded = recentStudies.some((s) => s.id === study.id);
    if (isAlreadyAdded) return;

    setRecentStudies((prev) => [study, ...prev]);
  };

  const handleReset = () => setRecentStudies([]);

  return (
    <div className={styles.HomePageWrap}>
      <section>
        <RecentStudy recentStudies={recentStudies} onReset={handleReset} />
      </section>
      <section>
        <StudyListSection onSelectStudy={handleStudyClick} />
      </section>
    </div>
  );
}
