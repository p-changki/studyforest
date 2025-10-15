import styles from "./RecentStudy.module.scss";

export function RecentStudy({ selectedStudy }) {
  return (
    <div className={styles.RecentStudyWrap}>
      <h2>현재 조회 스터디</h2>
      {selectedStudy ? (
        <div>
          <h3>{selectedStudy.title}</h3>
          <p>{selectedStudy.description}</p>
          <p>참여인원 : {selectedStudy.members} 명</p>
        </div>
      ) : (
        <p>현재 선택된 스터디가 없습니다.</p>
      )}
    </div>
  );
}
