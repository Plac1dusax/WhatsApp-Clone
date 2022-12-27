import React, { useRef } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import SettingWithCheckbox from "../SettingWithCheckbox/SettingWithCheckbox"
import MiniSectionHeader from "../MiniSectionHeader/MiniSectionHeader"
import { v4 as uuidv4 } from "uuid"
import "./notifications.css"

export default function Notifications({
  notificationsActive,
  setNotificationsActive
}) {
  const notificationsSection = useRef()

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

  function handleNotificationsSectionVisibility() {
    if (!notificationsActive) {
      notificationsSection?.current?.classList?.remove("section-active")
      notificationsSection?.current?.classList?.add("section-deactivate")
    }

    if (notificationsActive) {
      notificationsSection?.current?.classList?.remove("section-deactivate")
      notificationsSection?.current?.classList?.add("section-active")
    }
  }

  handleNotificationsSectionVisibility()

  return (
    <div
      ref={notificationsSection}
      className="notifications-container section-deactivate"
    >
      <div className="notifications-header">
        <SectionHeader
          notificationsActive={notificationsActive}
          setNotificationsActive={setNotificationsActive}
          header={"Notifications"}
        />
      </div>
      <div className="notifications-body">
        <MiniSectionHeader text={"MESSAGES"} />
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
