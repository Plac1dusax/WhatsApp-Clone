import React from "react"
import ChatMessage from "../ChatMessage/ChatMessage"
import Navbar from "../Navbar/Navbar"
import TypeMessage from "../TypeMessage/TypeMessage"
import { v4 as uuidv4 } from "uuid"
import "./directMessage.css"

const messages = [
  {
    id: 1,
    message: "lkgdflsgklsdfgkfsdgkdfs",
    origin: "incoming"
  },
  {
    id: 2,
    message: "reyghjorıhjdfshkdflshg",
    origin: "incoming"
  },
  {
    id: 3,
    message: "reyghjodsgdfshgdfjdrgjrıhjdfshkdflshg",
    origin: "outgoing"
  },
  {
    id: 4,
    message: "dfgldfkghdgdfjdrgjrıhjdfshkdflshg",
    origin: "incoming"
  },
  {
    id: 5,
    message: "reyghjodsgdfshgdfjdrgjrıhjdfshkdflshg",
    origin: "incoming"
  },
  {
    id: 6,
    message: "dfbgdgfhgkjl",
    origin: "outgoing"
  },
  {
    id: 7,
    message: "reygghfjflshg",
    origin: "outgoing"
  },
  {
    id: 8,
    message: "reyghvghjgfhjkdflshg",
    origin: "incoming"
  },
  {
    id: 9,
    message: "reygfsghfjfghkgşçhjdfshkdflshg",
    origin: "incoming"
  },
  {
    id: 10,
    message: "reyggfjfghjkhjgşhşdfshkdflshg",
    origin: "incoming"
  },
  {
    id: 11,
    message: "reyghjodsgddfshkdflshg",
    origin: "outgoing"
  }
]

export default function DirectMessage() {
  return (
    <div className="direct-message-container">
      <div className="direct-message-header-wrapper">
        <Navbar type={"direct-message"} />
      </div>
      <div className="direct-message-body">
        {messages.map(message => {
          if (message.origin === "incoming") {
            return (
              <div className={"incoming-message"} key={uuidv4()}>
                <ChatMessage
                  origin={message.origin}
                  message={message.message}
                />
              </div>
            )
          } else if (message.origin === "outgoing") {
            return (
              <div className={"outgoing-message"} key={uuidv4()}>
                <ChatMessage
                  className={"outgoing-message"}
                  origin={message.origin}
                  message={message.message}
                />
              </div>
            )
          }
        })}
      </div>
      <div className="type-area">
        <TypeMessage key={uuidv4()} />
      </div>
    </div>
  )
}
