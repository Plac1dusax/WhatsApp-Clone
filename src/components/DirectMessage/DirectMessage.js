import React, { useContext, useEffect, useState } from "react"
import ChatMessage from "../ChatMessage/ChatMessage"
import Navbar from "../Navbar/Navbar"
import TypeMessage from "../TypeMessage/TypeMessage"
import { v4 as uuidv4 } from "uuid"
import { DatabaseContext } from "../../App"
import "./directMessage.css"

export default function DirectMessage() {
  const [replyMessage, setReplyMessage] = useState([])
  const [database, setDatabase, userId, setUserId] = useContext(DatabaseContext)

  const [messageHistory, setMessageHistory] = useState([...database])

  const selectedMessage = database.filter(messages => {
    return messages.id === userId
  })

  const selectedUserId = selectedMessage[0].id

  const selectedUser = selectedMessage.find(message => message.id === userId)

  const starredMessages = selectedUser.messages.filter(message => {
    return message.starred === "true"
  })

  const selectedUserName = selectedUser.userName

  const userProfilePhotoURL = selectedUser.userProfilePhoto

  const [renderMessages, setRenderMessages] = useState([
    ...selectedUser.messages
  ])

  const [starredMessage, setStarredMessage] = useState(starredMessages)

  useEffect(() => {
    setRenderMessages([...selectedUser.messages])
  }, [userId])

  useEffect(() => {
    setRenderMessages([...selectedUser.messages])
  }, [messageHistory])

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
        {renderMessages.map(message => {
          console.log(message)
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
                  status={message.status}
                  repliedMessage={message.repliedMessage}
                  contactName={message.contactName}
                  replyMessage={replyMessage}
                  setReplyMessage={setReplyMessage}
                  selectedUserName={selectedUserName}
                  userId={userId}
                  database={database}
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
                  status={message.status}
                  repliedMessage={message.repliedMessage}
                  contactName={message.contactName}
                  replyMessage={replyMessage}
                  setReplyMessage={setReplyMessage}
                  userId={userId}
                  database={database}
                  setStarredMessage={setStarredMessage}
                />
              </div>
            )
          }
        })}
      </div>
      <div className="type-area">
        <TypeMessage
          selectedUserId={selectedUserId}
          replyMessage={replyMessage}
          setReplyMessage={setReplyMessage}
          messageHistory={messageHistory}
          setMessageHistory={setMessageHistory}
          key={uuidv4()}
        />
      </div>
    </div>
  )
}
