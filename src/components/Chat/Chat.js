import React from "react"
import "./chat.css"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import Message from "../Message/Message"
import Time from "../Time/Time"
import OptionsMenu from "../OptionsMenu/OptionsMenu"

export default function Chat() {
  return (
    <div className="chat-wrapper">
      <ProfilePhoto
        navProfilePhoto={"chat"}
        url={
          "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
      />
      <div className="headers-wrapper">
        <div className="friend-name-and-time">
          <PrimaryHeaderText headerType={"chat"} text={"Random Friend"} />
          <Time time={"Yesterday"} />
        </div>
        <Message info={"seen"} headerType={"chat"} text={"Random message"} />
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
