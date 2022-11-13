import React, { useState } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import SettingWithCheckbox from "../SettingWithCheckbox/SettingWithCheckbox"
import { v4 as uuidv4 } from "uuid"
import "./notifications.css"

export default function Notifications() {
  const notificationSettings = [
    {
      primaryText: "Message notifications",
      secondaryText: "Show notifications for new messages",
      relative: true,
      checked: false
    },
    {
      primaryText: "Show previews",
      hide: true,
      checked: true
    },
    {
      primaryText: "Show reaction notifications",
      hide: true,
      checked: true
    },
    {
      primaryText: "Sounds",
      secondaryText: "Play sounds for incoming messages",
      checked: true
    }
  ]

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <SectionHeader header={"Notifications"} />
      </div>
      <div className="notifications-body">
        <div className="messages">MESSAGES</div>
        {notificationSettings.map(setting => {
          return (
            <SettingWithCheckbox
              key={uuidv4()}
              primaryText={setting.primaryText}
              secondaryText={setting.secondaryText}
              hide={setting.hide}
              ischecked={setting.checked}
              relative={setting.relative}
            />
          )
        })}
      </div>
    </div>
  )
}
