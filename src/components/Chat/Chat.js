import React from "react"
import "./chat.css"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"

export default function Chat() {
  return (
    <div className="chat-wrapper">
      <ProfilePhoto navProfilePhoto={"chat"} />
      <div className="headers-wrapper">
        <PrimaryHeaderText headerType={"chat"} text={"Random Friend"} />
        <SecondaryHeaderText headerType={"chat"} text={"Random message"} />
      </div>
    </div>
  )
}
