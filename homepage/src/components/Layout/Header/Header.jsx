import logo from "@/assets/Logo/img_logo.svg";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

export function Header({ actions = null }) {
  return (
    <nav>
      <div className="logo_space">
        <img src={logo} alt="Let's_study_logo" />
      </div>
      {actions}
    </nav>
  );
}

export function CreateStudy() {
  const navigator = useNavigate();
  return (
    <button className={styles.create} onClick={() => navigator("/create")}>
      스터디 만들기
    </button>
  );
}
