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

export default function Theme() {
  return (
    <>
      <div className="theme-container">
        <CustomAlert
          optionsList={optionsList}
          header={"Choose theme"}
          buttonPrimary={"OK"}
          buttonSecondary={"CANCEL"}
        />
      </div>
    </>
  )
}
