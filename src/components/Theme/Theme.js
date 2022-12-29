import React from "react"
import CustomAlert from "../CustomAlert/CustomAlert"
import "./theme.css"

const optionsList = [
  {
    option: "Light",
    value: "light",
    name: "light",
    id: "light"
  },
  {
    option: "Dark",
    value: "dark",
    name: "dark",
    id: "dark"
  },
  {
    option: "System default",
    value: "system default",
    name: "system default",
    id: "system default"
  }
]

export default function Theme(props) {
  const { themeActive, setThemeActive, theme, setTheme } = props

  return (
    <>
      <div className="theme-container">
        <CustomAlert
          type={"theme"}
          optionsList={optionsList}
          header={"Choose theme"}
          buttonPrimary={"OK"}
          buttonSecondary={"CANCEL"}
          themeActive={themeActive}
          setThemeActive={setThemeActive}
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </>
  )
}
