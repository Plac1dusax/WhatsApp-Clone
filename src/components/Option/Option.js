import React from "react"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import "./option.css"

export default function Option(props) {
  const {
    option,
    startCommunityActive,
    setStartCommunityActive,
    starredMessagesActive,
    setStarredMessagesActive,
    settingsActive,
    setSettingsActive,
    chatWallpaperActive,
    setChatWallpaperActive
  } = props

  function handleOptionButton() {
    switch (option) {
      case "New community":
        setStartCommunityActive(!startCommunityActive)
        break
      case "Starred messages":
        setStarredMessagesActive(!starredMessagesActive)
        break
      case "Settings":
        setSettingsActive(!settingsActive)
        break
      case "Chat wallpaper":
        setChatWallpaperActive(!chatWallpaperActive)
        break
    }
  }

  return (
    <div onClick={handleOptionButton} className="option-wrapper">
      <SecondaryHeaderText headerType={"option"} text={option} option={true} />
    </div>
  )
}
