import React from "react"
import { v4 as uuidv4 } from "uuid"
import "./keyboardShortcutKeys.css"

export default function KeyboardShortcutKeys({ keys }) {
  return keys.map(key => {
    return (
      <div key={uuidv4()} className="shortcut-key">
        {key}
      </div>
    )
  })
}
