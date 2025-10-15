import { useState } from "react";
import { RecentStudy } from "./RecentStudy/RecentStudy";
import { StudyListSection } from "./StudyListSection/StudyListSection";
import { allStudies } from "@/api/mockData";
import styles from "./HomePage.module.scss";

export function HomePage() {
  const [studies, setStudies] = useState(allStudies);
  const [recentStudies, setRecentStudies] = useState([]);

  const handleStudyClick = (study) => {
    const exists = recentStudies.find((s) => s.id === study.id);
    if (exists) return;
    setRecentStudies((prev) => [study, ...prev]);
  };

  const handleReactionUpdate = (id, updatedReactions) => {
    setStudies((prev) =>
      prev.map((study) =>
        study.id === id ? { ...study, reactions: updatedReactions } : study
      )
    );

    setRecentStudies((prev) =>
      prev.map((study) =>
        study.id === id ? { ...study, reactions: updatedReactions } : study
      )
    );
  };

  const handleReset = () => setRecentStudies([]);

  return (
    <main className={styles.homePage}>
      <RecentStudy
        recentStudies={recentStudies}
        onReset={handleReset}
        onReactionUpdate={handleReactionUpdate}
      />
      <StudyListSection
        studies={studies}
        onSelectStudy={handleStudyClick}
        onReactionUpdate={handleReactionUpdate}
      />
    </main>
  );
}
