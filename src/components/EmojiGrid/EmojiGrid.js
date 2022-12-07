import React from "react"
import EmojiContainerHeader from "../EmojiContainerHeader/EmojiContainerHeader"
import Emoji from "../Emoji/Emoji"
import { v4 as uuidv4 } from "uuid"
import "./emojiGrid.css"

export default function EmojiGrid(props) {
  const { type, emojiSectionName, emojiHeader, emojiArray } = props

  let emojiGridStyle = {}

  if (type === "message") {
    emojiGridStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(8,1fr)",
      gridTemplateRows: "auto",
      rowGap: "5px",
      columnGap: "2px",
      marginBottom: "10px"
    }
  } else if (type === "text") {
    emojiGridStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(23,1fr)",
      gridTemplateRows: "auto",
      rowGap: "10px",
      columnGap: "10px",
      marginBottom: "10px"
    }
  }

  return (
    <div className="emoji-grid-container">
      <div className={emojiSectionName}>
        <div className="emojis-header">
          <EmojiContainerHeader emojiHeader={emojiHeader} />
        </div>
        <div style={emojiGridStyle} className="emojis-grid">
          {emojiArray.map(emoji => {
            return (
              <Emoji
                key={uuidv4()}
                emojiName={emoji.emojiName}
                emoji={emoji.emoji}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
