import React from "react"
import "./customCheckbox.css"

export default function CustomCheckbox() {
  return (
    <div className="checkbox-container">
      <input type={"checkbox"} id={"checkbox"} />
      <label htmlFor="checkbox"></label>
    </div>
  )
}
