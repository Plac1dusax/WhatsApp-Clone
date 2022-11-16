import React from "react"
import OptionWithRadioButton from "../OptionWithRadioButton/OptionWithRadioButton"
import "./customAlert.css"

export default function CustomAlert({ optionsList }) {
  return (
    <div className="custom-alert-container">
      <div className="options-list">
        {optionsList.map(option => {
          return (
            <OptionWithRadioButton
              option={option.option}
              value={option.value}
              name={option.name}
              id={option.id}
            />
          )
        })}
      </div>
    </div>
  )
}
