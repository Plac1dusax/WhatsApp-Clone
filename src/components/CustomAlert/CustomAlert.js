import React from "react"
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary"
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary"
import OptionWithRadioButton from "../OptionWithRadioButton/OptionWithRadioButton"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import "./customAlert.css"

export default function CustomAlert({
  type,
  optionsList,
  header,
  buttonPrimary,
  buttonSecondary,
  buttonTertiary
}) {
  if (type === "theme") {
    return (
      <>
        <div className="overlay"></div>
        <div className="custom-alert">
          <div className="custom-alert-header">
            <PrimaryHeaderText headerType={"alert"} text={header} />
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
            <ButtonSecondary buttonSecondary={buttonSecondary} />
            <ButtonPrimary buttonPrimary={buttonPrimary} />
          </div>
        </div>
      </>
    )
  } else if (type === "delete-message-outgoing") {
    return (
      <>
        <div className="overlay"></div>
        <div className="custom-alert">
          <div className="custom-alert-header">
            <SecondaryHeaderText headerType={"alert"} text={header} />
          </div>
          <div className="buttons-container-outgoing">
            <ButtonSecondary buttonSecondary={buttonTertiary} />
            <ButtonSecondary buttonSecondary={buttonPrimary} />
            <ButtonSecondary buttonSecondary={buttonSecondary} />
          </div>
        </div>
      </>
    )
  } else if (type === "delete-message-incoming") {
    return (
      <>
        <div className="overlay"></div>
        <div className="custom-alert">
          <div className="custom-alert-header">
            <SecondaryHeaderText headerType={"alert"} text={header} />
          </div>
          <div className="buttons-container">
            <ButtonSecondary buttonSecondary={buttonSecondary} />
            <ButtonPrimary buttonPrimary={buttonPrimary} />
          </div>
        </div>
      </>
    )
  }
}
