import React from "react"
import { ReactComponent as ChatOptionsArrowDark } from "../../icons/chat-options-arrow-dark.svg"
import { ReactComponent as CloseButtonIcon } from "../../icons/close-button-icon.svg"
import "./repliedMessage.css"

export default function RepliedMessage({
  type,
  name,
  message,
  setReplyMessage
}) {
  function handleReplyClose() {
    setReplyMessage([])
  }

  if (type === "chat-section") {
    return (
      <div className="reply-area-chat">
        <div className="replied-message-container-chat">
          <div className="replied-message-wrapper-chat">
            <div className="chat-message-header">
              <div className="user-name">{name ? name : "You"}</div>
            </div>
            <div className="replied-message-container">
              <div className="replied-message">{message}</div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="reply-area">
        <div className="replied-message-container">
          <div className="replied-message-wrapper-text">
            <div className="chat-message-header">
              <div className="user-name">{name ? name : "You"}</div>
              <div className="chat-options-icon">
                <ChatOptionsArrowDark />
              </div>
            </div>
            <div className="replied-message-container">
              <div className="replied-message">{message}</div>
            </div>
          </div>
          <div onClick={handleReplyClose} className="close-reply-btn">
            <CloseButtonIcon />
          </div>
        </div>
      </div>
    )
  }
}
