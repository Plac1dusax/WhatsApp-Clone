import React from "react"
import Option from "../Option/Option"
import { v4 as uuidv4 } from "uuid"
import "./optionsMenu.css"

export default function OptionsMenu(props) {
  const {
    menuArray,
    startCommunityActive,
    setStartCommunityActive,
    starredMessagesActive,
    setStarredMessagesActive,
    settingsActive,
    setSettingsActive,
    chatWallpaperActive,
    setChatWallpaperActive
  } = props

  return (
    <div className="options-menu-container">
      {menuArray.map(e => {
        return (
          <Option
            key={uuidv4()}
            startCommunityActive={startCommunityActive}
            setStartCommunityActive={setStartCommunityActive}
            starredMessagesActive={starredMessagesActive}
            setStarredMessagesActive={setStarredMessagesActive}
            settingsActive={settingsActive}
            setSettingsActive={setSettingsActive}
            chatWallpaperActive={chatWallpaperActive}
            setChatWallpaperActive={setChatWallpaperActive}
            option={e}
          />
        )
      })}
    </div>
  )
}
