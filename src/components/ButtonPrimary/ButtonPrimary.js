import React from "react"
import "./buttonPrimary.css"

export default function ButtonPrimary(props) {
  const {
    location,
    buttonPrimary,
    messageHistory,
    setMessageHistory,
    startCommunityActive,
    setStartCommunityActive,
    keyboardShortcutsActive,
    setKeyboardShortcutsActive,
    setTheme,
    selectedTheme,
    themeActive,
    setThemeActive
  } = props

  function handleButtonClick(e) {
    switch (e.target.textContent) {
      case "DELETE FOR ME":
        handleDeleteForMe(e)
      case "START A COMMUNITY":
        handleStartCommunityVisibility()
        break
      case "OK":
        if (location === "keyboard-shortcuts") {
          return setKeyboardShortcutsActive(!keyboardShortcutsActive)
        } else if (location === "choose-theme") {
          return handleThemeAlert()
        }
        break
    }
  }
  function handleStartCommunityVisibility() {
    setStartCommunityActive(!startCommunityActive)
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

  function handleThemeAlert() {
    setTheme(selectedTheme)
    setThemeActive(!themeActive)
  }
  return (
    <button onClick={handleButtonClick} className="button-primary" type="click">
      {buttonPrimary}
    </button>
  )
}
