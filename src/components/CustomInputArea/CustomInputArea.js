import React from "react"
import { ReactComponent as EmojiIcon } from "../../icons/emoji-icon.svg"
import { ReactComponent as EditIcon } from "../../icons/edit-icon.svg"
import "./customInputArea.css"

export default function CustomInputArea(props) {
  const { counter, emoji, placeholder, type, area } = props

  if (type === "community") {
    return (
      <div className="input-wrapper">
        <div className="placeholder">{placeholder}</div>
        <div className="emoji-and-character-limit">
          {counter && <div className="max-character">25</div>}
          {emoji && (
            <div className="emoji-icon">
              <EmojiIcon />
            </div>
          )}
        </div>
        <input className="user-input"></input>
      </div>
    )
  } else if (type === "profile") {
    return (
      <div className="input-wrapper-profile">
        <div className="input-area-and-placeholder">
          <div className="area-name">{area}</div>
          <div className="placeholder-profile">{placeholder}</div>
        </div>
        <div className="edit">
          <EditIcon />
        </div>
        <div className="emoji-and-character-limit-profile">
          {counter && <div className="max-character">25</div>}
          {emoji && (
            <div className="emoji-icon">
              <EmojiIcon />
            </div>
          )}
        </div>
        <input className="user-input"></input>
      </div>
    )
  }
}
