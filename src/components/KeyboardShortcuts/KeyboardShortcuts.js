import React, { useRef } from "react"
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

export default function KeyboardShortcuts(props) {
  const { keyboardShortcutsActive, setKeyboardShortcutsActive } = props
  const keyboardShortcutsContainer = useRef()
  const overlay = useRef()

  function handleKeyboardShortcutsVisibility() {
    if (!keyboardShortcutsActive) {
      keyboardShortcutsContainer?.current?.classList?.remove("alert-active")
      keyboardShortcutsContainer?.current?.classList?.add("alert-deactivate")
      overlay?.current?.classList?.remove("overlay-show")
      overlay?.current?.classList?.add("overlay-hide")
    }

    if (keyboardShortcutsActive) {
      keyboardShortcutsContainer?.current?.classList?.remove("alert-deactivate")
      keyboardShortcutsContainer?.current?.classList?.add("alert-active")
      overlay?.current?.classList?.remove("overlay-hide")
      overlay?.current?.classList?.add("overlay-show")
    }
  }

  handleKeyboardShortcutsVisibility()

  return (
    <>
      <div
        ref={overlay}
        className="overlay-keyboard-shortcuts overlay-hide"
      ></div>
      <div
        ref={keyboardShortcutsContainer}
        className="keyboard-shortcuts-container alert-deactivate"
      >
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
            <ButtonPrimary
              location={"keyboard-shortcuts"}
              keyboardShortcutsActive={keyboardShortcutsActive}
              setKeyboardShortcutsActive={setKeyboardShortcutsActive}
              buttonPrimary={"OK"}
            />
          </div>
        </div>
      </div>
    </>
  )
}
