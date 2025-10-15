import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import styles from "./StudyCard.module.scss";

export function StudyCard({
  id,
  owner,
  title,
  progressDays,
  description,
  points,
  reactions = {},
  onClick,
  onReactionUpdate,
}) {
  const [showPicker, setShowPicker] = useState(false);

  const handleReactionClick = (emoji, e) => {
    e.stopPropagation();
    const updated = { ...reactions, [emoji]: (reactions[emoji] || 0) + 1 };
    onReactionUpdate(id, updated);
  };

  const handleSelectEmoji = (emoji) => {
    const native = emoji.native;
    const updated = { ...reactions, [native]: (reactions[native] || 0) + 1 };
    onReactionUpdate(id, updated);
    setShowPicker(false);
  };

  const handleAddBtnClick = (e) => {
    e.stopPropagation();
    setShowPicker((prev) => !prev);
  };

  return (
    <article className={styles.card} onClick={onClick}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          <strong className={styles.owner}>{owner}</strong> 의 {title}
        </h3>
        <div className={styles.badge}>🍃 {points}P 획득</div>
      </header>

      <p className={styles.progress}>{progressDays}일째 진행 중</p>
      <p className={styles.description}>{description}</p>

      <footer className={styles.reactionBar}>
        {Object.entries(reactions).map(([emoji, count]) => (
          <button
            key={emoji}
            className={styles.reaction}
            onClick={(e) => handleReactionClick(emoji, e)}
          >
            <span>{emoji}</span> {count}
          </button>
        ))}

        <button
          type="button"
          className={styles.addBtn}
          onClick={handleAddBtnClick}
        >
          ➕
        </button>

        {showPicker && (
          <div
            className={styles.pickerWrap}
            onClick={(e) => e.stopPropagation()}
          >
            <Picker
              data={data}
              onEmojiSelect={handleSelectEmoji}
              theme="light"
              previewPosition="none"
            />
          </div>
        )}
      </footer>
    </article>
  );
}
