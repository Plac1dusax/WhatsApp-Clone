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

const buttonNames = [
  {
    buttonPrimary: "OK"
  },
  {
    buttonSecondary: "CANCEL"
  }
]

export default function Theme() {
  return (
    <>
      <div className="overlay"></div>
      <div className="theme-container">
        <CustomAlert optionsList={optionsList} />
      </div>
    </>
  )
}
