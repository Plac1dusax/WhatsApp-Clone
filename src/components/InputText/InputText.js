import React, { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import "./inputText.css"

export default function InputText({
  type,
  selectedUserId,
  messageHistory,
  replyMessage,
  setReplyMessage,
  setMessageHistory
}) {
  function handleMessageSend(e) {
    if (e.key === "Enter") {
      let message

      if (replyMessage.length > 0) {
        message = {
          id: uuidv4(),
          message: e.target.value,
          time: "00:00",
          status: "delivered",
          type: "outgoing",
          reply: "true",
          starred: "false",
          delete: "false",
          repliedMessage: replyMessage[0].message,
          contactName: replyMessage[0].name
        }
      } else {
        message = {
          id: uuidv4(),
          message: e.target.value,
          time: "00:00",
          status: "delivered",
          type: "outgoing",
          reply: "false",
          starred: "false",
          delete: "false"
        }
      }

      const newMessageHistory = [...messageHistory]

      const selectedPerson = newMessageHistory.find(history => {
        return history.id === selectedUserId
      })

      selectedPerson.messages = [message, ...selectedPerson.messages]

      newMessageHistory.find(history => {
        return history.id === selectedUserId
      }).messages = selectedPerson.messages

      setMessageHistory(newMessageHistory)
      setReplyMessage([])

      e.target.value = ""
    }
  }

  if (type === "dm") {
    return (
      <input
        onKeyDown={handleMessageSend}
        className="dm-input"
        type={"text"}
        placeholder={"Type a message"}
      ></input>
    )
  }
}
