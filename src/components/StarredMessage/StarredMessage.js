import React from "react"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import ChatMessage from "../ChatMessage/ChatMessage"
import { ReactComponent as ChatArrowIcon } from "../../icons/chat-arrow-icon.svg"
import "./starredMessage.css"

export default function StarredMessage(props) {
  const {
    reply,
    profilePhotoURL,
    name,
    message,
    status,
    time,
    type,
    repliedMessage
  } = props

  return (
    <div className="starred-message-container">
      <div className="starred-message-header">
        <div className="person-and-group-info-container">
          <div className="starred-message-profile-picture">
            <ProfilePhoto navProfilePhoto={"starred"} url={profilePhotoURL} />
          </div>
          <div className="starred-message-person-name">{name}</div>
          <span className="mini-arrow-right"></span>
          <div className="starred-message-group-name">You</div>
        </div>
        <div className="date-and-arrow-container">
          <div className="date">{time}</div>
          <div className="chat-arrow">
            <ChatArrowIcon />
          </div>
        </div>
      </div>
      <div className="starred-message-body">
        <ChatMessage
          location={"starred-message"}
          reply={reply}
          message={message}
          status={status}
          origin={type}
          repliedMessage={repliedMessage}
        />
      </div>
    </div>
  )
}
