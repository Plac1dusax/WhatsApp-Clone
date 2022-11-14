import React from "react"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import "./privacySettings.css"

export default function PrivacySettings({ primary, secondary, border }) {
  let style
  if (border) {
    style = {
      borderBottom: "1px solid var(--border-color-dark)"
    }
  } else {
    style = {
      borderBottom: "none"
    }
  }

  return (
    <div style={style} className="privacy-setting-container">
      <div className="privacy-setting-headers">
        <PrimaryHeaderText headerType={"setting-primary"} text={primary} />
        <SecondaryHeaderText
          headerType={"setting-secondary-light"}
          text={secondary}
        />
      </div>
      <svg viewBox="0 0 30 30" width="30" height="22">
        <path
          fill="currentColor"
          d="M11 21.212 17.35 15 11 8.65l1.932-1.932L21.215 15l-8.282 8.282L11 21.212z"
        ></path>
      </svg>
    </div>
  )
}
