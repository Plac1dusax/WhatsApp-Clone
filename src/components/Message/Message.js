import React from "react"
import "./message.css"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import MessageInfo from "../MessageInfo/MessageInfo"
import OptionsArrow from "../OptionsArrow/OptionsArrow"
import "../Chat/chat.css"

export default function Message(props) {
  const { info, headerType, text } = props

  return (
    <div className="message-wrapper">
      <div className="info-and-message">
        <MessageInfo info={info} />
        <SecondaryHeaderText headerType={headerType} text={text} />
      </div>
      <div className="options">
        <OptionsArrow />
      </div>
    </div>
  )
}
