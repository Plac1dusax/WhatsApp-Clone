import React from "react"
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
    setRequestAccountInfoActive
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
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
              ></path>
            </svg>
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
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                version="1.1"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
                ></path>
              </svg>
            </div>
            <div className="section-header-title">{header}</div>
          </div>
          <div className="menu-icon">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}
