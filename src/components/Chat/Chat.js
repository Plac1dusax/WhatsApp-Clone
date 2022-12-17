import React, { useState, useEffect } from "react"
import "./chat.css"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import Message from "../Message/Message"
import Time from "../Time/Time"
import OptionsMenu from "../OptionsMenu/OptionsMenu"

export default function Chat(props) {
  const {
    id,
    userProfilePhoto,
    userName,
    lastMessage,
    info,
    time,
    directMessage,
    setDirectMessage
  } = props

  function handleChatClick(e) {
    if (!e.target.matches("[data-options-arrow]")) {
      const chatWrapper = e.target.closest(".chat-wrapper")
      const activeChats = [...document.querySelectorAll("[data-active]")]
      const id = chatWrapper.dataset.id
      const inactiveChats = activeChats.filter(chat => {
        return chat !== chatWrapper
      })

      setDirectMessage(id)
    }
  }

  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-id]")]
    const selectedElement = elements.filter(el => {
      return el.getAttribute("data-id") === directMessage
    })

    selectedElement[0]?.setAttribute?.("data-active", "true")
  }, [directMessage])

  return (
    <div
      data-id={id}
      data-active="false"
      onClick={handleChatClick}
      className="chat-wrapper"
    >
      <ProfilePhoto navProfilePhoto={"chat"} url={userProfilePhoto} />
      <div className="headers-wrapper">
        <div className="friend-name-and-time">
          <PrimaryHeaderText headerType={"chat"} text={userName} />
          <Time time={time} />
        </div>
        <Message info={info} headerType={"chat"} text={lastMessage} />
      </div>
      <div data-chat-options>
        <OptionsMenu menuArray={chatOptions} />
      </div>
    </div>
  )
}

const chatOptions = [
  "Archive chat",
  "Mute notifications",
  "Delete chat",
  "Pin chat",
  "Mark as unread"
]
