import React from "react"
import "./keyboardShortcutKeys.css"

export default function KeyboardShortcutKeys({ keys }) {
  return keys.map(key => {
    return <div className="shortcut-key">{key}</div>
  })
}
