import React from "react"
import EmojiContainerHeader from "../EmojiContainerHeader/EmojiContainerHeader"
import Emoji from "../Emoji/Emoji"
import { v4 as uuidv4 } from "uuid"
import "./emojiGrid.css"

export default function EmojiGrid(props) {
  const { emojiSectionName, emojiHeader, emojiArray, emojiName } = props

  return (
    <div className="emoji-grid-container">
      <div className={emojiSectionName}>
        <div className="emojis-header">
          <EmojiContainerHeader emojiHeader={emojiHeader} />
        </div>
        <div className="emojis-grid">
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
