import React from "react"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import KeyboardShortcutKeys from "../KeyboardShortcutKeys/KeyboardShortcutKeys"
import { v4 as uuidv4 } from "uuid"
import "./keyboardShortcutsGridItem.css"

export default function KeyboardShortcutsGridItem({ keyboardShortcuts }) {
  return keyboardShortcuts.map(shortcut => {
    return (
      <div key={uuidv4()} className="keyboard-shortcut-grid-item-container">
        <PrimaryHeaderText
          headerType={"keyboard-shortcuts-key"}
          text={shortcut.shortcutName}
        />
        <div className="shortcut-keys-wrapper">
          <KeyboardShortcutKeys keys={shortcut.shortcutKeys} />
        </div>
      </div>
    )
  })
}
