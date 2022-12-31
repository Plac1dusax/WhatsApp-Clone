import React from "react"
import "./chatWallpaperColor.css"

export default function ChatWallpaperColor(props) {
  const {
    standard,
    backgroundColor,
    selected,
    wallpaperColor,
    setWallpaperColor
  } = props
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

  function handleBackgroundChange(e) {
    const hoveringBackground = e.target.style.backgroundColor
    setWallpaperColor(hoveringBackground)
  }

  function handleConvertBack(e) {}

  if (standard) {
    return (
      <div
        onMouseEnter={handleBackgroundChange}
        onMouseLeave={handleConvertBack}
        style={styles}
        className="chat-wallpaper-color standard"
      ></div>
    )
  } else {
    return (
      <div
        onMouseEnter={handleBackgroundChange}
        onMouseLeave={handleConvertBack}
        style={styles}
        className="chat-wallpaper-color"
      ></div>
    )
  }
}
