import React from "react"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import "./setting.css"

export default function Setting({ svg, name }) {
  return (
    <div className="setting-wrapper">
      <div
        className="setting-svg"
        dangerouslySetInnerHTML={{ __html: svg }}
      ></div>
      <PrimaryHeaderText headerType={"chat"} text={name} />
    </div>
  )
}
