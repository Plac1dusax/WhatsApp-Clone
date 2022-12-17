import React, { useContext } from "react"
import ChatMessage from "../ChatMessage/ChatMessage"
import Navbar from "../Navbar/Navbar"
import TypeMessage from "../TypeMessage/TypeMessage"
import { v4 as uuidv4 } from "uuid"
import { DatabaseContext } from "../../App"
import "./directMessage.css"

export default function DirectMessage({ directMessage }) {
  const directMessages = useContext(DatabaseContext)

  const selectedMessage = directMessages.filter(messages => {
    return messages.id === directMessage
  })

  const selectedUser = selectedMessage.find(
    message => message.id === directMessage
  )
  const userProfilePhotoURL = selectedUser.userProfilePhoto

  const messagesArray = selectedUser.messages

  return (
    <div className="direct-message-container">
      <div className="direct-message-header-wrapper">
        <Navbar
          type={"direct-message"}
          userProfilePhoto={userProfilePhotoURL}
        />
      </div>
      <div className="direct-message-body">
        {messagesArray.map(message => {
          if (message.type === "incoming") {
            return (
              <div className={"incoming-message"} key={uuidv4()}>
                <ChatMessage
                  origin={message.type}
                  message={message.message}
                  starred={message.starred}
                />
              </div>
            )
          } else if (message.type === "outgoing") {
            return (
              <div className={"outgoing-message"} key={uuidv4()}>
                <ChatMessage
                  origin={message.type}
                  message={message.message}
                  starred={message.starred}
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
