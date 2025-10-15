import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

export function EmojiPicker({ onSelect }) {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {/* 이모지 선택 버튼 */}
      <button
        style={{
          backgroundColor: "#99c08e",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "0.6rem 1rem",
          cursor: "pointer",
        }}
        onClick={() => setVisible((v) => !v)}
      >
        😀 이모지 선택
      </button>

      {/* emoji-mart Picker */}
      {visible && (
        <div style={{ position: "absolute", zIndex: 10, marginTop: "10px" }}>
          <Picker
            data={data}
            onEmojiSelect={(emoji) => {
              onSelect(emoji.native);
              setVisible(false);
            }}
            previewPosition="none"
            theme="light"
          />
        </div>
      )}
    </div>
  );
}
