import React, { useState, useRef } from "react"
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary"
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary"
import OptionWithRadioButton from "../OptionWithRadioButton/OptionWithRadioButton"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import { v4 as uuidv4 } from "uuid"
import "./customAlert.css"

export default function CustomAlert(props) {
  const {
    type,
    optionsList,
    header,
    buttonPrimary,
    buttonSecondary,
    buttonTertiary,
    messageHistory,
    setMessageHistory,
    themeActive,
    setThemeActive,
    theme,
    setTheme
  } = props
  const themeAlertContainer = useRef()
  const themeAlertOverlay = useRef()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  function handleThemeAlertVisibility() {
    const alertContainer = themeAlertContainer.current
    const alertOverlay = themeAlertOverlay.current

    if (themeActive && alertOverlay != null) {
      alertContainer?.classList?.remove("custom-alert-hide")
      alertContainer?.classList?.add("custom-alert-show")
      alertOverlay.style.display = "block"
    } else if (!themeActive && alertOverlay != null) {
      alertContainer?.classList?.remove("custom-alert-show")
      alertContainer?.classList?.add("custom-alert-hide")
      alertOverlay.style.display = "none"
    }
  }

  handleThemeAlertVisibility()

  if (type === "theme") {
    return (
      <>
        <div
          data-theme-overlay
          ref={themeAlertOverlay}
          className="overlay"
        ></div>
        <div ref={themeAlertContainer} className="custom-alert">
          <div className="custom-alert-header">
            <PrimaryHeaderText headerType={"alert"} text={header} />
          </div>
          <div className="options-list">
            {optionsList.map(option => {
              return (
                <OptionWithRadioButton
                  key={uuidv4()}
                  option={option.option}
                  value={option.value}
                  name={option.name}
                  id={option.id}
                  location={"theme"}
                  theme={theme}
                  setTheme={setTheme}
                  selectedTheme={selectedTheme}
                  setSelectedTheme={setSelectedTheme}
                />
              )
            })}
          </div>
          <div className="buttons-container">
            <ButtonSecondary
              location={"choose-theme"}
              themeActive={themeActive}
              setThemeActive={setThemeActive}
              buttonSecondary={buttonSecondary}
            />
            <ButtonPrimary
              location={"choose-theme"}
              buttonPrimary={buttonPrimary}
              setTheme={setTheme}
              selectedTheme={selectedTheme}
              themeActive={themeActive}
              setThemeActive={setThemeActive}
            />
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
            <ButtonSecondary
              messageHistory={messageHistory}
              setMessageHistory={setMessageHistory}
              buttonSecondary={buttonTertiary}
            />
            <ButtonSecondary
              messageHistory={messageHistory}
              setMessageHistory={setMessageHistory}
              buttonSecondary={buttonPrimary}
            />
            <ButtonSecondary
              messageHistory={messageHistory}
              setMessageHistory={setMessageHistory}
              buttonSecondary={buttonSecondary}
            />
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
            <ButtonSecondary
              messageHistory={messageHistory}
              setMessageHistory={setMessageHistory}
              buttonSecondary={buttonSecondary}
            />
            <ButtonPrimary
              messageHistory={messageHistory}
              setMessageHistory={setMessageHistory}
              buttonPrimary={buttonPrimary}
            />
          </div>
        </div>
      </>
    )
  }
}
