import React, { useRef } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import MiniSectionHeader from "../MiniSectionHeader/MiniSectionHeader"
import PrivacySettings from "../PrivacySettings/PrivacySettings"
import SettingWithCheckbox from "../SettingWithCheckbox/SettingWithCheckbox"
import { v4 as uuidv4 } from "uuid"
import "./privacy.css"

export default function Privacy(props) {
  const { privacyActive, setPrivacyActive } = props
  const privacySection = useRef()

  const personalSettings = [
    {
      primary: "Last seen and online",
      secondary: "Nobody"
    },
    {
      primary: "Profile photo",
      secondary: "My contacts"
    },
    {
      primary: "About",
      secondary: "My contacts"
    }
  ]

  const groupSettings = [
    {
      primary: "Groups",
      secondary: "Everyone"
    },
    {
      primary: "Blocked contacts",
      secondary: "0"
    }
  ]

  function handlePrivacySectionVisibility() {
    if (!privacyActive) {
      privacySection?.current?.classList?.remove("section-active")
      privacySection?.current?.classList?.add("section-deactivate")
    }

    if (privacyActive) {
      privacySection?.current?.classList?.remove("section-deactivate")
      privacySection?.current?.classList?.add("section-active")
    }
  }

  handlePrivacySectionVisibility()

  return (
    <div ref={privacySection} className="privacy-container section-deactivate">
      <div className="privacy-header">
        <SectionHeader
          privacyActive={privacyActive}
          setPrivacyActive={setPrivacyActive}
          header={"Privacy"}
        />
      </div>
      <div className="privacy-body">
        <div className="personal-privacy-settings">
          <MiniSectionHeader text={"Who can see my personal info"} />
          {personalSettings.map(setting => {
            return (
              <PrivacySettings
                key={uuidv4()}
                primary={setting.primary}
                secondary={setting.secondary}
                border={true}
              />
            )
          })}
          <SettingWithCheckbox
            primaryText={"Read receipts"}
            secondaryText={
              "If turned off, you won't send or receive Read receipts. Read receipts are always sent for group chats."
            }
          />
        </div>
        <div className="disappearing-messages">
          <MiniSectionHeader text={"Disappearing messages"} />
          <PrivacySettings
            primary={"Default message timer"}
            secondary={"Off"}
          />
        </div>
        <div className="group-settings">
          {groupSettings.map((setting, index, array) => {
            if (index + 1 === array.length) {
              return (
                <PrivacySettings
                  key={uuidv4()}
                  primary={setting.primary}
                  secondary={setting.secondary}
                  border={false}
                />
              )
            } else {
              return (
                <PrivacySettings
                  key={uuidv4()}
                  primary={setting.primary}
                  secondary={setting.secondary}
                  border={true}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
