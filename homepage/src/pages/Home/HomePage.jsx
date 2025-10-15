import { RecentStudy } from "./RecentStudy/RecentStudy";
import { StudyListSection } from "./StudyListSection/StudyListSection";
import { useState } from "react";
import styles from "./HomePage.module.scss";

export function HomePage() {
  const [selectedStudy, setSelectedStudy] = useState([]);

  return (
    <div className={styles.HomePageWrap}>
      <section>
        <RecentStudy selectedStudy={selectedStudy} />
      </section>
      <section>
        <StudyListSection onSelectStudy={setSelectedStudy} />
      </section>
    </div>
  );
}
