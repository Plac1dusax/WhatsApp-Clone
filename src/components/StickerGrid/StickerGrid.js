import React from "react"
import Sticker from "../Sticker/Sticker"
import { v4 as uuidv4 } from "uuid"
import { ReactComponent as PlusSignIcon } from "../../icons/plus-sign.svg"
import "./stickerGrid.css"

export default function StickerGrid({ stickerArray, create }) {
  function renderCreateStickerButton() {
    if (create) {
      return (
        <div className="create-new-sticker">
          <div className="create-new-sticker-content">
            <div className="plus-sign">
              <PlusSignIcon />
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
        return (
          <Sticker
            key={uuidv4()}
            stickername={sticker.stickerName}
            link={sticker.link}
          />
        )
      })}
    </div>
  )
}
