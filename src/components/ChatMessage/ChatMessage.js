import React, { useState, useEffect } from "react"
import Time from "../Time/Time"
import MessageInfo from "../MessageInfo/MessageInfo"
import Emoji from "../Emoji/Emoji"
import ReactionEmojiContainer from "../ReactionEmojiContainer/ReactionEmojiContainer"
import { v4 as uuidv4 } from "uuid"
import OptionsMenu from "../OptionsMenu/OptionsMenu"
import RepliedMessage from "../RepliedMessage/RepliedMessage"
import CustomAlert from "../CustomAlert/CustomAlert"
import { ReactComponent as ChatBubble } from "../../icons/chat-bubble.svg"
import { ReactComponent as ChatOptionsArrowDark } from "../../icons/chat-options-arrow-dark.svg"
import { ReactComponent as ChatOptionsArrowLight } from "../../icons/chat-options-arrow-light.svg"
import { ReactComponent as StarIconDark } from "../../icons/star-icon-dark.svg"
import { ReactComponent as StarIconLight } from "../../icons/star-icon-light.svg"
import { ReactComponent as EmojiButtonIncoming } from "../../icons/emoji-button-incoming.svg"
import { ReactComponent as EmojiButtonOutgoing } from "../../icons/emoji-button-outgoing.svg"
import { ReactComponent as MoreEmojisIcon } from "../../icons/more-emojis-icon.svg"
import { ReactComponent as DeletedIcon } from "../../icons/deleted-icon.svg"
import "./chatMessage.css"

