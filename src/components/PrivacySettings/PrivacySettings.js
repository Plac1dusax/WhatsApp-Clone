import React from "react"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import { ReactComponent as SettingArrowRight } from "../../icons/settings-arrow-right.svg"
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
      <SettingArrowRight />
    </div>
  )
}
