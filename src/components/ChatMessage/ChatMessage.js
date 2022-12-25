import React, { useState, useEffect } from "react"
import Time from "../Time/Time"
import MessageInfo from "../MessageInfo/MessageInfo"
import Emoji from "../Emoji/Emoji"
import ReactionEmojiContainer from "../ReactionEmojiContainer/ReactionEmojiContainer"
import { v4 as uuidv4 } from "uuid"
import OptionsMenu from "../OptionsMenu/OptionsMenu"
import RepliedMessage from "../RepliedMessage/RepliedMessage"
import CustomAlert from "../CustomAlert/CustomAlert"
import "./chatMessage.css"

export default function ChatMessage(props) {
  const {
    reply,
    id,
    origin,
    message,
    status,
    starred,
    time,
    deleted,
    repliedMessage,
    contactName,
    setReplyMessage,
    userId,
    database,
    selectedUserName,
    messageHistory,
    setMessageHistory
  } = props
  let currentColor = "var(--star-icon)"
  const [commonEmojis, setCommonEmojis] = useState(wrapperEmojis)
  const [star, setStar] = useState(starred)

  useEffect(() => {
    if (commonEmojis.length === 7) {
      const attributeName = commonEmojis[6].emojiName

      const reactionWrappers = [
        ...document.querySelectorAll(".emoji-reactions-wrapper")
      ]

      reactionWrappers.filter(wrapper => {
        const emojiWrappers = [...wrapper.querySelectorAll(".emoji-wrapper")]

        const checkWrappers = [
          ...emojiWrappers.filter(emojiWrap => {
            return emojiWrap.getAttribute("emojiname") === attributeName
          })
        ]

        checkWrappers.forEach(wrap => {
          wrap.classList.add("emoji-selected")
        })
      })
    }
  }, [commonEmojis])

  function showEmojiWrapper(e) {
    const container = e.target.closest(".chat-message")
    const clickedButton = e.target.closest(".emojis-button")
    const emojiWrapper = container.querySelector(".emoji-reactions-wrapper")
    const emojiGrids = [...document.querySelectorAll(".emojis-list")]
    if (e.target.matches(".incoming-message-reaction-icon")) {
      handleIncomingMessageReaction(e, clickedButton)
    } else if (e.target.matches(".outgoing-message-reaction-icon")) {
      handleOutgoingMessageReaction(e, clickedButton)
    }

    showEmojiButtonIcon(clickedButton, emojiWrapper)

    emojiGrids.forEach(grid => {
      grid.classList.remove("show-emojis-list-top-left")
      grid.classList.remove("show-emojis-list-bottom-left")
      grid.classList.remove("show-emojis-list-bottom-right")
      grid.classList.remove("show-emojis-list-top-right")
    })
  }

  function showEmojiButtonIcon(clickedButton, emojiWrapper) {
    const emojiButtons = [...document.querySelectorAll(".emojis-button")]
    emojiButtons.forEach(button => {
      button.classList.add("hide-emojis-button")
    })

    clickedButton.classList.remove("hide-emojis-button")
    clickedButton.classList.add("show-emojis-button")

    if (emojiWrapper.classList.contains("wrapper-active")) {
      clickedButton.classList.remove("hide-emojis-button")
      clickedButton.classList.add("show-emojis-button")
    } else {
      clickedButton.classList.remove("show-emojis-button")
      clickedButton.classList.add("hide-emojis-button")
    }
  }

  function handleIncomingMessageReaction(e) {
    const mainContainer = e.target.closest(".direct-message-body")
    const container = e.target.closest(".chat-message-container-incoming")
    const emojisWrapper = container.querySelector(".emoji-reactions-wrapper")
    const type = "incoming"

    if (emojisWrapper.classList.contains("wrapper-active")) {
      emojisWrapper.classList.remove("show-wrapper-top-incoming")
      emojisWrapper.classList.remove("show-wrapper-bottom-incoming")
      emojisWrapper.classList.remove("wrapper-active")
    } else {
      handleWrapperLocation(e, mainContainer, emojisWrapper, type)
    }
  }

  function handleOutgoingMessageReaction(e) {
    const mainContainer = e.target.closest(".direct-message-body")
    const container = e.target.closest("[data-outgoing]")
    const emojisWrapper = container.querySelector(".emoji-reactions-wrapper")
    const type = "outgoing"

    if (emojisWrapper.classList.contains("wrapper-active")) {
      emojisWrapper.classList.remove("show-wrapper-top-outgoing")
      emojisWrapper.classList.remove("show-wrapper-bottom-outgoing")
      emojisWrapper.classList.remove("show-wrapper-top-incoming")
      emojisWrapper.classList.remove("show-wrapper-bottom-incoming")
      emojisWrapper.classList.remove("wrapper-active")
    } else {
      handleWrapperLocation(e, mainContainer, emojisWrapper, type)
    }
  }

  function handleWrapperLocation(e, mainContainer, emojisWrapper, type) {
    let bounds = mainContainer.getBoundingClientRect()
    let y = e.clientY - bounds.top

    if (type === "incoming") {
      if (y <= 109) {
        emojisWrapper.classList.add("show-wrapper-bottom-incoming")
        emojisWrapper.classList.add("active-reaction")
        emojisWrapper.classList.add("wrapper-active")
      } else if (y > 109) {
        emojisWrapper.classList.add("show-wrapper-top-incoming")
        emojisWrapper.classList.add("active-reaction")
        emojisWrapper.classList.add("wrapper-active")
      }
    } else if (type === "outgoing") {
      if (y <= 109) {
        emojisWrapper.classList.add("show-wrapper-bottom-outgoing")
        emojisWrapper.classList.add("wrapper-active")
      } else if (y > 109) {
        emojisWrapper.classList.add("show-wrapper-top-outgoing")
        emojisWrapper.classList.add("wrapper-active")
      }
    }

    hideOtherWrappers(e, emojisWrapper, type)
  }

  function hideOtherWrappers(e, emojisWrapper, type) {
    const allWrappers = [
      ...document.querySelectorAll(".emoji-reactions-wrapper")
    ]
    const unusedWrappers = allWrappers.filter(wrapper => {
      return emojisWrapper !== wrapper
    })

    if (type === "incoming") {
      unusedWrappers.forEach(wrapper => {
        wrapper.classList.remove("show-wrapper-top-incoming")
        wrapper.classList.remove("show-wrapper-bottom-incoming")
        wrapper.classList.remove("show-wrapper-top-outgoing")
        wrapper.classList.remove("show-wrapper-bottom-outgoing")
        wrapper.classList.remove("wrapper-active")
        wrapper.classList.add("hide-emojis-wrapper")
      })
    } else if (type === "outgoing") {
      unusedWrappers.forEach(wrapper => {
        wrapper.classList.remove("show-wrapper-top-incoming")
        wrapper.classList.remove("show-wrapper-bottom-incoming")
        wrapper.classList.remove("show-wrapper-top-outgoing")
        wrapper.classList.remove("show-wrapper-bottom-outgoing")
        wrapper.classList.remove("wrapper-active")
        wrapper.classList.add("hide-emojis-wrapper")
      })
    }
  }

  function handleGridVisibility(e) {
    const container = e.target.closest(".chat-message")
    const emojisGridWrapper = container.querySelector(".emojis-list")
    const xValue = e.pageX
    const yValue = e.pageY

    handleGridPosition(xValue, yValue, emojisGridWrapper)
  }

  function handleGridPosition(xValue, yValue, emojisGridWrapper) {
    hideWrappersAndGrids(emojisGridWrapper)
    if (xValue < 1100) {
      if (yValue >= 336) {
        emojisGridWrapper.classList.remove("show-emojis-list-top-left")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-left")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-right")
        emojisGridWrapper.classList.toggle("show-emojis-list-top-right")
      } else if (yValue < 336) {
        emojisGridWrapper.classList.remove("show-emojis-list-top-left")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-left")
        emojisGridWrapper.classList.remove("show-emojis-list-top-right")
        emojisGridWrapper.classList.toggle("show-emojis-list-bottom-right")
      }
    } else if (xValue >= 1100) {
      if (yValue >= 336) {
        emojisGridWrapper.classList.remove("show-emojis-list-top-right")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-left")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-right")
        emojisGridWrapper.classList.toggle("show-emojis-list-top-left")
      } else if (yValue < 336) {
        emojisGridWrapper.classList.remove("show-emojis-list-top-left")
        emojisGridWrapper.classList.remove("show-emojis-list-top-right")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-right")
        emojisGridWrapper.classList.toggle("show-emojis-list-bottom-left")
      }
    }
  }

  function hideWrappersAndGrids(emojisGridWrapper) {
    const emojiWrappers = document.querySelectorAll(".emoji-reactions-wrapper")
    const emojiGrids = [...document.querySelectorAll(".emojis-list")]
    const unnecessaryGrids = emojiGrids.filter(grid => {
      return grid !== emojisGridWrapper
    })

    emojiWrappers.forEach(wrapper => {
      wrapper.classList.remove("show-wrapper-top-incoming")
      wrapper.classList.remove("show-wrapper-bottom-incoming")
      wrapper.classList.remove("show-wrapper-top-outgoing")
      wrapper.classList.remove("show-wrapper-top-outgoing")
      wrapper.classList.remove("wrapper-active")
      wrapper.classList.add("hide-emojis-wrapper")
    })

    unnecessaryGrids.forEach(grid => {
      grid.classList.remove("show-emojis-list-top-left")
      grid.classList.remove("show-emojis-list-bottom-left")
      grid.classList.remove("show-emojis-list-bottom-right")
      grid.classList.remove("show-emojis-list-top-right")
    })
  }

  function handleReactionClick(e) {
    const mainContainer = e.target.closest(".chat-message")
    const reactionsWrapper = mainContainer.querySelector(
      ".emoji-reactions-wrapper"
    )
    const reactionArea = mainContainer.querySelector(".message-reaction")
    const emojisButton = mainContainer.querySelector(".emojis-button")
    const previousSelectedEmoji = mainContainer.querySelector(".emoji-selected")

    if (previousSelectedEmoji) {
      previousSelectedEmoji.classList.remove("emoji-selected")
    }

    if (e.target.classList.contains("emoji-wrapper")) {
      const emoji = e.target.textContent
      if (emoji === reactionArea.textContent) {
        reactionArea.textContent = ""
      } else {
        reactionArea.textContent = emoji
        e.target.classList.add("emoji-selected")
      }
    }

    if (e.target.classList.contains("emoji-wrapper")) {
      const moreEmojisButton = reactionsWrapper.querySelector(
        ".more-emojis-button"
      )
      if (moreEmojisButton.style.display === "none") {
        const emojiWrappers = [
          ...reactionsWrapper.querySelectorAll(".emoji-wrapper")
        ]
        emojiWrappers.pop()

        const newWrapper = emojiWrappers.map(wrapper => {
          const emojiName = wrapper.getAttribute("emojiname")

          return { emojiName: emojiName, emoji: wrapper.textContent }
        })

        setCommonEmojis([...newWrapper])

        moreEmojisButton.style.display = "block"
      }
    }

    reactionsWrapper.classList.remove("show-wrapper-top-incoming")
    reactionsWrapper.classList.remove("show-wrapper-bottom-incoming")
    reactionsWrapper.classList.remove("show-wrapper-top-outgoing")
    reactionsWrapper.classList.remove("show-wrapper-top-outgoing")
    reactionsWrapper.classList.remove("wrapper-active")
    reactionsWrapper.classList.add("hide-emojis-wrapper")

    emojisButton.classList.remove("show-emojis-button")
    emojisButton.classList.add("hide-emojis-button")
  }

  function handleEmojiGrid(e) {
    if (e.target.matches(".emoji-wrapper")) {
      const mainContainer = e.target.closest(".chat-message")
      const reactionsWrapper = mainContainer.querySelector(
        ".emoji-reactions-wrapper"
      )
      const reactionsWrapperEmojis = [
        ...reactionsWrapper.querySelectorAll(".emoji-wrapper")
      ]
      const reactionArea = mainContainer.querySelector(".message-reaction")
      const emojisButton = mainContainer.querySelector(".emojis-button")
      const emojisList = mainContainer.querySelector(".emojis-list")
      const moreEmojisButton = mainContainer.querySelector(
        ".more-emojis-button"
      )
      const commonEmojiNames = [
        "thumb up",
        "red heart",
        "cry from laughing",
        "surprised",
        "sad",
        "high five"
      ]

      commonEmojiNames.forEach(name => {
        handleCommonEmojis(e, reactionsWrapperEmojis, name, reactionArea)
      })

      if (!commonEmojiNames.includes(e.target.getAttribute("emojiname"))) {
        handleDifferentEmojis(e, moreEmojisButton)
      }

      if (e.target.classList.contains("emoji-wrapper")) {
        const emoji = e.target.textContent
        reactionArea.textContent = emoji
      }

      reactionsWrapper.classList.remove("show-wrapper-top-incoming")
      reactionsWrapper.classList.remove("show-wrapper-bottom-incoming")
      reactionsWrapper.classList.remove("show-wrapper-top-outgoing")
      reactionsWrapper.classList.remove("show-wrapper-top-outgoing")
      reactionsWrapper.classList.remove("wrapper-active")
      reactionsWrapper.classList.add("hide-emojis-wrapper")

      emojisButton.classList.remove("show-emojis-button")
      emojisButton.classList.add("hide-emojis-button")

      emojisList.classList.remove("show-emojis-list-top-left")
      emojisList.classList.remove("show-emojis-list-bottom-left")
      emojisList.classList.remove("show-emojis-list-bottom-right")
      emojisList.classList.remove("show-emojis-list-top-right")
    }
  }

  function handleCommonEmojis(
    e,
    reactionsWrapperEmojis,
    className,
    reactionArea
  ) {
    if (e.target.getAttribute("emojiname") === className) {
      const commonEmoji = reactionsWrapperEmojis.filter(emoji => {
        return emoji.getAttribute("emojiname") === className
      })

      reactionsWrapperEmojis.map(emoji => {
        emoji.classList.remove("emoji-selected")
      })

      commonEmoji[0].classList.add("emoji-selected")
      reactionArea.textContent = commonEmoji[0].textContent
    }
  }

  function handleDifferentEmojis(e, moreEmojisButton) {
    const emojiName = e.target.getAttribute("emojiname")
    const emoji = e.target.textContent
    const newEmoji = { emojiName: emojiName, emoji: emoji }

    moreEmojisButton.style.display = "none"

    if (commonEmojis.length > 6) {
      setCommonEmojis(commonEmojis.pop())
    }
    setCommonEmojis([...commonEmojis, newEmoji])
  }

  function handleChatOptions(e) {
    const body = e.target.closest(".direct-message-body")
    const container = e.target.closest(".chat-message")
    const optionsMenu = container.querySelector("[data-option-menu]")
    const clickPositionY = e.clientY
    const containerHeight = body.clientHeight
    const yPositionCalc = containerHeight / clickPositionY
    const allOptionsMenu = [...document.querySelectorAll("[data-option-menu]")]
    const differentMenus = allOptionsMenu.filter(menu => {
      return menu !== optionsMenu
    })

    differentMenus.map(menu => {
      handleHideOptionMenus(menu)
    })

    if (origin === "incoming") {
      if (yPositionCalc >= 1.5) {
        optionsMenu.classList.remove("options-menu")
        if (optionsMenu.classList.contains("options-menu-incoming-down")) {
          optionsMenu.classList.remove("options-menu-incoming-down")
          optionsMenu.classList.add("options-menu-incoming-down-hide")
        } else {
          optionsMenu.classList.remove("options-menu-incoming-down-hide")
          optionsMenu.classList.add("options-menu-incoming-down")
        }
      } else if (yPositionCalc < 1.5) {
        optionsMenu.classList.remove("options-menu")
        if (optionsMenu.classList.contains("options-menu-incoming-up")) {
          optionsMenu.classList.remove("options-menu-incoming-up")
          optionsMenu.classList.add("options-menu-incoming-up-hide")
        } else {
          optionsMenu.classList.remove("options-menu-incoming-up-hide")
          optionsMenu.classList.add("options-menu-incoming-up")
        }
      }
    }

    if (origin === "outgoing") {
      if (yPositionCalc >= 1.5) {
        optionsMenu.classList.remove("options-menu")
        if (optionsMenu.classList.contains("options-menu-outgoing-down")) {
          optionsMenu.classList.remove("options-menu-outgoing-down")
          optionsMenu.classList.add("options-menu-outgoing-down-hide")
        } else {
          optionsMenu.classList.remove("options-menu-outgoing-down-hide")
          optionsMenu.classList.add("options-menu-outgoing-down")
        }
      } else if (yPositionCalc < 1.5) {
        optionsMenu.classList.remove("options-menu")
        if (optionsMenu.classList.contains("options-menu-outgoing-up")) {
          optionsMenu.classList.remove("options-menu-outgoing-up")
          optionsMenu.classList.add("options-menu-outgoing-up-hide")
        } else {
          optionsMenu.classList.remove("options-menu-outgoing-up-hide")
          optionsMenu.classList.add("options-menu-outgoing-up")
        }
      }
    }
  }

  function handleHideOptionMenus(menu) {
    if (menu.classList.contains("options-menu-incoming-up")) {
      menu.classList.remove("options-menu-incoming-up")
      menu.classList.add("options-menu-incoming-up-hide")
    }
    if (menu.classList.contains("options-menu-incoming-down")) {
      menu.classList.remove("options-menu-incoming-down")
      menu.classList.add("options-menu-incoming-down-hide")
    }
    if (menu.classList.contains("options-menu-outgoing-up")) {
      menu.classList.remove("options-menu-outgoing-up")
      menu.classList.add("options-menu-outgoing-up-hide")
    }
    if (menu.classList.contains("options-menu-outgoing-down")) {
      menu.classList.remove("options-menu-outgoing-down")
      menu.classList.add("options-menu-outgoing-down-hide")
    }
  }

  function handleOptions(e) {
    const menu = e.target.closest("[data-option-menu]")

    switch (e.target.textContent) {
      case "Reply":
        handleChatReply(e)
        break
      case "React to message":
        handleReactOption(e)
        break
      case "Star message":
        handleStarOption(e)
        break
      case "Delete message":
        handleDeleteOption(e)
        break
    }

    handleHideOptionMenus(menu)
  }

  function handleDeleteOption(e) {
    const container = e.target.closest(".chat-message")
    const message = container.querySelector(".message")

    if (message != null) {
      if (container.getAttribute("data-outgoing") === "true") {
        const alert = container.querySelector(".custom-alert")
        const overlay = container.querySelector(".overlay")

        alert.classList.add("custom-alert-show")
        overlay.style.display = "block"
      } else if (container.getAttribute("data-incoming") === "true") {
        const alert = container.querySelector(".custom-alert")
        const overlay = container.querySelector(".overlay")

        alert.classList.add("custom-alert-show")
        overlay.style.display = "block"
      }
    } else {
      handleDeleteCompletely(e)
    }
  }

  function handleDeleteCompletely(e) {
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

  function handleReactOption(e) {
    const container = e.target.closest(".chat-message")

    if (container.classList.contains("chat-message-container-incoming")) {
      handleIncomingMessageReaction(e)
    }

    if (container.classList.contains("chat-message-container-outgoing")) {
      handleOutgoingMessageReaction(e)
    }
  }

  function handleStarOption(e) {
    const container = e.target.closest("[data-chat-message-container]")
    const selectedUserMessages = database.filter(user => {
      return user.id === userId
    })

    const starredMessage = selectedUserMessages[0]?.messages?.filter?.(
      message => {
        return message.id === container.id
      }
    )

    if (starredMessage[0].starred === "false") {
      starredMessage[0].starred = "true"
      setStar(prevStar => (prevStar = "true"))
    } else {
      starredMessage[0].starred = "false"
      setStar(prevStar => (prevStar = "false"))
    }
  }

  function handleChatReply(e) {
    const replyActive = document.querySelectorAll(".reply-active")
    replyActive.forEach(reply => {
      reply.classList.remove("reply-active")
    })

    const messageContainer = e.target.closest(".chat-message")
    const messageWrapper = messageContainer.querySelector(
      ".chat-message-wrapper-direct"
    )

    messageContainer.classList.add("reply-active")

    if (messageWrapper.contains(e.target)) return

    const message = messageContainer.querySelector(".message").textContent
    const name = selectedUserName
    const replyMessageInfo = { name: name, message: message }
    setReplyMessage([replyMessageInfo])
  }

  if (origin === "incoming") {
    return (
      <div
        id={id}
        onDoubleClick={handleChatReply}
        data-incoming
        data-chat-message-container
        className="chat-message chat-message-container-incoming"
      >
        <div className="chat-message-incoming-wrapper">
          <div className="chat-bubble-arrow">
            <svg viewBox="0 0 8 13" width="10" height="16">
              <path
                opacity=".13"
                fill="#0000000"
                d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
              ></path>
              <path
                fill="currentColor"
                d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
              ></path>
            </svg>
          </div>
          <div className="chat-message-wrapper-direct">
            <div
              onClick={handleChatOptions}
              className="chat-options-icon-direct"
            >
              <svg
                viewBox="0 0 18 18"
                height="18"
                width="18"
                preserveAspectRatio="xMidYMid meet"
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 18 18"
              >
                <path
                  fill={currentColor}
                  d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"
                ></path>
              </svg>
            </div>
            <div className="message-container-direct">
              <div className="message">{message}</div>
              <div className="star-icon-and-time">
                {star === "true" ? (
                  <svg
                    viewBox="0 0 16 15"
                    height="15"
                    width="16"
                    preserveAspectRatio="xMidYMid meet"
                    version="1.1"
                    x="0px"
                    y="0px"
                    enableBackground="new 0 0 16 15"
                  >
                    <path
                      fill={currentColor}
                      d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"
                    ></path>
                  </svg>
                ) : null}

                <Time time={time} />
              </div>
            </div>
            <div className="message-reaction message-reaction-incoming"></div>
          </div>
          <div data-emojis className="emojis-incoming">
            <div className="emojis-incoming-content">
              <div onClick={showEmojiWrapper} className="emojis-button">
                <svg
                  viewBox="0 0 15 15"
                  width="15"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  className="incoming-message-reaction-icon reaction-button-icon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                onClick={handleReactionClick}
                className="emoji-reactions-wrapper"
              >
                {commonEmojis.map(emoji => {
                  return (
                    <Emoji
                      key={uuidv4()}
                      emojiName={emoji.emojiName}
                      emoji={emoji.emoji}
                    />
                  )
                })}
                <div
                  onClick={handleGridVisibility}
                  className="more-emojis-button"
                >
                  <div className="more-emojis-icon-wrapper">
                    <svg
                      viewBox="0 0 18 18"
                      width="18"
                      preserveAspectRatio="xMidYMid meet"
                      fill="none"
                    >
                      <path
                        d="M0.779492 9.77945C0.345435 9.34539 0.354642 8.64524 0.789127 8.21075C1.00194 7.99794 1.27674 7.88259 1.57806 7.90017L7.88829 7.87934L7.90025 1.57797C7.89154 1.26779 7.99803 1.00185 8.21083 0.789044C8.64532 0.354559 9.32774 0.363086 9.7618 0.797143C9.99211 1.02746 10.0895 1.2667 10.0805 1.59463L10.0862 7.89598L16.4053 7.90173C16.7598 7.90156 16.9991 7.99893 17.2116 8.21153C17.6457 8.64558 17.6542 9.34573 17.2197 9.78022C17.0069 9.99302 16.7499 10.0906 16.4308 10.0908L10.1117 10.1028L10.0998 16.4041C10.1085 16.7143 10.002 16.9803 9.78031 17.2019C9.34582 17.6364 8.64567 17.6456 8.20275 17.2027C7.97244 16.9724 7.87508 16.6977 7.8841 16.3875L7.8872 10.095L1.60356 10.107C1.27564 10.116 1.00981 10.0098 0.779492 9.77945Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={handleEmojiGrid} className="emojis-list">
              <ReactionEmojiContainer type={"reaction"} />
            </div>
          </div>
          <div
            onClick={handleOptions}
            data-option-menu
            className="options-menu"
          >
            <OptionsMenu menuArray={chatOptionsIncoming} />
          </div>
        </div>
        <CustomAlert
          type={"delete-message-incoming"}
          header={"Delete message?"}
          buttonPrimary={"DELETE FOR ME"}
          buttonSecondary={"CANCEL"}
          messageHistory={messageHistory}
          setMessageHistory={setMessageHistory}
        />
      </div>
    )
  } else if (origin === "outgoing") {
    if (reply === "true") {
      {
        return (
          <div
            id={id}
            data-chat-message-container
            data-outgoing
            onDoubleClick={handleChatReply}
            className="chat-message chat-message-container chat-message-container-outgoing chat-message-container-reply-outgoing"
          >
            <div data-outgoing className="chat-message-wrapper">
              {deleted === "true" ? null : (
                <RepliedMessage
                  type={"chat-section"}
                  name={contactName}
                  message={repliedMessage}
                />
              )}
              <div className="chat-bubble-arrow-outgoing">
                <svg viewBox="0 0 8 13" width="10" height="16">
                  <path
                    opacity=".13"
                    fill="#0000000"
                    d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                  ></path>
                </svg>
              </div>
              <div className="chat-message-wrapper-direct replied-ongoing-message">
                <div
                  onClick={handleChatOptions}
                  className="chat-options-icon-direct-outgoing"
                >
                  <svg
                    viewBox="0 0 18 18"
                    height="18"
                    width="18"
                    preserveAspectRatio="xMidYMid meet"
                    version="1.1"
                    x="0px"
                    y="0px"
                    enableBackground="new 0 0 18 18"
                  >
                    <path
                      fill={currentColor}
                      d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"
                    ></path>
                  </svg>
                </div>
                {deleted === "true" ? (
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
                      <div className="deleted-message">
                        You deleted this message
                      </div>
                      <Time time={"00:00"} />
                    </div>
                  </div>
                ) : (
                  <div className="message-container-direct">
                    <div className="message">{message}</div>
                    <div className="star-icon-and-time">
                      {star === "true" ? (
                        <svg
                          viewBox="0 0 16 15"
                          height="15"
                          width="16"
                          preserveAspectRatio="xMidYMid meet"
                          version="1.1"
                          x="0px"
                          y="0px"
                          enableBackground="new 0 0 16 15"
                        >
                          <path
                            fill={currentColor}
                            d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"
                          ></path>
                        </svg>
                      ) : null}

                      {deleted === "true" ? null : <Time time={time} />}
                      <div className="message-status">
                        <MessageInfo info={status} />
                      </div>
                    </div>
                  </div>
                )}
                <div className="message-reaction message-reaction-outgoing"></div>
              </div>
              <div data-emojis className="emojis-outgoing">
                <div className="emojis-outgoing-content">
                  <div onClick={showEmojiWrapper} className="emojis-button">
                    <svg
                      viewBox="0 0 15 15"
                      width="15"
                      preserveAspectRatio="xMidYMid meet"
                      fill="none"
                      className="outgoing-message-reaction-icon reaction-button-icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    onClick={handleReactionClick}
                    className="emoji-reactions-wrapper"
                  >
                    {commonEmojis.map(emoji => {
                      return (
                        <Emoji
                          key={uuidv4()}
                          emojiName={emoji.emojiName}
                          emoji={emoji.emoji}
                        />
                      )
                    })}
                    <div
                      onClick={handleGridVisibility}
                      className="more-emojis-button"
                    >
                      <div className="more-emojis-icon-wrapper">
                        <svg
                          viewBox="0 0 18 18"
                          width="18"
                          preserveAspectRatio="xMidYMid meet"
                          fill="none"
                        >
                          <path
                            d="M0.779492 9.77945C0.345435 9.34539 0.354642 8.64524 0.789127 8.21075C1.00194 7.99794 1.27674 7.88259 1.57806 7.90017L7.88829 7.87934L7.90025 1.57797C7.89154 1.26779 7.99803 1.00185 8.21083 0.789044C8.64532 0.354559 9.32774 0.363086 9.7618 0.797143C9.99211 1.02746 10.0895 1.2667 10.0805 1.59463L10.0862 7.89598L16.4053 7.90173C16.7598 7.90156 16.9991 7.99893 17.2116 8.21153C17.6457 8.64558 17.6542 9.34573 17.2197 9.78022C17.0069 9.99302 16.7499 10.0906 16.4308 10.0908L10.1117 10.1028L10.0998 16.4041C10.1085 16.7143 10.002 16.9803 9.78031 17.2019C9.34582 17.6364 8.64567 17.6456 8.20275 17.2027C7.97244 16.9724 7.87508 16.6977 7.8841 16.3875L7.8872 10.095L1.60356 10.107C1.27564 10.116 1.00981 10.0098 0.779492 9.77945Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={handleEmojiGrid} className="emojis-list">
                  <ReactionEmojiContainer type={"reaction"} />
                </div>
              </div>
              {deleted === "true" ? (
                <div
                  onClick={handleOptions}
                  data-option-menu
                  className="options-menu"
                >
                  <OptionsMenu menuArray={chatOptionsDeleted} />
                </div>
              ) : (
                <div
                  onClick={handleOptions}
                  data-option-menu
                  className="options-menu"
                >
                  <OptionsMenu menuArray={chatOptionsOutgoing} />
                </div>
              )}
              <CustomAlert
                type={"delete-message-outgoing"}
                header={"Delete message?"}
                buttonPrimary={"DELETE FOR ME"}
                buttonSecondary={"CANCEL"}
                buttonTertiary={"DELETE FOR EVERYONE"}
                messageHistory={messageHistory}
                setMessageHistory={setMessageHistory}
              />
            </div>
          </div>
        )
      }
    } else {
      return (
        <div
          id={id}
          data-outgoing
          data-chat-message-container
          onDoubleClick={handleChatReply}
          className="chat-message chat-message-container-outgoing"
        >
          <div className="chat-message-outgoing-wrapper">
            <div className="chat-bubble-arrow-outgoing">
              <svg viewBox="0 0 8 13" width="10" height="16">
                <path
                  opacity=".13"
                  fill="#0000000"
                  d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
                ></path>
                <path
                  fill="currentColor"
                  d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                ></path>
              </svg>
            </div>
            <div className="chat-message-wrapper-direct">
              <div
                onClick={handleChatOptions}
                className="chat-options-icon-direct-outgoing"
              >
                <svg
                  viewBox="0 0 18 18"
                  height="18"
                  width="18"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.1"
                  x="0px"
                  y="0px"
                  enableBackground="new 0 0 18 18"
                >
                  <path
                    fill={currentColor}
                    d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"
                  ></path>
                </svg>
              </div>
              {deleted === "true" ? (
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
                    <div data-delete className="deleted-message">
                      You deleted this message
                    </div>
                    <Time time={time} />
                  </div>
                </div>
              ) : (
                <div className="message-container-direct">
                  <div className="message">{message}</div>
                  <div className="star-icon-and-time">
                    {star === "true" ? (
                      <svg
                        viewBox="0 0 16 15"
                        height="15"
                        width="16"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.1"
                        x="0px"
                        y="0px"
                        enableBackground="new 0 0 16 15"
                      >
                        <path
                          fill={currentColor}
                          d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"
                        ></path>
                      </svg>
                    ) : null}

                    {deleted === "true" ? null : <Time time={time} />}
                    <div className="message-status">
                      <MessageInfo info={status} />
                    </div>
                  </div>
                </div>
              )}
              <div className="message-reaction message-reaction-outgoing"></div>
            </div>
            <div data-emojis className="emojis-outgoing">
              {deleted === "true" ? null : (
                <div className="emojis-outgoing-content">
                  <div onClick={showEmojiWrapper} className="emojis-button">
                    <svg
                      viewBox="0 0 15 15"
                      width="15"
                      preserveAspectRatio="xMidYMid meet"
                      fill="none"
                      className="outgoing-message-reaction-icon reaction-button-icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    onClick={handleReactionClick}
                    className="emoji-reactions-wrapper"
                  >
                    {commonEmojis.map(emoji => {
                      return (
                        <Emoji
                          key={uuidv4()}
                          emojiName={emoji.emojiName}
                          emoji={emoji.emoji}
                        />
                      )
                    })}
                    <div
                      onClick={handleGridVisibility}
                      className="more-emojis-button"
                    >
                      <div className="more-emojis-icon-wrapper">
                        <svg
                          viewBox="0 0 18 18"
                          width="18"
                          preserveAspectRatio="xMidYMid meet"
                          fill="none"
                        >
                          <path
                            d="M0.779492 9.77945C0.345435 9.34539 0.354642 8.64524 0.789127 8.21075C1.00194 7.99794 1.27674 7.88259 1.57806 7.90017L7.88829 7.87934L7.90025 1.57797C7.89154 1.26779 7.99803 1.00185 8.21083 0.789044C8.64532 0.354559 9.32774 0.363086 9.7618 0.797143C9.99211 1.02746 10.0895 1.2667 10.0805 1.59463L10.0862 7.89598L16.4053 7.90173C16.7598 7.90156 16.9991 7.99893 17.2116 8.21153C17.6457 8.64558 17.6542 9.34573 17.2197 9.78022C17.0069 9.99302 16.7499 10.0906 16.4308 10.0908L10.1117 10.1028L10.0998 16.4041C10.1085 16.7143 10.002 16.9803 9.78031 17.2019C9.34582 17.6364 8.64567 17.6456 8.20275 17.2027C7.97244 16.9724 7.87508 16.6977 7.8841 16.3875L7.8872 10.095L1.60356 10.107C1.27564 10.116 1.00981 10.0098 0.779492 9.77945Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div onClick={handleEmojiGrid} className="emojis-list">
                <ReactionEmojiContainer type={"reaction"} />
              </div>
            </div>
            {deleted === "true" ? (
              <div
                onClick={handleOptions}
                data-option-menu
                className="options-menu"
              >
                <OptionsMenu menuArray={chatOptionsDeleted} />
              </div>
            ) : (
              <div
                onClick={handleOptions}
                data-option-menu
                className="options-menu"
              >
                <OptionsMenu menuArray={chatOptionsOutgoing} />
              </div>
            )}
            <div
              onClick={handleOptions}
              data-option-menu
              className="options-menu"
            >
              <OptionsMenu menuArray={chatOptionsOutgoing} />
            </div>
          </div>
          <CustomAlert
            type={"delete-message-outgoing"}
            header={"Delete message?"}
            buttonPrimary={"DELETE FOR ME"}
            buttonSecondary={"CANCEL"}
            buttonTertiary={"DELETE FOR EVERYONE"}
            messageHistory={messageHistory}
            setMessageHistory={setMessageHistory}
          />
        </div>
      )
    }
  }
}

const wrapperEmojis = [
  {
    emojiName: "thumb up",
    emoji: "👍"
  },
  {
    emojiName: "red heart",
    emoji: "❤️"
  },
  {
    emojiName: "cry from laughing",
    emoji: "😂"
  },
  {
    emojiName: "surprised",
    emoji: "😮"
  },
  {
    emojiName: "sad",
    emoji: "😢"
  },
  {
    emojiName: "high five",
    emoji: "🙏"
  }
]

const chatOptionsIncoming = [
  "Reply",
  "React to message",
  "Forward message",
  "Star message",
  "Report",
  "Delete message"
]
const chatOptionsOutgoing = [
  "Message info",
  "Reply",
  "React to message",
  "Forward message",
  "Star message",
  "Report",
  "Delete message"
]

const chatOptionsDeleted = ["Delete message"]
