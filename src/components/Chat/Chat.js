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
  console.log(deleted)
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
            <div className="deleted-message-wrapper">
              <div className="deleted-icon">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.75897 6.43054C8.93584 5.533 10.4057 5 12 5C15.866 5 19 8.13401 19 12C19 13.5943 18.467 15.0642 17.5695 16.241L7.75897 6.43054ZM6.35707 7.85707C5.50399 9.01706 5 10.4497 5 12C5 15.866 8.13401 19 12 19C13.5503 19 14.9829 18.496 16.1429 17.6429L6.35707 7.85707ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
