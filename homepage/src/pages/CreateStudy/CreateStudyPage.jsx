import { useState } from "react";
import styles from "./CreateStudyPage.module.scss";

export function CreateStudyPage() {
  const [form, setForm] = useState({
    owner: "",
    title: "",
    progressDays: 0,
    description: "",
    points: 0,
    members: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("새 스터디 입력값:", form);
    alert("입력값 콘솔에서 확인!");
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>스터디 만들기</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="owner"
          value={form.owner}
          onChange={handleChange}
          placeholder="스터디 만든 사람"
        />
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="스터디 제목"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="스터디 소개"
        />
        <p>진행일수</p>
        <input
          type="number"
          name="progressDays"
          value={form.progressDays}
          onChange={handleChange}
          placeholder="진행 일수"
        />
        <p>참여자수</p>
        <input
          type="number"
          name="members"
          value={form.members}
          onChange={handleChange}
          placeholder="참여자 수"
        />
        <p>누적포인트</p>
        <input
          type="number"
          name="points"
          value={form.points}
          onChange={handleChange}
          placeholder="누적 포인트"
        />
        <button type="submit">등록하기</button>
      </form>
    </section>
  );
}