export default function ChatMessage(props) {
  const {
    location,
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
    setMessageHistory,
    starredMessage,
    setStarredMessage,
    theme
  } = props
  const [commonEmojis, setCommonEmojis] = useState(wrapperEmojis)
  const [star, setStar] = useState(starred)

  useEffect(() => {
    const optionMenus = [...document.querySelectorAll("[data-option-menu]")]

    function handleBodyClick(e) {
      if (
        e.target.classList.contains("option-text") ||
        e.target.matches(".chat-options-icon-direct-outgoing") ||
        e.target.matches(".chat-options-icon-direct")
      ) {
        return
      } else {
        const activeMenus = optionMenus.filter(menu => {
          if (
            !menu.classList.contains("options-menu") &&
            !menu.classList.contains("options-menu-outgoing-up-hide") &&
            !menu.classList.contains("options-menu-outgoing-down-hide") &&
            !menu.classList.contains("options-menu-incoming-up-hide") &&
            !menu.classList.contains("options-menu-incoming-down-hide")
          ) {
            return menu
          } else {
            return null
          }
        })

        if (activeMenus.length > 0) {
          const className = activeMenus[0].classList.toString()
          handleOptionsMenuHide(className, activeMenus)
        }
      }
    }

    function handleOptionsMenuHide(className, activeMenus) {
      switch (className) {
        case "options-menu-outgoing-down":
          activeMenus[0].classList.remove("options-menu-outgoing-down")
          activeMenus[0].classList.add("options-menu-outgoing-down-hide")
          break
        case "options-menu-outgoing-up":
          activeMenus[0].classList.remove("options-menu-outgoing-up")
          activeMenus[0].classList.add("options-menu-outgoing-up-hide")
          break
        case "options-menu-incoming-down":
          activeMenus[0].classList.remove("options-menu-incoming-down")
          activeMenus[0].classList.add("options-menu-incoming-down-hide")
          break
        case "options-menu-incoming-up":
          activeMenus[0].classList.remove("options-menu-incoming-up")
          activeMenus[0].classList.add("options-menu-incoming-up-hide")
          break
      }
    }

    document.body.addEventListener("click", handleBodyClick)

    return () => {
      document.body.removeEventListener("click", handleBodyClick)
    }
  }, [])

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick)

    function handleBodyClick(e) {
      const emojiReactionWrappers = [
        ...document.querySelectorAll(".emoji-reactions-wrapper")
      ]
      const activeWrapper = emojiReactionWrappers.filter(wrapper => {
        return wrapper.classList.contains("wrapper-active")
      })

      const emojiGrids = [...document.querySelectorAll(".emojis-list")]

      const activeGrid = emojiGrids.filter(grid => {
        if (
          grid.classList.contains("show-emojis-list-bottom-right") ||
          grid.classList.contains("show-emojis-list-bottom-left") ||
          grid.classList.contains("show-emojis-list-top-right") ||
          grid.classList.contains("show-emojis-list-top-left")
        ) {
          return grid
        }
      })

      const emojisButtons = [...document.querySelectorAll(".emojis-button")]

      if (
        !e.target.matches(".emoji-wrapper") &&
        !e.target.matches(".show-emojis-button") &&
        !e.target.matches(".reaction-button-icon") &&
        !e.target.matches(".emojis-container-message-chat") &&
        !e.target.matches(".reaction-icon-chat") &&
        !e.target.matches(".more-emojis-icon-wrapper") &&
        !e.target.matches(".emojis-grid") &&
        !e.target.matches("svg") &&
        !e.target.matches("input") &&
        !e.target.matches(".emoji-container-message-chat") &&
        !e.target.matches(".emojis-header") &&
        !e.target.matches(".option-wrapper") &&
        !e.target.matches(".option-text")
      ) {
        handleHideWrappers(activeWrapper)
        handleHideEmojiGrids(activeGrid)
        hideEmojisButton(emojisButtons)
      }
    }

    function handleHideWrappers(activeWrapper) {
      if (activeWrapper.length > 0) {
        activeWrapper[0].classList.remove("wrapper-active")

        if (activeWrapper[0].classList.contains("show-wrapper-top-outgoing")) {
          activeWrapper[0].classList.remove("show-wrapper-top-outgoing")
          activeWrapper[0].classList.add("hide-wrapper-top-outgoing")
        } else if (
          activeWrapper[0].classList.contains("show-wrapper-top-incoming")
        ) {
          activeWrapper[0].classList.remove("show-wrapper-top-incoming")
          activeWrapper[0].classList.add("hide-wrapper-top-incoming")
        } else if (
          activeWrapper[0].classList.contains("show-wrapper-bottom-outgoing")
        ) {
          activeWrapper[0].classList.remove("show-wrapper-bottom-outgoing")
          activeWrapper[0].classList.add("hide-wrapper-bottom-outgoing")
        } else if (
          activeWrapper[0].classList.contains("show-wrapper-bottom-incoming")
        ) {
          activeWrapper[0].classList.remove("show-wrapper-bottom-incoming")
          activeWrapper[0].classList.add("hide-wrapper-bottom-incoming")
        }
      }
    }

    function handleHideEmojiGrids(activeGrid) {
      if (activeGrid.length > 0) {
        if (activeGrid[0].classList.contains("show-emojis-list-bottom-right")) {
          activeGrid[0].classList.remove("show-emojis-list-bottom-right")
          activeGrid[0].classList.add("hide-emojis-list-bottom-right")
        } else if (
          activeGrid[0].classList.contains("show-emojis-list-bottom-left")
        ) {
          activeGrid[0].classList.remove("show-emojis-list-bottom-left")
          activeGrid[0].classList.add("hide-emojis-list-bottom-left")
        } else if (
          activeGrid[0].classList.contains("show-emojis-list-top-right")
        ) {
          activeGrid[0].classList.remove("show-emojis-list-top-right")
          activeGrid[0].classList.add("hide-emojis-list-top-right")
        } else if (
          activeGrid[0].classList.contains("show-emojis-list-top-left")
        ) {
          activeGrid[0].classList.remove("show-emojis-list-top-left")
          activeGrid[0].classList.add("hide-emojis-list-top-left")
        }
      }
    }

    function hideEmojisButton(emojiButtons) {
      return emojiButtons.map(button => {
        button.classList.remove("show-emojis-button")
        button.classList.add("hide-emojis-button")
      })
    }

    return () => {
      document.body.removeEventListener("click", handleBodyClick)
    }
  }, [])

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
      grid.classList.remove("hide-emojis-list-top-left")
      grid.classList.remove("hide-emojis-list-bottom-left")
      grid.classList.remove("hide-emojis-list-bottom-right")
      grid.classList.remove("hide-emojis-list-top-right")
    })
  }

  function hideEmojiWrappers(wrapper) {
    if (wrapper.classList.contains("show-wrapper-top-incoming")) {
      wrapper.classList.remove("show-wrapper-top-incoming")
      wrapper.classList.add("hide-wrapper-top-incoming")
    } else if (wrapper.classList.contains("show-wrapper-bottom-incoming")) {
      wrapper.classList.remove("show-wrapper-bottom-incoming")
      wrapper.classList.add("hide-wrapper-bottom-incoming")
    } else if (wrapper.classList.contains("show-wrapper-top-outgoing")) {
      wrapper.classList.remove("show-wrapper-top-outgoing")
      wrapper.classList.add("hide-wrapper-top-outgoing")
    } else if (wrapper.classList.contains("show-wrapper-bottom-outgoing")) {
      wrapper.classList.remove("show-wrapper-bottom-outgoing")
      wrapper.classList.add("hide-wrapper-bottom-outgoing")
    }
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
      emojisWrapper.classList.remove("wrapper-active")

      if (emojisWrapper.classList.contains("show-wrapper-top-incoming")) {
        emojisWrapper.classList.remove("show-wrapper-top-incoming")
        emojisWrapper.classList.add("hide-wrapper-top-incoming")
      } else if (
        emojisWrapper.classList.contains("show-wrapper-bottom-incoming")
      ) {
        emojisWrapper.classList.remove("show-wrapper-bottom-incoming")
        emojisWrapper.classList.add("hide-wrapper-bottom-incoming")
      }
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
      emojisWrapper.classList.remove("wrapper-active")

      if (emojisWrapper.classList.contains("show-wrapper-top-outgoing")) {
        emojisWrapper.classList.remove("show-wrapper-top-outgoing")
        emojisWrapper.classList.add("hide-wrapper-top-outgoing")
      } else if (
        emojisWrapper.classList.contains("show-wrapper-bottom-outgoing")
      ) {
        emojisWrapper.classList.remove("show-wrapper-bottom-outgoing")
        emojisWrapper.classList.add("hide-wrapper-bottom-outgoing")
      }
    } else {
      handleWrapperLocation(e, mainContainer, emojisWrapper, type)
    }
  }

  function handleWrapperLocation(e, mainContainer, emojisWrapper, type) {
    let bounds = mainContainer.getBoundingClientRect()
    let y = e.clientY - bounds.top

    emojisWrapper.classList.remove("hide-wrapper-top-incoming")
    emojisWrapper.classList.remove("hide-wrapper-bottom-incoming")
    emojisWrapper.classList.remove("hide-wrapper-top-outgoing")
    emojisWrapper.classList.remove("hide-wrapper-bottom-outgoing")

    emojisWrapper.classList.add("wrapper-active")
    if (type === "incoming") {
      if (y <= 109) {
        emojisWrapper.classList.add("show-wrapper-bottom-incoming")
        emojisWrapper.classList.add("active-reaction")
      } else if (y > 109) {
        emojisWrapper.classList.add("show-wrapper-top-incoming")
        emojisWrapper.classList.add("active-reaction")
      }
    } else if (type === "outgoing") {
      if (y <= 109) {
        emojisWrapper.classList.add("show-wrapper-bottom-outgoing")
      } else if (y > 109) {
        emojisWrapper.classList.add("show-wrapper-top-outgoing")
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
        wrapper.classList.remove("wrapper-active")

        hideEmojiWrappers(wrapper)
      })
    } else if (type === "outgoing") {
      unusedWrappers.forEach(wrapper => {
        wrapper.classList.remove("wrapper-active")
        hideEmojiWrappers(wrapper)
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
        emojisGridWrapper.classList.remove("hide-emojis-list-top-left")
        emojisGridWrapper.classList.remove("hide-emojis-list-bottom-left")
        emojisGridWrapper.classList.remove("hide-emojis-list-bottom-right")
        emojisGridWrapper.classList.toggle("show-emojis-list-top-right")
      } else if (yValue < 336) {
        emojisGridWrapper.classList.remove("show-emojis-list-top-left")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-left")
        emojisGridWrapper.classList.remove("show-emojis-list-top-right")
        emojisGridWrapper.classList.remove("hide-emojis-list-top-left")
        emojisGridWrapper.classList.remove("hide-emojis-list-bottom-left")
        emojisGridWrapper.classList.remove("hide-emojis-list-top-right")
        emojisGridWrapper.classList.toggle("show-emojis-list-bottom-right")
      }
    } else if (xValue >= 1100) {
      if (yValue >= 336) {
        emojisGridWrapper.classList.remove("show-emojis-list-top-right")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-left")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-right")
        emojisGridWrapper.classList.remove("hide-emojis-list-top-right")
        emojisGridWrapper.classList.remove("hide-emojis-list-bottom-left")
        emojisGridWrapper.classList.remove("hide-emojis-list-bottom-right")
        emojisGridWrapper.classList.toggle("show-emojis-list-top-left")
      } else if (yValue < 336) {
        emojisGridWrapper.classList.remove("show-emojis-list-top-left")
        emojisGridWrapper.classList.remove("show-emojis-list-top-right")
        emojisGridWrapper.classList.remove("show-emojis-list-bottom-right")
        emojisGridWrapper.classList.remove("hide-emojis-list-top-left")
        emojisGridWrapper.classList.remove("hide-emojis-list-top-right")
        emojisGridWrapper.classList.remove("hide-emojis-list-bottom-right")
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
      wrapper.classList.remove("wrapper-active")
      wrapper.classList.add("hide-emojis-wrapper")
      hideEmojiWrappers(wrapper)
    })

    unnecessaryGrids.forEach(grid => {
      if (grid.classList.contains("show-emojis-list-top-left")) {
        grid.classList.remove("show-emojis-list-top-left")
        grid.classList.add("hide-emojis-list-top-left")
      } else if (grid.classList.contains("show-emojis-list-top-right")) {
        grid.classList.remove("show-emojis-list-top-right")
        grid.classList.add("hide-emojis-list-top-right")
      } else if (grid.classList.contains("show-emojis-list-bottom-left")) {
        grid.classList.remove("show-emojis-list-bottom-left")
        grid.classList.add("hide-emojis-list-bottom-left")
      } else if (grid.classList.contains("show-emojis-list-bottom-right")) {
        grid.classList.remove("show-emojis-list-bottom-right")
        grid.classList.add("hide-emojis-list-bottom-right")
      }
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

    emojisButton.classList.remove("show-emojis-button")
    emojisButton.classList.add("hide-emojis-button")

    hideEmojiWrappers(reactionsWrapper)
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
      if (yPositionCalc >= 1.6) {
        optionsMenu.classList.remove("options-menu")
        if (optionsMenu.classList.contains("options-menu-incoming-down")) {
          optionsMenu.classList.remove("options-menu-incoming-down")
          optionsMenu.classList.add("options-menu-incoming-down-hide")
        } else {
          optionsMenu.classList.remove("options-menu-incoming-down-hide")
          optionsMenu.classList.add("options-menu-incoming-down")
        }
      } else if (yPositionCalc < 1.6) {
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
      if (yPositionCalc >= 1.7) {
        optionsMenu.classList.remove("options-menu")
        if (optionsMenu.classList.contains("options-menu-outgoing-down")) {
          optionsMenu.classList.remove("options-menu-outgoing-down")
          optionsMenu.classList.add("options-menu-outgoing-down-hide")
        } else {
          optionsMenu.classList.remove("options-menu-outgoing-down-hide")
          optionsMenu.classList.add("options-menu-outgoing-down")
        }
      } else if (yPositionCalc < 1.7) {
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

        alert.classList.remove("custom-alert-hide")
        alert.classList.add("custom-alert-show")
        overlay.style.display = "block"
      } else if (container.getAttribute("data-incoming") === "true") {
        const alert = container.querySelector(".custom-alert")
        const overlay = container.querySelector(".overlay")

        alert.classList.remove("custom-alert-hide")
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
    const starredMessageInfo = selectedUserMessages[0]?.messages?.filter?.(
      message => {
        return message.id === container.id
      }
    )

    if (starredMessageInfo[0].starred === "false") {
      starredMessageInfo[0].starred = "true"
      setStar(prevStar => (prevStar = "true"))
    } else {
      starredMessageInfo[0].starred = "false"
      setStar(prevStar => (prevStar = "false"))
    }

    let starredMessageDetails

    if (starredMessageInfo[0].starred === "true") {
      starredMessageDetails = {
        name: selectedUserMessages?.[0]?.userName,
        profilePhoto: selectedUserMessages?.[0]?.userProfilePhoto,
        reply: starredMessageInfo?.[0]?.reply,
        starredMessageInfo: starredMessageInfo
      }

      setStarredMessage([...starredMessage, starredMessageDetails])
    } else if (starredMessageInfo[0].starred === "false") {
      setStarredMessage(previous => {
        return previous.filter(messages => {
          return messages.starredMessageInfo[0].id !== starredMessageInfo[0].id
        })
      })
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
    if (location === "direct-message") {
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
              <ChatBubble />
            </div>
            <div className="chat-message-wrapper-direct">
              <div
                onClick={handleChatOptions}
                className="chat-options-icon-direct"
              >
                {theme === "dark" || theme === "system-default" ? (
                  <ChatOptionsArrowDark />
                ) : (
                  <ChatOptionsArrowLight />
                )}
              </div>
              <div className="message-container-direct">
                <div className="message">{message}</div>
                <div className="star-icon-and-time">
                  {star === "true" ? (
                    theme === "dark" || theme === "system-default" ? (
                      <StarIconDark />
                    ) : (
                      <StarIconLight />
                    )
                  ) : null}

                  <Time time={time} />
                </div>
              </div>
              <div className="message-reaction message-reaction-incoming"></div>
            </div>
            <div data-emojis className="emojis-incoming">
              <div className="emojis-incoming-content">
                <div onClick={showEmojiWrapper} className="emojis-button">
                  <EmojiButtonIncoming />
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
                      <MoreEmojisIcon />
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
    } else if (location === "starred-message") {
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
              <ChatBubble />
            </div>
            <div className="chat-message-wrapper-direct">
              <div
                onClick={handleChatOptions}
                className="chat-options-icon-direct"
              >
                {theme === "dark" || theme === "system-default" ? (
                  <ChatOptionsArrowDark />
                ) : (
                  <ChatOptionsArrowLight />
                )}
              </div>
              <div className="message-container-direct">
                <div className="message">{message}</div>
                <div className="star-icon-and-time">
                  {star === "true" ? (
                    theme === "dark" || theme === "system-default" ? (
                      <StarIconDark />
                    ) : (
                      <StarIconLight />
                    )
                  ) : null}

                  <Time time={time} />
                </div>
              </div>
              <div className="message-reaction message-reaction-incoming"></div>
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
    }
  } else if (origin === "outgoing") {
    if (location === "direct-message") {
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
                  <ChatBubble />
                </div>
                <div className="chat-message-wrapper-direct replied-ongoing-message">
                  <div
                    onClick={handleChatOptions}
                    className="chat-options-icon-direct-outgoing"
                  >
                    <ChatOptionsArrowDark />
                  </div>
                  {deleted === "true" ? (
                    <div className="deleted-message-container">
                      <div className="deleted-message-wrapper">
                        <div className="deleted-icon">
                          <DeletedIcon />
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
                          theme === "dark" ? (
                            <StarIconDark />
                          ) : (
                            <StarIconLight />
                          )
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
                      <EmojiButtonOutgoing />
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
                          <MoreEmojisIcon />
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
                <ChatBubble />
              </div>
              <div className="chat-message-wrapper-direct">
                <div
                  onClick={handleChatOptions}
                  className="chat-options-icon-direct-outgoing"
                >
                  {theme === "dark" || theme === "system-default" ? (
                    <ChatOptionsArrowDark />
                  ) : (
                    <ChatOptionsArrowLight />
                  )}
                </div>
                {deleted === "true" ? (
                  <div className="deleted-message-container">
                    <div className="deleted-message-wrapper">
                      <div className="deleted-icon">
                        <DeletedIcon />
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
                        theme === "dark" || theme === "system-default" ? (
                          <StarIconDark />
                        ) : (
                          <StarIconLight />
                        )
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
                      <EmojiButtonOutgoing />
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
                          <MoreEmojisIcon />
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
    } else if (location === "starred-message") {
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
                <div className="chat-bubble-arrow-outgoing-starred">
                  <ChatBubble />
                </div>
                <div className="chat-message-wrapper-direct replied-ongoing-message">
                  <div
                    onClick={handleChatOptions}
                    className="chat-options-icon-direct-outgoing"
                  >
                    {theme === "dark" || theme === "system-default" ? (
                      <ChatOptionsArrowDark />
                    ) : (
                      <ChatOptionsArrowLight />
                    )}
                  </div>
                  {deleted === "true" ? (
                    <div className="deleted-message-container">
                      <div className="deleted-message-wrapper">
                        <div className="deleted-icon">
                          <DeletedIcon />
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
                          theme === "dark" || theme === "system-default" ? (
                            <StarIconDark />
                          ) : (
                            <StarIconLight />
                          )
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
              <div className="chat-bubble-arrow-outgoing-starred">
                <ChatBubble />
              </div>
              <div className="chat-message-wrapper-direct">
                <div
                  onClick={handleChatOptions}
                  className="chat-options-icon-direct-outgoing"
                >
                  {theme === "dark" || theme === "system-default" ? (
                    <ChatOptionsArrowDark />
                  ) : (
                    <ChatOptionsArrowLight />
                  )}
                </div>
                {deleted === "true" ? (
                  <div className="deleted-message-container">
                    <div className="deleted-message-wrapper">
                      <div className="deleted-icon">
                        <DeletedIcon />
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
                        theme === "dark" || theme === "system default" ? (
                          <StarIconDark />
                        ) : (
                          <StarIconLight />
                        )
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
