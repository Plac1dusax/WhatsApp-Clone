import React, { useRef } from "react"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import SectionHeader from "../SectionHeader/SectionHeader"
import Setting from "../Setting/Setting"
import { v4 as uuidv4 } from "uuid"
import { ReactComponent as NotificationIcon } from "../../icons/notifications-icon.svg"
import { ReactComponent as PrivacyIcon } from "../../icons/privacy-icon.svg"
import { ReactComponent as SecurityIcon } from "../../icons/security-icon.svg"
import { ReactComponent as ThemeIcon } from "../../icons/theme-icon.svg"
import { ReactComponent as ChatWallpaperIcon } from "../../icons/chat-wallpaper-icon.svg"
import { ReactComponent as RequestAccountInfoIcon } from "../../icons/request-account-info-setting.svg"
import { ReactComponent as KeyboardShortcutsIcon } from "../../icons/keyboard-shortcuts-icon.svg"
import { ReactComponent as HelpIcon } from "../../icons/help-icon.svg"
import "./settings.css"

export default function Settings(props) {
  const {
    settingsActive,
    setSettingsActive,
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
    setThemeActive,
    wallpaperPreviewActive,
    setWallpaperPreviewActive
  } = props
  const settingsSection = useRef()

  function handleSettingsSectionVisibility() {
    if (!settingsActive) {
      settingsSection?.current?.classList?.remove("section-active")
      settingsSection?.current?.classList?.add("section-deactivate")
    }

    if (settingsActive) {
      settingsSection?.current?.classList?.remove("section-deactivate")
      settingsSection?.current?.classList?.add("section-active")
    }
  }

  handleSettingsSectionVisibility()

  function handleProfileClick() {
    setProfileActive(!profileActive)
  }

  return (
    <div ref={settingsSection} className="settings-wrapper section-deactivate">
      <div className="settings-header">
        <SectionHeader
          settingsActive={settingsActive}
          setSettingsActive={setSettingsActive}
          header={"Settings"}
        />
      </div>
      <div className="settings-body">
        <div onClick={handleProfileClick} className="profile">
          <ProfilePhoto
            navProfilePhoto={"settings"}
            url={
              "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            }
          />
          <div className="user-name-and-about">
            <PrimaryHeaderText headerType={"settings"} text={"User name"} />
            <SecondaryHeaderText headerType={"chat"} text={"About"} />
          </div>
        </div>
        <div className="settings-list">
          {settingsList.map(setting => {
            return (
              <Setting
                key={uuidv4()}
                svg={setting.svg}
                name={setting.name}
                notificationsActive={notificationsActive}
                setNotificationsActive={setNotificationsActive}
                privacyActive={privacyActive}
                setPrivacyActive={setPrivacyActive}
                chatWallpaperActive={chatWallpaperActive}
                setChatWallpaperActive={setChatWallpaperActive}
                securityActive={securityActive}
                setSecurityActive={setSecurityActive}
                requestAccountInfoActive={requestAccountInfoActive}
                setRequestAccountInfoActive={setRequestAccountInfoActive}
                profileActive={profileActive}
                setProfileActive={setProfileActive}
                keyboardShortcutsActive={keyboardShortcutsActive}
                setKeyboardShortcutsActive={setKeyboardShortcutsActive}
                themeActive={themeActive}
                setThemeActive={setThemeActive}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

const settingsList = [
  {
    svg: <NotificationIcon />,
    name: "Notifications"
  },
  {
    svg: <PrivacyIcon />,
    name: "Privacy"
  },
  {
    svg: <SecurityIcon />,
    name: "Security"
  },
  {
    svg: <ThemeIcon />,
    name: "Theme"
  },
  {
    svg: <ChatWallpaperIcon />,
    name: "Chat wallpaper"
  },
  {
    svg: <RequestAccountInfoIcon />,
    name: "Request Account Info"
  },
  {
    svg: <KeyboardShortcutsIcon />,
    name: "Keyboard shortcuts"
  },
  {
    svg: <HelpIcon />,
    name: "help"
  }
]
