import React from "react"
import Time from "../Time/Time"
import MessageInfo from "../MessageInfo/MessageInfo"
import "./chatMessage.css"

export default function ChatMessage({ reply, origin, message, starred }) {
  let currentColor = "var(--star-icon)"

  console.log(typeof starred)

  if (origin === "incoming") {
    return (
      <div className="chat-message-container-incoming">
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
      </div>
    )
  } else if (origin === "outgoing") {
    return (
      <div className="chat-message-container-outgoing">
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
