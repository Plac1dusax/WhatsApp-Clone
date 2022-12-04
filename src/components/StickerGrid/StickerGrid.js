import React from "react"
import { v4 as uuidv4 } from "uuid"
import "./stickerGrid.css"

export default function StickerGrid({ stickerArray, create }) {
  function renderCreateStickerButton() {
    if (create) {
      return (
        <div className="create-new-sticker">
          <div className="create-new-sticker-content">
            <div className="plus-sign">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
                shapeRendering="crispEdges"
              >
                <path
                  fill="currentColor"
                  d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"
                ></path>
              </svg>
            </div>
            <div className="create-button-text">Create</div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="sticker-grid">
      {renderCreateStickerButton()}
      {stickerArray.map(sticker => {
        return <img className="sticker-img" key={uuidv4()} src={sticker.link} />
      })}
    </div>
  )
}
