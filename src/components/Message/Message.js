import React from "react"
import "./message.css"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import MessageInfo from "../MessageInfo/MessageInfo"

export default function Message(props) {
  const { info, headerType, text } = props
  return (
    <div className="message-wrapper">
      <MessageInfo info={info} />
      <SecondaryHeaderText headerType={headerType} text={text} />
    </div>
  )
}
