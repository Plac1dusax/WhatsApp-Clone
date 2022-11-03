import React from "react"
import "./chat.css"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import Message from "../Message/Message"
import Time from "../Time/Time"

export default function Chat({ wideBorder }) {
  return (
    <>
      <div className="chat-wrapper">
        <ProfilePhoto navProfilePhoto={"chat"} />
        <div className="headers-wrapper">
          <div className="friend-name-and-time">
            <PrimaryHeaderText headerType={"chat"} text={"Random Friend"} />
            <Time time={"Yesterday"} />
          </div>
          <Message info={"seen"} headerType={"chat"} text={"Random message"} />
        </div>
      </div>
    </>
  )
}
