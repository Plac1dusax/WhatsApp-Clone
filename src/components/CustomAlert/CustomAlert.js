import React from "react"
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary"
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary"
import OptionWithRadioButton from "../OptionWithRadioButton/OptionWithRadioButton"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import "./customAlert.css"

export default function CustomAlert({ optionsList }) {
  return (
    <div className="custom-alert-container">
      <div className="custom-alert-header">
        <PrimaryHeaderText headerType={"alert"} text={"Choose theme"} />
      </div>
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
      <div className="buttons-container">
        <ButtonSecondary buttonSecondary={"CANCEL"} />
        <ButtonPrimary buttonPrimary={"OK"} />
      </div>
    </div>
  )
}
