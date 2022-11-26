import React, { useState, useRef } from "react"
import InputText from "../InputText/InputText"
import "./typeMessage.css"

export default function TypeMessage() {
  const [attach, setAttach] = useState("false")
  const attachItems = useRef()

  function handleAttachClick(e) {
    setAttach(prevAttach => {
      if (prevAttach === "false") return (prevAttach = "true")

      if (prevAttach === "true") return (prevAttach = "false")
    })
  }

  // document.addEventListener("click", e => {
  //   console.log(e.target)
  // })

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

  return (
    <div className="type-message-container">
      <div className="type-message-text-area">
        <div className="emoji-icon">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
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
                  <circle cx="26.5" cy="26.5" r="26.5" fill="#02A698"></circle>
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
