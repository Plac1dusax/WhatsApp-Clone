import React from "react"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import "./option.css"

export default function Option({ option }) {
  return (
    <div className="option-wrapper">
      <SecondaryHeaderText headerType={"option"} text={option} />
    </div>
  )
}
