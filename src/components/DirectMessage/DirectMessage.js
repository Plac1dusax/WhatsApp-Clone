import React, { useContext, useEffect, useState } from "react"
import ChatMessage from "../ChatMessage/ChatMessage"
import Navbar from "../Navbar/Navbar"
import TypeMessage from "../TypeMessage/TypeMessage"
import { v4 as uuidv4 } from "uuid"
import { DatabaseContext } from "../../App"
import "./directMessage.css"

export default function DirectMessage(props) {
  const { selectedWallpaper, doodles, setDoodles } = props
  const [replyMessage, setReplyMessage] = useState([])
  const [database, setDatabase, userId, setUserId] = useContext(DatabaseContext)
  const [messageHistory, setMessageHistory] = useState([...database])
  let directBodyStyles

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

  if (doodles) {
    directBodyStyles = {
      display: "flex",
      flexDirection: "column-reverse",
      backgroundColor: `${selectedWallpaper}`,
      backgroundImage:
        "url(../../wpBackgroundDoodle/wp-background-doodle.png) repeat",
      backgroundBlendMode: "overlay",
      position: "relative",
      padding: "40px",
      gap: "20px",
      overflow: "hidden",
      overflowY: "auto",
      height: "100%"
    }
  } else {
    directBodyStyles = {
      display: "flex",
      flexDirection: "column-reverse",
      background: `${selectedWallpaper} url(../../wpBackgroundDoodle/wp-background-doodle.png) repeat`,
      backgroundBlendMode: "overlay",
      position: "relative",
      padding: "40px",
      gap: "20px",
      overflow: "hidden",
      overflowY: "auto",
      height: "100%"
    }
  }

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
      <div style={directBodyStyles} className="direct-message-body">
        {renderMessages.map(message => {
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
                  deleted={message.delete}
                  repliedMessage={message.repliedMessage}
                  contactName={message.contactName}
                  replyMessage={replyMessage}
                  setReplyMessage={setReplyMessage}
                  selectedUserName={selectedUserName}
                  userId={userId}
                  database={database}
                  setStarredMessage={setStarredMessage}
                  messageHistory={messageHistory}
                  setMessageHistory={setMessageHistory}
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
                  deleted={message.delete}
                  repliedMessage={message.repliedMessage}
                  contactName={message.contactName}
                  replyMessage={replyMessage}
                  setReplyMessage={setReplyMessage}
                  userId={userId}
                  database={database}
                  setStarredMessage={setStarredMessage}
                  messageHistory={messageHistory}
                  setMessageHistory={setMessageHistory}
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
