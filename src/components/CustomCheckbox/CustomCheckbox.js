import React, { useState } from "react"
import { CheckContext } from "../Notifications/Notifications"
import "./customCheckbox.css"

export default function CustomCheckbox({ ischecked }) {
  const [checked, setChecked] = useState(ischecked)

  function handleClick(e) {
    if (ischecked) {
      setChecked(!checked)
      handleHiddenElements(e)
    } else {
      setChecked(!checked)
      handleHiddenElements(e)
    }
  }

  function handleHiddenElements(e) {
    const relativeElement = e.target.closest(".setting-with-checkbox-setting")
    const checkbox = relativeElement.querySelector("#checkbox").checked
    const elements = [
      ...document.querySelectorAll(".setting-with-checkbox-setting")
    ]
    const hiddenElements = elements.filter(
      element => element.getAttribute("hide") === "1"
    )

    if (relativeElement.getAttribute("relative") === "1" && checkbox) {
      relativeElement.style.borderBottom = "1px solid var(--border-color-dark)"
      hiddenElements.forEach(element => {
        element.classList.remove("hide")
      })
    } else if (relativeElement.getAttribute("relative") === "1" && !checkbox) {
      relativeElement.style.borderBottom = "none"
      hiddenElements.forEach(element => {
        element.classList.add("hide")
      })
    }
  }

  return (
    <div className="checkbox-container">
      <input
        onChange={handleClick}
        type={"checkbox"}
        id={"checkbox"}
        checked={checked}
      />
      <label htmlFor="checkbox"></label>
    </div>
  )
}
