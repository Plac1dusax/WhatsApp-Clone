import React from "react"
import "./optionWithRadioButton.css"

export default function OptionWithRadioButton(props) {
  const {
    option,
    value,
    name,
    id,
    location,
    theme,
    setTheme,
    selectedTheme,
    setSelectedTheme
  } = props

  function handleCheckBoxes(e) {
    if (location === "theme") {
      const parentContainer = e.target.closest(".options-list")
      const checkboxes = [...parentContainer.querySelectorAll("input")]
      const buttonValue = e.target.getAttribute("value")

      checkboxes.map(checkbox => {
        checkbox.checked = false
      })

      e.target.checked = true

      buttonValue && setSelectedTheme(buttonValue)
    }
  }

  return (
    <div
      onChange={handleCheckBoxes}
      className="option-with-radio-button-container"
    >
      <input
        type={"radio"}
        id={id}
        name={name}
        value={value}
        defaultChecked={value === selectedTheme ? true : false}
      />
      <label htmlFor={id}>{option}</label>
    </div>
  )
}
