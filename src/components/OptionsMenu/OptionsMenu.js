import React from "react"
import Option from "../Option/Option"
import { v4 as uuidv4 } from "uuid"
import "./optionsMenu.css"

export default function OptionsMenu({ menuArray }) {
  return (
    <div className="options-menu-container">
      {menuArray.map(e => {
        return <Option key={uuidv4()} option={e} />
      })}
    </div>
  )
}
