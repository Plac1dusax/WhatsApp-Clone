import React from "react"
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
                <svg
                  viewBox="0 0 18 18"
                  height="18"
                  width="18"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.1"
                  x="0px"
                  y="0px"
                  enableBackground="new 0 0 18 18"
                >
                  <path
                    fill="currentColor"
                    d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="replied-message-container">
              <div className="replied-message">{message}</div>
            </div>
          </div>
          <div onClick={handleReplyClose} className="close-reply-btn">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              fill="currentColor"
              enableBackground="new 0 0 24 24"
            >
              <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}
