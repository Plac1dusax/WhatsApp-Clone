import React from "react"
import { ReactComponent as SectionHeaderArrowLeft } from "../../icons/section-header-arrow-left-icon.svg"
import { ReactComponent as MoreOptionsIcon } from "../../icons/more-options-button-icon.svg"
import "./sectionHeader.css"

export default function SectionHeader(props) {
  const {
    header,
    menu,
    archivedActive,
    setArchivedActive,
    communityTabActive,
    setCommunityTabActive,
    startCommunityActive,
    setStartCommunityActive,
    newChatActive,
    setNewChatActive,
    starredMessagesActive,
    setStarredMessagesActive,
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
    setProfileActive
  } = props

  function handleSectionVisibility() {
    switch (header) {
      case "Archived":
        setArchivedActive(!archivedActive)
        break
      case "Communities":
        setCommunityTabActive(!communityTabActive)
        break
      case "New community":
        setStartCommunityActive(!startCommunityActive)
        break
      case "New chat":
        setNewChatActive(!newChatActive)
        break
      case "Starred messages":
        setStarredMessagesActive(!starredMessagesActive)
        break
      case "Settings":
        setSettingsActive(!settingsActive)
        break
      case "Notifications":
        setNotificationsActive(!notificationsActive)
        break
      case "Privacy":
        setPrivacyActive(!privacyActive)
        break
      case "Set Chat Wallpaper":
        setChatWallpaperActive(!chatWallpaperActive)
        break
      case "Security":
        setSecurityActive(!securityActive)
        break
      case "Request Account Info":
        setRequestAccountInfoActive(!requestAccountInfoActive)
        break
      case "Profile":
        setProfileActive(!profileActive)
        break
    }
  }

  if (!menu) {
    return (
      <div className="section-header-nav">
        <div className="title-section">
          <div
            onClick={handleSectionVisibility}
            className="section-header-arrow-left"
          >
            <SectionHeaderArrowLeft />
          </div>
          <div className="section-header-title">{header}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="section-header-nav">
        <div className="title-section-menu">
          <div className="arrow-and-header">
            <div
              onClick={handleSectionVisibility}
              className="section-header-arrow-left"
            >
              <SectionHeaderArrowLeft />
            </div>
            <div className="section-header-title">{header}</div>
          </div>
          <div className="menu-icon">
            <MoreOptionsIcon />
          </div>
        </div>
      </div>
    )
  }
}
