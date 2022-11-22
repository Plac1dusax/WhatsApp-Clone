import React from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import StarredMessage from "../StarredMessage/StarredMessage"
import "./starredMessages.css"

export default function StarredMessages() {
  return (
    <div className="starred-messages-container">
      <div className="starred-messages-header">
        <SectionHeader header={"Starred messages"} menu={true} />
      </div>
      <div className="starred-messages-body">
        <StarredMessage reply={false} />
        <StarredMessage reply={true} />
        <div className="information-for-older-messages">
          Use WhatsApp on your phone to see older chats and messages.
        </div>
      </div>
    </div>
  )
}
