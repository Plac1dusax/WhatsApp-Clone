import React, { useState, useRef } from "react"
import InputText from "../InputText/InputText"
import ReactionsContainer from "../ReactionsContainer/ReactionsContainer"
import "./typeMessage.css"

export default function TypeMessage() {
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

    gifsContainer.style.display = "none"
    emojisContainer.style.display = "block"

    gifIcon.style.color = "var(--default-icon-theme)"
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
    const emojiIcon = container.querySelector(".emoji-icon")
    const gifIcon = container.querySelector(".gif-icon")

    gifIcon.style.color = "var(--teal)"
    emojiIcon.style.color = "var(--default-icon-theme)"

    emojisContainer.style.display = "none"
    gifsContainer.style.display = "block"
  }
  return (
    <div onClick={changeState} className="type-message-container">
      <ReactionsContainer showReactions={showReactions} />
      <div className="type-message-text-area">
        <div className="icons-wrapper">
          <div
            onClick={handleCloseIconClick}
            icons={icons}
            className="close-icon"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="m19.1 17.2-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path>
            </svg>
          </div>
          <div
            onClick={handleEmojiIconClick}
            icons={icons}
            className="emoji-icon"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
              ></path>
            </svg>
          </div>
          <div onClick={handleGifIconClick} className="gif-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="m13.177 12.013-.001-.125v-1.053c0-.464 0-.827-.002-1.178a.723.723 0 0 0-.557-.7.715.715 0 0 0-.826.4c-.05.115-.072.253-.073.403-.003 1.065-.003 1.917-.002 3.834v.653c0 .074.003.136.009.195a.72.72 0 0 0 .57.619c.477.091.878-.242.881-.734.002-.454.003-.817.002-1.633l-.001-.681zm-3.21-.536a35.751 35.751 0 0 0-1.651-.003c-.263.005-.498.215-.565.48a.622.622 0 0 0 .276.7.833.833 0 0 0 .372.104c.179.007.32.008.649.005l.137-.001v.102c-.001.28-.001.396.003.546.001.044-.006.055-.047.081-.242.15-.518.235-.857.275-.767.091-1.466-.311-1.745-1.006a2.083 2.083 0 0 1-.117-1.08 1.64 1.64 0 0 1 1.847-1.41c.319.044.616.169.917.376.196.135.401.184.615.131a.692.692 0 0 0 .541-.562c.063-.315-.057-.579-.331-.766-.789-.542-1.701-.694-2.684-.482-2.009.433-2.978 2.537-2.173 4.378.483 1.105 1.389 1.685 2.658 1.771.803.054 1.561-.143 2.279-.579.318-.193.498-.461.508-.803.014-.52.015-1.046.001-1.578-.009-.362-.29-.669-.633-.679zM18 4.25H6A4.75 4.75 0 0 0 1.25 9v6A4.75 4.75 0 0 0 6 19.75h12A4.75 4.75 0 0 0 22.75 15V9A4.75 4.75 0 0 0 18 4.25zM21.25 15A3.25 3.25 0 0 1 18 18.25H6A3.25 3.25 0 0 1 2.75 15V9A3.25 3.25 0 0 1 6 5.75h12A3.25 3.25 0 0 1 21.25 9v6zm-2.869-6.018H15.3c-.544 0-.837.294-.837.839V14.309c0 .293.124.525.368.669.496.292 1.076-.059 1.086-.651.005-.285.006-.532.004-1.013v-.045l-.001-.46v-.052h1.096l1.053-.001a.667.667 0 0 0 .655-.478c.09-.298-.012-.607-.271-.757a.985.985 0 0 0-.468-.122 82.064 82.064 0 0 0-1.436-.006h-.05l-.523.001h-.047v-1.051h1.267l1.22-.001c.458-.001.768-.353.702-.799-.053-.338-.35-.56-.737-.561z"
              ></path>
            </svg>
          </div>
          <div className="sticker-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M21.799 10.183c-.002-.184-.003-.373-.008-.548-.02-.768-.065-1.348-.173-1.939a6.6 6.6 0 0 0-.624-1.87 6.24 6.24 0 0 0-1.171-1.594 6.301 6.301 0 0 0-1.614-1.159 6.722 6.722 0 0 0-1.887-.615c-.59-.106-1.174-.15-1.961-.171-.318-.008-3.607-.012-4.631 0-.798.02-1.383.064-1.975.17a6.783 6.783 0 0 0-1.888.616 6.326 6.326 0 0 0-2.785 2.753 6.658 6.658 0 0 0-.623 1.868c-.107.591-.152 1.186-.173 1.941-.008.277-.016 2.882-.016 2.882 0 .52.008 1.647.016 1.925.02.755.066 1.349.172 1.938.126.687.33 1.3.624 1.871.303.59.698 1.126 1.173 1.595a6.318 6.318 0 0 0 1.614 1.159 6.786 6.786 0 0 0 2.146.656c.479.068.833.087 1.633.108.035.001 2.118-.024 2.578-.035a6.873 6.873 0 0 0 4.487-1.811 210.877 210.877 0 0 0 2.928-2.737 6.857 6.857 0 0 0 2.097-4.528l.066-1.052.001-.668c.001-.023-.005-.738-.006-.755zm-3.195 5.92c-.79.757-1.784 1.684-2.906 2.716a5.356 5.356 0 0 1-2.044 1.154c.051-.143.116-.276.145-.433.042-.234.06-.461.067-.74.003-.105.009-.789.009-.789.013-.483.042-.865.107-1.22.069-.379.179-.709.336-1.016.16-.311.369-.595.621-.844.254-.252.542-.458.859-.617.314-.158.65-.268 1.037-.337a8.127 8.127 0 0 1 1.253-.106s.383.001.701-.003a4.91 4.91 0 0 0 .755-.066c.186-.034.348-.105.515-.169a5.35 5.35 0 0 1-1.455 2.47zm1.663-4.757a1.128 1.128 0 0 1-.615.859 1.304 1.304 0 0 1-.371.119 3.502 3.502 0 0 1-.52.043c-.309.004-.687.004-.687.004-.613.016-1.053.049-1.502.129a5.21 5.21 0 0 0-1.447.473 4.86 4.86 0 0 0-2.141 2.115 5.088 5.088 0 0 0-.479 1.434 9.376 9.376 0 0 0-.131 1.461s-.006.684-.008.777c-.006.208-.018.37-.043.511a1.154 1.154 0 0 1-.626.86c-.072.036-.168.063-.37.098-.027.005-.25.027-.448.031-.021 0-1.157.01-1.192.009-.742-.019-1.263-.046-1.668-.126a5.27 5.27 0 0 1-1.477-.479 4.823 4.823 0 0 1-2.127-2.1 5.141 5.141 0 0 1-.482-1.453c-.09-.495-.13-1.025-.149-1.71a36.545 36.545 0 0 1-.012-.847c-.003-.292.005-3.614.012-3.879.02-.685.061-1.214.151-1.712a5.12 5.12 0 0 1 .481-1.45c.231-.449.53-.856.892-1.213.363-.36.777-.657 1.233-.886a5.26 5.26 0 0 1 1.477-.479c.503-.09 1.022-.129 1.74-.149a342.03 342.03 0 0 1 4.561 0c.717.019 1.236.058 1.737.148a5.263 5.263 0 0 1 1.476.478 4.835 4.835 0 0 1 2.126 2.098c.228.441.385.913.482 1.453.091.499.131 1.013.15 1.712.008.271.014 1.098.014 1.235a2.935 2.935 0 0 1-.037.436z"
              ></path>
            </svg>
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
                  <svg width="53" height="53" viewBox="0 0 53 53" fill="none">
                    <circle
                      cx="26.5"
                      cy="26.5"
                      r="26.5"
                      fill="#02A698"
                    ></circle>
                    <path
                      opacity=".15"
                      d="M26.5 0C11.864 0 0 11.864 0 26.5h53C53 11.864 41.136 0 26.5 0Z"
                      fill="#111B21"
                    ></path>
                    <rect
                      x="15.705"
                      y="26.604"
                      width="5.941"
                      height="9.505"
                      rx="1.211"
                      fill="#fff"
                    ></rect>
                    <rect
                      x="24.021"
                      y="14.723"
                      width="5.941"
                      height="21.386"
                      rx="1.211"
                      fill="#fff"
                    ></rect>
                    <rect
                      x="32.338"
                      y="21.85"
                      width="5.941"
                      height="14.257"
                      rx="1.211"
                      fill="#fff"
                    ></rect>
                  </svg>
                </div>
                <div className="attach-item contact">
                  <svg viewBox="0 0 53 53" width="53" height="53">
                    <g clipPath="url(#contact-SVGID_2_)">
                      <path
                        fill="#0795DC"
                        d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
                      ></path>
                      <path
                        fill="#0EABF4"
                        d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
                      ></path>
                    </g>
                    <g fill="#F5F5F5">
                      <path
                        id="svg-contact"
                        d="M26.5 26.5A4.5 4.5 0 0 0 31 22a4.5 4.5 0 0 0-4.5-4.5A4.5 4.5 0 0 0 22 22a4.5 4.5 0 0 0 4.5 4.5Zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125c0 .619.506 1.125 1.125 1.125h15.75c.619 0 1.125-.506 1.125-1.125V33.25c0-2.992-5.996-4.5-9-4.5Z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="attach-item document">
                  <svg viewBox="0 0 53 53" width="53" height="53">
                    <defs>
                      <circle
                        id="document-SVGID_1_"
                        cx="26.5"
                        cy="26.5"
                        r="25.5"
                      ></circle>
                    </defs>
                    <g clipPath="url(#document-SVGID_2_)">
                      <path
                        fill="#5157AE"
                        d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
                      ></path>
                      <path
                        fill="#5F66CD"
                        d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
                      ></path>
                    </g>
                    <g fill="#F5F5F5">
                      <path
                        id="svg-document"
                        d="M29.09 17.09c-.38-.38-.89-.59-1.42-.59H20.5c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H32.5c1.1 0 2-.9 2-2V23.33c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM27.5 22.5V18l5.5 5.5h-4.5c-.55 0-1-.45-1-1z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="attach-item camera">
                  <svg viewBox="0 0 53 53" width="53" height="53">
                    <defs>
                      <circle
                        id="camera-SVGID_1_"
                        cx="26.5"
                        cy="26.5"
                        r="25.5"
                      ></circle>
                    </defs>
                    <g clipPath="url(#camera-SVGID_2_)">
                      <path
                        fill="#D3396D"
                        d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
                      ></path>
                      <path
                        fill="#EC407A"
                        d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
                      ></path>
                      <path fill="#D3396D" d="M17 24.5h15v9H17z"></path>
                    </g>
                    <g fill="#F5F5F5">
                      <path
                        id="svg-camera"
                        d="M27.795 17a3 3 0 0 1 2.405 1.206l.3.403a3 3 0 0 0 2.405 1.206H34.2a2.8 2.8 0 0 1 2.8 2.8V32a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4v-9.385a2.8 2.8 0 0 1 2.8-2.8h1.295a3 3 0 0 0 2.405-1.206l.3-.403A3 3 0 0 1 25.205 17h2.59ZM26.5 22.25a5.25 5.25 0 1 0 .001 10.501A5.25 5.25 0 0 0 26.5 22.25Zm0 1.75a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="attach-item sticker">
                  <svg width="53" height="53" viewBox="0 0 53 53" fill="none">
                    <g clipPath="url(#clip0_850:74884)">
                      <circle
                        cx="26.5"
                        cy="26.5"
                        r="26.5"
                        fill="#0063CB"
                      ></circle>
                      <path
                        d="M53 26.5C53 41.136 41.136 53 26.5 53S0 41.136 0 26.5h53Z"
                        fill="#0070E6"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36.002 22.17v4.32c-.24.321-.624.53-1.056.53H33.14a6.12 6.12 0 0 0-6.12 6.12v1.804c0 .434-.209.818-.532 1.058H22.17a5.17 5.17 0 0 1-5.17-5.17V22.17A5.17 5.17 0 0 1 22.17 17h8.662a5.17 5.17 0 0 1 5.17 5.17Zm-5.48 3.33.937-2.063 2.063-.937-2.063-.938-.937-2.062-.938 2.063-2.062.937 2.062.938.938 2.062Zm-7.022-3 1.406 3.094L28 27l-3.094 1.406L23.5 31.5l-1.406-3.094L19 27l3.094-1.406L23.5 22.5Z"
                        fill="#F7F7F7"
                      ></path>
                      <path
                        d="M34.946 28.52c.352 0 .69-.065 1-.183a3.87 3.87 0 0 1-1.078 2.088l-4.443 4.443a3.87 3.87 0 0 1-2.087 1.079 2.81 2.81 0 0 0 .184-1.003V33.14a4.62 4.62 0 0 1 4.62-4.62h1.804Z"
                        fill="#F7F7F7"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_850:74884">
                        <path fill="#fff" d="M0 0h53v53H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="attach-item photos-videos">
                  <svg viewBox="0 0 53 53" width="53" height="53">
                    <defs>
                      <circle
                        id="image-SVGID_1_"
                        cx="26.5"
                        cy="26.5"
                        r="25.5"
                      ></circle>
                    </defs>
                    <g clipPath="url(#image-SVGID_2_)">
                      <path
                        fill="#AC44CF"
                        d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"
                      ></path>
                      <path
                        fill="#BF59CF"
                        d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"
                      ></path>
                      <path fill="#AC44CF" d="M17 24.5h18v9H17z"></path>
                    </g>
                    <g fill="#F5F5F5">
                      <path
                        id="svg-image"
                        d="M18.318 18.25h16.364c.863 0 1.727.827 1.811 1.696l.007.137v12.834c0 .871-.82 1.741-1.682 1.826l-.136.007H18.318a1.83 1.83 0 0 1-1.812-1.684l-.006-.149V20.083c0-.87.82-1.741 1.682-1.826l.136-.007h16.364Zm5.081 8.22-3.781 5.044c-.269.355-.052.736.39.736h12.955c.442-.011.701-.402.421-.758l-2.682-3.449a.54.54 0 0 0-.841-.011l-2.262 2.727-3.339-4.3a.54.54 0 0 0-.861.011Zm8.351-5.22a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div onClick={handleAttachIcon} className="attach-icon">
                <svg
                  className="attach-icon"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.1"
                  x="0px"
                  y="0px"
                  enableBackground="new 0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="type-message">
          <InputText type={"dm"} />
        </div>
        <div className="microphone-icon">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
