import React, { useEffect } from "react"
import "./message.css"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import MessageInfo from "../MessageInfo/MessageInfo"
import OptionsArrow from "../OptionsArrow/OptionsArrow"
import "../Chat/chat.css"

export default function Message(props) {
  const { info, headerType, text } = props

  function handleChatOptions(e) {
    const body = e.target.closest(".friends-list-container")
    const chatSectionWrapper = e.target.closest(".chat-section-wrapper")
    const container = e.target.closest(".chat-wrapper")
    const optionsMenu = container.querySelector("[data-chat-options]")
    const clickPositionY = e.clientY
    const containerHeight = body.clientHeight
    const yPositionCalc = containerHeight / clickPositionY
    const allOptionMenus = [
      ...chatSectionWrapper.querySelectorAll("[data-chat-options]")
    ]

    hideUnnecessaryMenus(allOptionMenus, optionsMenu)

    if (yPositionCalc > 1.5) {
      if (optionsMenu.classList.contains("chat-options-show-down")) {
        optionsMenu.classList.remove("chat-options-show-down")
        optionsMenu.classList.remove("chat-options-show-up")
        optionsMenu.classList.add("chat-options-hide-down")
      } else {
        optionsMenu.classList.remove("chat-options-hide-down")
        optionsMenu.classList.add("chat-options-show-down")
      }
    } else {
      if (optionsMenu.classList.contains("chat-options-show-up")) {
        optionsMenu.classList.remove("chat-options-show-up")
        optionsMenu.classList.remove("chat-options-show-down")
        optionsMenu.classList.add("chat-options-hide-up")
      } else {
        optionsMenu.classList.remove("chat-options-hide-up")
        optionsMenu.classList.add("chat-options-show-up")
      }
    }
  }

  function hideUnnecessaryMenus(allOptionMenus, optionsMenu) {
    const unnecessaryMenus = allOptionMenus.filter(menu => {
      return menu !== optionsMenu
    })

    unnecessaryMenus.map(menu => {
      menu.classList.remove("chat-options-show-up")
      menu.classList.remove("chat-options-show-down")
    })
  }

  useEffect(() => {
    document.body.addEventListener("click", handleHideChatOptions)

    const chatOptionsMenu = [
      ...document.querySelectorAll("[data-chat-options]")
    ]

    function handleHideChatOptions(e) {
      if (e.target.matches("[data-options-arrow]")) return

      if (chatOptionsMenu.length > 0) {
        chatOptionsMenu.map(menu => {
          if (menu.classList.contains("chat-options-show-up")) {
            menu.classList.remove("chat-options-show-up")
            menu.classList.add("chat-options-hide-up")
          } else if (menu.classList.contains("chat-options-show-down")) {
            menu.classList.remove("chat-options-show-down")
            menu.classList.add("chat-options-hide-down")
          }
        })
      }
    }

    return () => {
      document.body.removeEventListener("click", handleHideChatOptions)
    }
  }, [])

  return (
    <div className="message-wrapper">
      <div className="info-and-message">
        <MessageInfo info={info} />
        <SecondaryHeaderText headerType={headerType} text={text} />
      </div>
      <div onClick={handleChatOptions} className="options">
        <OptionsArrow />
      </div>
    </div>
  )
}
