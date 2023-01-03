import React from "react"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import "./setting.css"

export default function Setting(props) {
  const {
    svg,
    name,
    notificationsActive,
    setNotificationsActive,
    privacyActive,
    setPrivacyActive,
    chatWallpaperActive,
    setChatWallpaperActive,
    securityActive,
    setSecurityActive,
    requestAccountInfoActive,
    setRequestAccountInfoActive,
    profileActive,
    setProfileActive,
    keyboardShortcutsActive,
    setKeyboardShortcutsActive,
    themeActive,
    setThemeActive
  } = props

  function handleSetting(e) {
    switch (name) {
      case "Notifications":
        setNotificationsActive(!notificationsActive)
        break
      case "Privacy":
        setPrivacyActive(!privacyActive)
        break
      case "Chat wallpaper":
        setChatWallpaperActive(!chatWallpaperActive)
        break
      case "Security":
        setSecurityActive(!securityActive)
        break
      case "Request Account Info":
        setRequestAccountInfoActive(!requestAccountInfoActive)
        break
      case "Keyboard shortcuts":
        setKeyboardShortcutsActive(!keyboardShortcutsActive)
        break
      case "Theme":
        setThemeActive(!themeActive)
        break
    }
  }

  return (
    <div onClick={handleSetting} className="setting-wrapper">
      <div className="setting-svg">{svg}</div>
      <PrimaryHeaderText headerType={"chat"} text={name} />
    </div>
  )
}
