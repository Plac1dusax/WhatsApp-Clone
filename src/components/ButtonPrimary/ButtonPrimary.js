import React from "react"
import "./buttonPrimary.css"

export default function ButtonPrimary({
  buttonPrimary,
  messageHistory,
  setMessageHistory
}) {
  function handleButtonClick(e) {
    switch (e.target.textContent) {
      case "DELETE FOR ME":
        handleDeleteForMe(e)
    }
  }

  function handleDeleteForMe(e) {
    const container = e.target.closest(".chat-message")
    const id = container.getAttribute("id")

    const selectedMessage = messageHistory
      .map(history => {
        return history.messages.find(message => {
          return message.id === id
        })
      })
      .find(items => {
        return items != undefined
      })
    const selectedMessageIndex = messageHistory.map(history => {
      return history.messages.indexOf(selectedMessage)
    })
    const validIndex = selectedMessageIndex.find(index => {
      return index > 0
    })
    const newMessageHistory = messageHistory.map(history => {
      if (history.messages.includes(selectedMessage)) {
        history.messages.splice(validIndex, 1)
        return history
      } else {
        return history
      }
    })

    setMessageHistory(newMessageHistory)
  }

  return (
    <button onClick={handleButtonClick} className="button-primary" type="click">
      {buttonPrimary}
    </button>
  )
}
