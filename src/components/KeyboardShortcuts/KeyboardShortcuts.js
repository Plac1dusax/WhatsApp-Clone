import React from "react"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import KeyboardShortcutsGridItem from "../KeyboardShortcutsGridItem/KeyboardShortcutsGridItem"
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary"
import "./keyboardShortcuts.css"

const keyboardShortcuts = [
  {
    shortcutName: "Mark as Unread",
    shortcutKeys: ["Ctrl", "Alt", "Shift", "U"]
  },
  {
    shortcutName: "Mute",
    shortcutKeys: ["Ctrl", "Alt", "Shift", "M"]
  },
  {
    shortcutName: "Archive Chat",
    shortcutKeys: ["Ctrl", "Alt", "Shift", "E"]
  },
  {
    shortcutName: "Delete Chat",
    shortcutKeys: ["Ctrl", "Alt", "Backspace"]
  },
  {
    shortcutName: "Pin Chat",
    shortcutKeys: ["Ctrl", "Alt", "Shift", "P"]
  },
  {
    shortcutName: "Search",
    shortcutKeys: ["Ctrl", "Alt", "/"]
  },
  {
    shortcutName: "Search Chat",
    shortcutKeys: ["Ctrl", "Alt", "Shift", "F"]
  },
  {
    shortcutName: "New Chat",
    shortcutKeys: ["Ctrl", "Alt", "N"]
  },
  {
    shortcutName: "Next Chat",
    shortcutKeys: ["Ctrl", "Alt", "Tab"]
  },
  {
    shortcutName: "Previous Chat",
    shortcutKeys: ["Ctrl", "Alt", "Shift", "Tab"]
  },
  {
    shortcutName: "Close Chat",
    shortcutKeys: ["Escape"]
  },
  {
    shortcutName: "New Group",
    shortcutKeys: ["Ctrl", "Alt", "Shift", "N"]
  },
  {
    shortcutName: "Profile And About",
    shortcutKeys: ["Ctrl", "Alt", "P"]
  },
  {
    shortcutName: "Increase Speed of Selected Voice Message",
    shortcutKeys: ["Shift", "."]
  },
  {
    shortcutName: "Decrease Speed of Selected Voice Message",
    shortcutKeys: ["Shift", ","]
  },
  {
    shortcutName: "Settings",
    shortcutKeys: ["Ctrl", "Alt", ","]
  },
  {
    shortcutName: "Emoji Panel",
    shortcutKeys: ["Ctrl", "Alt", "E"]
  },
  {
    shortcutName: "Gif Panel",
    shortcutKeys: ["Ctrl", "Alt", "E"]
  },
  {
    shortcutName: "Sticker Panel",
    shortcutKeys: ["Ctrl", "Alt", "S"]
  },
  {
    shortcutName: "Extended Search",
    shortcutKeys: ["Alt", "K"]
  }
]

export default function KeyboardShortcuts() {
  return (
    <>
      <div className="overlay-keyboard-shortcuts"></div>
      <div className="keyboard-shortcuts-container">
        <div className="keyboard-shortcuts-header">
          <PrimaryHeaderText
            headerType={"keyboard-shortcuts"}
            text={"Keyboard shortcuts"}
          />
        </div>
        <div className="keyboard-shortcuts-body">
          <div className="shortcuts-grid">
            <KeyboardShortcutsGridItem keyboardShortcuts={keyboardShortcuts} />
          </div>
          <div className="button">
            <ButtonPrimary buttonPrimary={"OK"} />
          </div>
        </div>
      </div>
    </>
  )
}
