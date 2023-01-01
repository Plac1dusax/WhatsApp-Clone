import React, { useState, useEffect } from "react"
import "./chatWallpaperColor.css"

export default function ChatWallpaperColor(props) {
  const {
    standard,
    backgroundColor,
    selected,
    wallpaperColor,
    setWallpaperColor,
    theme,
    backgroundsDark,
    backgroundsLight,
    isWallpaperHovering,
    setIsWallpaperHovering,
    selectedWallpaper,
    setSelectedWallpaper
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

  let selectedBackground = document.querySelector("[data-selected]")

  function handleBackgroundChange(e) {
    if (theme === "dark" || theme === "system default") {
      backgroundsDark.filter(background => {
        if (background.backgroundColor === e.target.style.backgroundColor) {
          setIsWallpaperHovering(!isWallpaperHovering)
          setSelectedWallpaper(e.target.style.backgroundColor)
          return (background.selected = true)
        } else {
          return (background.selected = false)
        }
      })
    } else if (theme === "light") {
      backgroundsLight.filter(background => {
        if (background.backgroundColor === e.target.style.backgroundColor) {
          setIsWallpaperHovering(!isWallpaperHovering)
          setSelectedWallpaper(e.target.style.backgroundColor)
          return (background.selected = true)
        } else {
          return (background.selected = false)
        }
      })
    }
  }

  function handleBackgroundHover(e) {
    setWallpaperColor(e.target.style.backgroundColor)
    setIsWallpaperHovering(!isWallpaperHovering)
  }

  function handleBackgroundHoverExit(e) {
    setWallpaperColor(selectedWallpaper)
    setIsWallpaperHovering(!isWallpaperHovering)
  }

  if (standard) {
    return (
      <div
        onClick={handleBackgroundChange}
        onMouseEnter={handleBackgroundHover}
        onMouseLeave={handleBackgroundHoverExit}
        style={styles}
        className="chat-wallpaper-color standard"
        data-selected={selected ? true : null}
      ></div>
    )
  } else {
    return (
      <div
        onClick={handleBackgroundChange}
        onMouseEnter={handleBackgroundHover}
        onMouseLeave={handleBackgroundHoverExit}
        style={styles}
        className="chat-wallpaper-color"
        data-selected={selected ? true : null}
      ></div>
    )
  }
}
