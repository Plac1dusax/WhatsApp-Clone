import React from "react"

export default function Emoji({ emojiName, emoji }) {
  return (
    <div
      emojiname={emojiName}
      style={{ fontSize: "32px", cursor: "pointer" }}
      className="emoji-wrapper "
    >
      {emoji}
    </div>
  )
}
