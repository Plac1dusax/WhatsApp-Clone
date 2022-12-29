import React from "react"
import "./buttonSecondary.css"

export default function ButtonSecondary({
  buttonSecondary,
  messageHistory,
  setMessageHistory,
  location,
  themeActive,
  setThemeActive
}) {
  function handleButtonClick(e) {
    switch (e.target.textContent) {
      case "CANCEL":
        handleCancelButton(e)
        break
      case "DELETE FOR ME":
        handleMessageDelete(e)
        break
      case "DELETE FOR EVERYONE":
        handleMessageDelete(e)
        break
    }
  }
  function handleMessageDelete(e) {
    deleteOutgoingMessage(e)
  }

  function handleCancelButton(e) {
    if (location === "choose-theme") {
      setThemeActive(!themeActive)
    } else {
      const container = e.target.closest(".chat-message")
      const alert = container.querySelector(".custom-alert")
      const overlay = container.querySelector(".overlay")

      alert.classList.remove("custom-alert-show")
      alert.classList.add("custom-alert-hide")
      overlay.style.display = "none"
    }
  }

  function deleteOutgoingMessage(e) {
    const container = e.target.closest(".chat-message")
    const id = container.getAttribute("id")

    const selectedMessage = messageHistory.map(history => {
      return history.messages.find(message => {
        if (message.id === id) {
          return message
        } else {
          return
        }
      })
    })

    const validMessage = selectedMessage.find(message => {
      return message != undefined
    })

    validMessage.delete = "true"

    const selectedMessageIndex = messageHistory.map(history => {
      return history.messages.indexOf(selectedMessage)
    })
    const validIndex = selectedMessageIndex.find(index => {
      return index > 0
    })

    const newMessageHistory = messageHistory.map(history => {
      if (history.messages.includes(validIndex)) {
        history.messages[validIndex] = validMessage
        return history
      } else {
        return history
      }
    })

    setMessageHistory(newMessageHistory)
  }

  return (
    <button onClick={handleButtonClick} className="button-secondary">
      {buttonSecondary}
    </button>
  )
}
