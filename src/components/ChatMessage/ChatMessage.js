import React from "react"
import Time from "../Time/Time"
import MessageInfo from "../MessageInfo/MessageInfo"
import "./chatMessage.css"

export default function ChatMessage({ reply, origin, message, starred }) {
  let currentColor = "var(--star-icon)"

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
          <div className="emojis-incoming">
            <svg
              viewBox="0 0 15 15"
              width="15"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z"
                fill="currentColor"
              ></path>
            </svg>
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
                <div className="message-status">
                  <MessageInfo info={"seen"} />
                </div>
              </div>
            </div>
          </div>
          <div className="emojis-outgoing">
            <svg
              viewBox="0 0 15 15"
              width="15"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z"
                fill="currentColor"
              ></path>
            </svg>
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
