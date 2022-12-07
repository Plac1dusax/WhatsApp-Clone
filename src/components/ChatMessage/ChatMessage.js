import React from "react"
import Time from "../Time/Time"
import MessageInfo from "../MessageInfo/MessageInfo"
import Emoji from "../Emoji/Emoji"
import ReactionEmojiContainer from "../ReactionEmojiContainer/ReactionEmojiContainer"
import "./chatMessage.css"

export default function ChatMessage({ reply, origin, message, starred }) {
  let currentColor = "var(--star-icon)"

  function handleEmojiIconClick(e) {
    handleIncomingMessageReaction(e)
    handleOutgoingMessageReaction(e)

    if (e.target.matches(".more-emojis-icon-wrapper")) {
      handleEmojiGrid(e)
    }
  }

  function handleIncomingMessageReaction(e) {
    if (e.target.matches(".incoming-message-reaction-icon")) {
      const container = e.currentTarget.closest(".direct-message-body")
      const messageContainer = e.target.closest(
        ".chat-message-container-incoming"
      )
      const reactionsWrapper = messageContainer.querySelector(
        ".emoji-reactions-wrapper"
      )
      const allReactionWrappers = document.querySelectorAll(
        ".emoji-reactions-wrapper"
      )

      allReactionWrappers.forEach(wrapper => {
        if (wrapper.classList.contains("show-wrapper-bottom-incoming")) {
          wrapper.classList.remove("show-wrapper-bottom-incoming")
        } else if (wrapper.classList.contains("show-wrapper-top-incoming")) {
          wrapper.classList.remove("show-wrapper-top-incoming")
        }
      })

      let bounds = container.getBoundingClientRect()
      let y = e.clientY - bounds.top

      if (y <= 109) {
        reactionsWrapper.classList.add("show-wrapper-bottom-incoming")
        reactionsWrapper.classList.add("active-reaction")
      } else if (y > 109) {
        reactionsWrapper.classList.add("show-wrapper-top-incoming")
        reactionsWrapper.classList.add("active-reaction")
      }
    }
  }

  function handleOutgoingMessageReaction(e) {
    if (e.target.matches(".outgoing-message-reaction-icon")) {
      const container = e.currentTarget.closest(".direct-message-body")
      const messageContainer = e.target.closest(
        ".chat-message-container-outgoing"
      )
      const reactionsWrapper = messageContainer.querySelector(
        ".emoji-reactions-wrapper"
      )
      const allReactionWrappers = document.querySelectorAll(
        ".emoji-reactions-wrapper"
      )

      allReactionWrappers.forEach(wrapper => {
        if (wrapper.classList.contains("show-wrapper-bottom-incoming")) {
          wrapper.classList.remove("show-wrapper-bottom-incoming")
        } else if (wrapper.classList.contains("show-wrapper-top-incoming")) {
          wrapper.classList.remove("show-wrapper-top-incoming")
        }
      })

      let bounds = container.getBoundingClientRect()
      let y = e.clientY - bounds.top

      if (y <= 109) {
        reactionsWrapper.classList.add("show-wrapper-bottom-incoming")
        reactionsWrapper.classList.add("active-reaction")
      } else if (y > 109) {
        reactionsWrapper.classList.add("show-wrapper-top-incoming")
        reactionsWrapper.classList.add("active-reaction")
      }
    }
  }

  function handleEmojiGrid(e) {}

  if (origin === "incoming") {
    return (
      <div className="chat-message-container-incoming">
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
            <div className="chat-options-icon-direct">
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
                {starred === "true" ? (
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

                <Time time={"22:50"} />
              </div>
            </div>
          </div>
          <div onClick={handleEmojiIconClick} className="emojis-incoming">
            <div className="emojis-incoming-content">
              <div className="show-emojis-button">
                <svg
                  viewBox="0 0 15 15"
                  width="15"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  className="incoming-message-reaction-icon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="emoji-reactions-wrapper">
                <Emoji emojiName={"thumb up"} emoji={"👍"} />
                <Emoji emojiName={"red heart"} emoji={"❤️"} />
                <Emoji emojiName={"cry from laughing"} emoji={"😂"} />
                <Emoji emojiName={"surprised"} emoji={"😮"} />
                <Emoji emojiName={"sad"} emoji={"😢"} />
                <Emoji emojiName={"high five"} emoji={"🙏"} />
                <div className="more-emojis-button">
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
            <div className="emojis-list">
              <ReactionEmojiContainer type={"reaction"} />
            </div>
          </div>
        </div>
      </div>
    )
  } else if (origin === "outgoing") {
    return (
      <div className="chat-message-container-outgoing">
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
            <div className="chat-options-icon-direct-outgoing">
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
                {starred === "true" ? (
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

                <Time time={"22:50"} />
                <div className="message-status">
                  <MessageInfo info={"seen"} />
                </div>
              </div>
            </div>
          </div>
          <div onClick={handleEmojiIconClick} className="emojis-outgoing">
            <div className="emojis-outgoing-content">
              <div className="show-emojis-button">
                <svg
                  viewBox="0 0 15 15"
                  width="15"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  className="outgoing-message-reaction-icon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="emoji-reactions-wrapper">
                <Emoji emojiName={"thumb up"} emoji={"👍"} />
                <Emoji emojiName={"red heart"} emoji={"❤️"} />
                <Emoji emojiName={"cry from laughing"} emoji={"😂"} />
                <Emoji emojiName={"surprised"} emoji={"😮"} />
                <Emoji emojiName={"sad"} emoji={"😢"} />
                <Emoji emojiName={"high five"} emoji={"🙏"} />
                <div className="more-emojis-button">
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
            <div className="emojis-list">
              <ReactionEmojiContainer type={"reaction"} />
            </div>
          </div>
        </div>
      </div>
    )
  } else if (reply) {
    return (
      <div className="chat-message-container">
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
        <div className="chat-message-wrapper">
          <div className="replied-message-wrapper">
            <div className="chat-message-header">
              <div className="user-name">Random name</div>
              <div className="chat-options-icon">
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
                    fill="currentColor"
                    d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="replied-message-container">
              <div className="replied-message">
                Random message from random friend
              </div>
            </div>
          </div>
          <div className="message-container">
            <div className="message">
              Random message from another random friend
            </div>
            <div className="star-icon-and-time">
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
              <Time time={"22:50"} />
            </div>
          </div>
        </div>
      </div>
    )
  } else if (!reply) {
    return (
      <div className="chat-message-container-direct">
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
          <div className="chat-options-icon-direct">
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
            <div className="message">
              Random message from another random friend
            </div>
            <div className="star-icon-and-time">
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
              <Time time={"22:50"} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
