import React, { useState, useRef } from "react"
import InputText from "../InputText/InputText"
import ReactionsContainer from "../ReactionsContainer/ReactionsContainer"
import RepliedMessage from "../RepliedMessage/RepliedMessage"
import { v4 as uuidv4 } from "uuid"
import { ReactComponent as CloseButtonIcon } from "../../icons/type-message-area-close-icon.svg"
import { ReactComponent as EmojiIcon } from "../../icons/type-message-area-emoji-icon.svg"
import { ReactComponent as GifIcon } from "../../icons/type-message-area-gif-icon.svg"
import { ReactComponent as StickerIcon } from "../../icons/type-message-area-sticker-icon.svg"
import { ReactComponent as AttachIcon } from "../../icons/attach-icon.svg"
import { ReactComponent as AttachItemPoll } from "../../icons/attach-item-poll.svg"
import { ReactComponent as AttachItemContact } from "../../icons/attach-item-contact.svg"
import { ReactComponent as AttachItemDocument } from "../../icons/attach-item-document.svg"
import { ReactComponent as AttachItemCamera } from "../../icons/attach-item-camera.svg"
import { ReactComponent as AttachItemSticker } from "../../icons/attach-item-sticker.svg"
import { ReactComponent as AttachItemPhotosAndVideos } from "../../icons/attach-item-photos-videos.svg"
import { ReactComponent as MicrophoneIcon } from "../../icons/microphone-icon.svg"
import "./typeMessage.css"

