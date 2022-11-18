import React from "react"
import "./chatWallpaperColor.css"

export default function ChatWallpaperColor(props) {
  const { standard, backgroundColor, selected } = props
  let styles = {}

  if (selected) {
    styles = {
      width: "74px",
      height: "74px",
      backgroundColor: backgroundColor,
      border: "3px solid var(--wallpaper-active)"
    }
  } else if (!selected) {
    styles = {
      width: "74px",
      height: "74px",
      backgroundColor: backgroundColor
    }
  }

  if (standard) {
    return <div style={styles} className="chat-wallpaper-color standard"></div>
  } else {
    return <div style={styles} className="chat-wallpaper-color "></div>
  }
}
