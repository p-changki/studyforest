import styles from "./RecentStudy.module.scss";

export function RecentStudy({ recentStudies, onReset }) {
  return (
    <section className={styles.RecentStudyWrap}>
      <h2>현재 조회 스터디</h2>
      <button onClick={onReset}>초기화</button>
      {recentStudies.length === 0 ? (
        <p>현재 선택된 스터디가 없습니다.</p>
      ) : (
        <div>
          <ul>
            {recentStudies.map((study) => (
              <li key={study.id}>
                <strong>{study.title}</strong> - {study.members}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
