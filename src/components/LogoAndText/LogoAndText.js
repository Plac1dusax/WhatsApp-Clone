import React from "react"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import "./logoAndText.css"

export default function LogoAndText({ logo, text }) {
  return (
    <div className="logo-and-text-container">
      <div className="logo">{logo}</div>
      <div className="text">
        <SecondaryHeaderText headerType={"chat"} text={text} />
      </div>
    </div>
  )
}
