import React, { useState, useEffect } from "react"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import Message from "../Message/Message"
import Time from "../Time/Time"
import OptionsMenu from "../OptionsMenu/OptionsMenu"
import { ReactComponent as DeletedIcon } from "../../icons/deleted-icon.svg"
import "./chat.css"

export default function Chat(props) {
  const {
    id,
    userProfilePhoto,
    userName,
    lastMessage,
    info,
    time,
    userId,
    setUserId,
    deleted
  } = props
  function handleChatClick(e) {
    if (!e.target.matches("[data-options-arrow]")) {
      const chatWrapper = e.target.closest(".chat-wrapper")
      const activeChats = [...document.querySelectorAll("[data-active]")]
      const id = chatWrapper.dataset.id
      const inactiveChats = activeChats.filter(chat => {
        return chat !== chatWrapper
      })

      setUserId(id)
    }
  }

  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-id]")]
    const selectedElement = elements.filter(el => {
      return el.getAttribute("data-id") === userId
    })

    selectedElement[0]?.setAttribute?.("data-active", "true")
  }, [userId])

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
          {deleted === "false" ? <Time time={time} /> : null}
        </div>
        {deleted === "false" ? (
          <Message info={info} headerType={"message"} text={lastMessage} />
        ) : (
          <div className="deleted-message-container">
            <div className="deleted-message-wrapper-friends-list">
              <div className="deleted-icon">
                <DeletedIcon />
              </div>
              <div className="deleted-message">You deleted this message</div>
            </div>
          </div>
        )}
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