export default function TypeMessage({
  selectedUserId,
  replyMessage,
  setReplyMessage,
  messageHistory,
  setMessageHistory
}) {
  const [attach, setAttach] = useState("false")
  const [icons, setIcons] = useState("false")
  const [showReactions, setShowReactions] = useState("false")
  const attachItems = useRef()

  function handleAttachClick(e) {
    setAttach(prevAttach => {
      if (prevAttach === "false") return (prevAttach = "true")

      if (prevAttach === "true") return (prevAttach = "false")
    })
  }

  function handleAttachIcon(e) {
    const attachIconWrapper = e.target.closest(".attach-icon-wrapper")
    const attachItems = attachIconWrapper.querySelector(".attach-items")
    const attachItem = [...attachItems.querySelectorAll(".attach-item")]

    if (attach === "true") {
      attachItems.classList.add("attach-active")
      attachItem.forEach(item => {
        item.classList.add("attach-item-scale")
      })
    } else if (attach === "false") {
      attachItems.classList.remove("attach-active")
      attachItem.forEach(item => {
        item.classList.remove("attach-item-scale")
      })
    }
  }

  function handleEmojiIconClick(e) {
    const container = e.target.closest(".type-message-container")
    const emojiIcon = container.querySelector(".emoji-icon")
    const closeIcon = container.querySelector(".close-icon")
    const gifIcon = container.querySelector(".gif-icon")
    const stickerIcon = container.querySelector(".sticker-icon")
    const emojisContainer = document.querySelector(".reaction-emoji")
    const gifsContainer = document.querySelector(".reaction-gif")
    const stickersContainer = document.querySelector(".reaction-sticker")

    gifsContainer.style.display = "none"
    stickersContainer.style.display = "none"
    emojisContainer.style.display = "block"

    gifIcon.style.color = "var(--default-icon-theme)"
    stickerIcon.style.color = "var(--default-icon-theme)"
    emojiIcon.style.color = "var(--teal)"

    if (icons === "false") {
      closeIcon.classList.remove("icons-deactive")
      gifIcon.classList.remove("icons-deactive")
      stickerIcon.classList.remove("icons-deactive")
      closeIcon.classList.add("icons-active")
      gifIcon.classList.add("icons-active")
      stickerIcon.classList.add("icons-active")

      emojiIcon.style.color = "var(--teal)"

      setIcons(prevIcon => {
        if (prevIcon === "false") return (prevIcon = "true")
      })
    }

    showReactionsContainer(container)
  }

  function handleCloseIconClick(e) {
    const container = e.target.closest(".type-message-container")
    const emojiIcon = container.querySelector(".emoji-icon")
    const closeIcon = container.querySelector(".close-icon")
    const gifIcon = container.querySelector(".gif-icon")
    const stickerIcon = container.querySelector(".sticker-icon")

    if (icons === "true") {
      closeIcon.classList.remove("icons-active")
      gifIcon.classList.remove("icons-active")
      stickerIcon.classList.remove("icons-active")
      closeIcon.classList.add("icons-deactive")
      gifIcon.classList.add("icons-deactive")
      stickerIcon.classList.add("icons-deactive")

      emojiIcon.style.color = "var(--default-icon-theme)"

      setIcons(prevIcon => {
        if (prevIcon === "true") return (prevIcon = "false")
      })
    }

    hideReactionsContainer(container)
  }

  function changeState() {
    setShowReactions(prevReactions => {
      if (prevReactions === "false") {
        return (prevReactions = "true")
      } else if (prevReactions === "true") {
        return (prevReactions = "false")
      }
    })
  }

  function showReactionsContainer(container) {
    const reactionsContainer = container.querySelector(".reactions-container")
    reactionsContainer.classList.remove("hide-reactions")
    reactionsContainer.classList.add("show-reactions")
  }

  function hideReactionsContainer(container) {
    const reactionsContainer = container.querySelector(".reactions-container")
    reactionsContainer.classList.remove("show-reactions")
    reactionsContainer.classList.add("hide-reactions")
  }

  function handleGifIconClick(e) {
    const container = e.target.closest(".type-message-container")
    const emojisContainer = document.querySelector(".reaction-emoji")
    const gifsContainer = document.querySelector(".reaction-gif")
    const stickersContainer = document.querySelector(".reaction-sticker")
    const emojiIcon = container.querySelector(".emoji-icon")
    const gifIcon = container.querySelector(".gif-icon")
    const stickerIcon = container.querySelector(".sticker-icon")

    gifIcon.style.color = "var(--teal)"
    emojiIcon.style.color = "var(--default-icon-theme)"
    stickerIcon.style.color = "var(--default-icon-theme)"

    emojisContainer.style.display = "none"
    stickersContainer.style.display = "none"
    gifsContainer.style.display = "block"
  }

  function handleStickerIconClick(e) {
    const container = e.target.closest(".type-message-container")
    const emojisContainer = document.querySelector(".reaction-emoji")
    const gifsContainer = document.querySelector(".reaction-gif")
    const stickersContainer = document.querySelector(".reaction-sticker")
    const emojiIcon = container.querySelector(".emoji-icon")
    const gifIcon = container.querySelector(".gif-icon")
    const stickerIcon = container.querySelector(".sticker-icon")

    gifIcon.style.color = "var(--default-icon-theme)"
    emojiIcon.style.color = "var(--default-icon-theme)"
    stickerIcon.style.color = "var(--teal)"

    emojisContainer.style.display = "none"
    stickersContainer.style.display = "block"
    gifsContainer.style.display = "none"
  }

  return (
    <div onClick={changeState} className="type-message-container">
      <div className="reply-message">
        {replyMessage.map(message => {
          return (
            <RepliedMessage
              key={uuidv4()}
              name={message.name}
              message={message.message}
              setReplyMessage={setReplyMessage}
            />
          )
        })}
      </div>
      <ReactionsContainer showReactions={showReactions} />
      <div className="type-message-text-area">
        <div className="icons-wrapper">
          <div
            onClick={handleCloseIconClick}
            icons={icons}
            className="close-icon"
          >
            <CloseButtonIcon />
          </div>
          <div
            onClick={handleEmojiIconClick}
            icons={icons}
            className="emoji-icon"
          >
            <EmojiIcon />
          </div>
          <div onClick={handleGifIconClick} className="gif-icon">
            <GifIcon />
          </div>
          <div onClick={handleStickerIconClick} className="sticker-icon">
            <StickerIcon />
          </div>
          <div className="emoji-attach">
            <div
              ref={attachItems}
              attach={attach}
              onClick={handleAttachClick}
              className="attach-icon-wrapper"
            >
              <div className="attach-items">
                <div className="attach-item poll">
                  <AttachItemPoll />
                </div>
                <div className="attach-item contact">
                  <AttachItemContact />
                </div>
                <div className="attach-item document">
                  <AttachItemDocument />
                </div>
                <div className="attach-item camera">
                  <AttachItemCamera />
                </div>
                <div className="attach-item sticker">
                  <AttachItemSticker />
                </div>
                <div className="attach-item photos-videos">
                  <AttachItemPhotosAndVideos />
                </div>
              </div>
              <div onClick={handleAttachIcon} className="attach-icon">
                <AttachIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="type-message">
          <InputText
            selectedUserId={selectedUserId}
            messageHistory={messageHistory}
            replyMessage={replyMessage}
            setReplyMessage={setReplyMessage}
            setMessageHistory={setMessageHistory}
            type={"dm"}
          />
        </div>
        <div className="microphone-icon">
          <MicrophoneIcon />
        </div>
      </div>
    </div>
  )
}
