import React, { useContext, useState } from "react"
import ChatMessage from "../ChatMessage/ChatMessage"
import Navbar from "../Navbar/Navbar"
import TypeMessage from "../TypeMessage/TypeMessage"
import { v4 as uuidv4 } from "uuid"
import { DatabaseContext } from "../../App"
import "./directMessage.css"

export default function DirectMessage({ directMessage }) {
  const [replyMessage, setReplyMessage] = useState([])
  const directMessages = useContext(DatabaseContext)

  const selectedMessage = directMessages.filter(messages => {
    return messages.id === directMessage
  })

  const selectedUser = selectedMessage.find(
    message => message.id === directMessage
  )

  const starredMessages = selectedUser.messages.filter(message => {
    return message.starred === "true"
  })

  const selectedUserName = selectedUser.userName

  const userProfilePhotoURL = selectedUser.userProfilePhoto

  const messagesArray = [...selectedUser.messages].reverse()

  const [starredMessage, setStarredMessage] = useState(starredMessages)

  return (
    <div className="direct-message-container">
      <div className="direct-message-header-wrapper">
        <Navbar
          type={"direct-message"}
          userProfilePhoto={userProfilePhotoURL}
        />
      </div>
      <div className="direct-message-body">
        <div className="doodle"></div>
        {messagesArray.map(message => {
          if (message.type === "incoming") {
            return (
              <div className={"incoming-message"} key={uuidv4()}>
                <ChatMessage
                  id={message.id}
                  origin={message.type}
                  message={message.message}
                  starred={message.starred}
                  time={message.time}
                  reply={message.reply}
                  setReplyMessage={setReplyMessage}
                  selectedUserName={selectedUserName}
                  directMessage={directMessage}
                  directMessages={directMessages}
                  setStarredMessage={setStarredMessage}
                />
              </div>
            )
          } else if (message.type === "outgoing") {
            return (
              <div className={"outgoing-message"} key={uuidv4()}>
                <ChatMessage
                  id={message.id}
                  origin={message.type}
                  message={message.message}
                  starred={message.starred}
                  time={message.time}
                  reply={message.reply}
                  setReplyMessage={setReplyMessage}
                  directMessage={directMessage}
                  directMessages={directMessages}
                  setStarredMessage={setStarredMessage}
                />
              </div>
            )
          }
        })}
      </div>
      <div className="type-area">
        <TypeMessage
          replyMessage={replyMessage}
          setReplyMessage={setReplyMessage}
          key={uuidv4()}
        />
      </div>
    </div>
  )
}
