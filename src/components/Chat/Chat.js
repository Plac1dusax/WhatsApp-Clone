import React from "react"
import "./chat.css"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import Message from "../Message/Message"
import Time from "../Time/Time"
import OptionsMenu from "../OptionsMenu/OptionsMenu"

export default function Chat(props) {
  const { userProfilePhoto, userName, lastMessage, info, time } = props
  return (
    <div className="chat-wrapper">
      <ProfilePhoto navProfilePhoto={"chat"} url={userProfilePhoto} />
      <div className="headers-wrapper">
        <div className="friend-name-and-time">
          <PrimaryHeaderText headerType={"chat"} text={userName} />
          <Time time={time} />
        </div>
        <Message info={info} headerType={"chat"} text={lastMessage} />
      </div>
      <div data-chat-options>
        <OptionsMenu menuArray={chatOptions} />
      </div>
    </div>
  )
}

const chatOptions = [
  "Archive chat",
  "Mute notifications",
  "Delete chat",
  "Pin chat",
  "Mark as unread"
]
