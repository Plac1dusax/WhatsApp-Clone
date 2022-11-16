import React from "react"
import "./optionWithRadioButton.css"

export default function OptionWithRadioButton(props) {
  const { option, value, name, id } = props

  return (
    <div className="option-with-radio-button-container">
      <input type={"radio"} id={id} name={name} value={value} />
      <label htmlFor={id}>{option}</label>
    </div>
  )
}
