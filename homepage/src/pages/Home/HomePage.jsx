import { RecentStudy } from "./RecentStudy/RecentStudy";
import { StudyListSection } from "./StudyListSection/StudyListSection";

export function HomePage() {
  return (
    <div>
      <section>
        <RecentStudy />
      </section>
      <section>
        <StudyListSection />
      </section>
    </div>
  );
}
