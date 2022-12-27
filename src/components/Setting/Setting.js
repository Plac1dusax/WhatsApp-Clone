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
    setProfileActive
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
    }
  }

  return (
    <div onClick={handleSetting} className="setting-wrapper">
      <div
        className="setting-svg"
        dangerouslySetInnerHTML={{ __html: svg }}
      ></div>
      <PrimaryHeaderText headerType={"chat"} text={name} />
    </div>
  )
}
