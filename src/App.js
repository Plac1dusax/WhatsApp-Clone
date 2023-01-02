import React, { useState, useEffect } from "react"
import "./app.css"
import FriendsListSection from "./components/FriendsListSection/FriendsListSection"
import ChatSection from "./components/ChatSection/ChatSection"
import ArchivedSection from "./components/ArchivedSection/ArchivedSection"
import CommunitiesSection from "./components/CommunitiesSection/CommunitiesSection"
import StartCommunity from "./components/StartCommunity/StartCommunity"
import NewChat from "./components/NewChat/NewChat"
import Profile from "./components/Profile/Profile"
import Settings from "./components/Settings/Settings"
import Notifications from "./components/Notifications/Notifications"
import Privacy from "./components/Privacy/Privacy"
import Security from "./components/Security/Security"
import Theme from "./components/Theme/Theme"
import ChatWallpaper from "./components/ChatWallpaper/ChatWallpaper"
import RequestAccountInfo from "./components/RequestAccountInfo/RequestAccountInfo"
import KeyboardShortcuts from "./components/KeyboardShortcuts/KeyboardShortcuts"
import StarredMessages from "./components/StarredMessages/StarredMessages"
import DirectMessage from "./components/DirectMessage/DirectMessage"
import chatHistory from "./chatHistory.json"
import WallpaperPreview from "./components/WallpaperPreview/WallpaperPreview"

export const DatabaseContext = React.createContext()

function App() {
  const [database, setDatabase] = useState([...chatHistory])
  const [messageHistory, setMessageHistory] = useState([...database])
  const [userId, setUserId] = useState(null)
  const [archivedActive, setArchivedActive] = useState(false)
  const [communityTabActive, setCommunityTabActive] = useState(false)
  const [startCommunityActive, setStartCommunityActive] = useState(false)
  const [newChatActive, setNewChatActive] = useState(false)
  const [starredMessagesActive, setStarredMessagesActive] = useState(false)
  const [settingsActive, setSettingsActive] = useState(false)
  const [notificationsActive, setNotificationsActive] = useState(false)
  const [privacyActive, setPrivacyActive] = useState(false)
  const [chatWallpaperActive, setChatWallpaperActive] = useState(false)
  const [securityActive, setSecurityActive] = useState(false)
  const [requestAccountInfoActive, setRequestAccountInfoActive] =
    useState(false)
  const [profileActive, setProfileActive] = useState(false)
  const [keyboardShortcutsActive, setKeyboardShortcutsActive] = useState(false)
  const [themeActive, setThemeActive] = useState(false)
  const [theme, setTheme] = useState("dark")
  const [wallpaperColor, setWallpaperColor] = useState("#0b141a")
  const [isWallpaperHovering, setIsWallpaperHovering] = useState(false)
  const [selectedWallpaper, setSelectedWallpaper] = useState(
    "var(--default-chat-wallpaper-dark)"
  )
  const [doodles, setDoodles] = useState(true)
  const [starredMessage, setStarredMessage] = useState([])
  const value = [database, setDatabase, userId, setUserId]
  const root = document.querySelector(":root")

  useEffect(() => {
    if (theme === "light") {
      handleLightTheme()
    } else if (theme === "dark" || theme === "system default") {
      handleDarkTheme()
    }
  }, [theme])

  function handleLightTheme() {
    root.style.setProperty("--primary-theme-color-dark", "#fff")
    root.style.setProperty("--navbar-theme-color-dark", "#f0f2f5")
    root.style.setProperty("--primary-header-text-dark", "#111b21")
    root.style.setProperty("--secondary-header-text-dark", "#667781")
    root.style.setProperty("--chat-section-dark", "#fff")
    root.style.setProperty("--option-menu-background", "#fff")
    root.style.setProperty("--option-hover-color", "#F5F6F6")
    root.style.setProperty("--primary-nav-btn-color-dark", "#54656f")
    root.style.setProperty("--primary-input-text-color", "#3b4a54")
    root.style.setProperty("--chat-active", "#f0f2f5")
    root.style.setProperty("--section-header-background", "#008069")
    root.style.setProperty("--input-background", "#fff")
    root.style.setProperty("--section-header-text", "#fff")
    root.style.setProperty("--community-icon", "#fff")
    root.style.setProperty("--icon-gray-dark", "#d1d7db")
    root.style.setProperty("--searchbar-text-color-dark", "#3b4a54")
    root.style.setProperty("--start-community-button-arrow", "#fff")
    root.style.setProperty("--default-chat-wallpaper-dark", "#efeae2")
    root.style.setProperty("--wallpaper-hover", "#fff")
    root.style.setProperty("--wallpaper-active", "#009de2")
    root.style.setProperty("--incoming-message", "#fff")
    root.style.setProperty("--primary-message", "#111b21")
    root.style.setProperty("--outgoing-message", "#d9fdd3")
    root.style.setProperty("--reaction-button-background", "rgba(11,20,26,0.2)")
    root.style.setProperty("--reaction-button", "#fff")
    root.style.setProperty("--reaction-emoji-chat-background", "#fff")
    root.style.setProperty("--more-emoji-button-background", "#f2f2f7")
    root.style.setProperty("--panel-background", "#e9edef")
    root.style.setProperty("--emoji-icon-default", "rgba(17,27,33,0.32)")
    root.style.setProperty("--modal-background", "#fff")
    root.style.setProperty("--primary-button-background", "#008069")
    root.style.setProperty("--primary-button-text-color-dark", "#fff")
    root.style.setProperty("--dark-background", "#f0f2f5")
    root.style.setProperty("--primary-header-text-dull", "#3b4a54")
    root.style.setProperty("--shortcut-key", "#111b21")
    root.style.setProperty("--chat-options-arrow-color", "#8696a0")
    root.style.setProperty("--app-background-stripe", "rgb(0,168,132)")
    root.style.setProperty("--placeholder", "#3b4a54")
    root.style.setProperty("--reply-message-background-text", "#fff")
    root.style.setProperty("--forwarded-message", "#667781")
  }

  function handleDarkTheme() {
    root.style.setProperty("--primary-theme-color-dark", "#111b21")
    root.style.setProperty("--navbar-theme-color-dark", "#202c33")
    root.style.setProperty("--primary-header-text-dark", "#e9edef")
    root.style.setProperty("--secondary-header-text-dark", "#8696a0")
    root.style.setProperty("--chat-section-dark", "#111b21")
    root.style.setProperty("--option-menu-background", "#233138")
    root.style.setProperty("--option-hover-color", "#202c33")
    root.style.setProperty("--primary-nav-btn-color-dark", "#aebac1")
    root.style.setProperty("--primary-input-text-color", "#d1d7db")
    root.style.setProperty("--chat-active", "#2a3942")
    root.style.setProperty("--section-header-background", "#202c33")
    root.style.setProperty("--input-background", "#2a3942")
    root.style.setProperty("--section-header-text", "#e9edef")
    root.style.setProperty("--community-icon", "#e9edef")
    root.style.setProperty("--icon-gray-dark", "#54656f")
    root.style.setProperty("--searchbar-text-color-dark", "#d1d7db")
    root.style.setProperty("--start-community-button-arrow", "#e9edef")
    root.style.setProperty("--default-chat-wallpaper-dark", "#0b141a")
    root.style.setProperty("--wallpaper-hover", "#3b4a54")
    root.style.setProperty("--wallpaper-active", "#667781")
    root.style.setProperty("--incoming-message", "#202c33")
    root.style.setProperty("--primary-message", "#e9edef")
    root.style.setProperty("--outgoing-message", "#005c4b")
    root.style.setProperty("--reaction-button-background", "rgba(0, 0, 0, 0.7)")
    root.style.setProperty("--reaction-button", "rgba(233, 237, 239, 0.5)")
    root.style.setProperty("--reaction-emoji-chat-background", "#233138")
    root.style.setProperty("--more-emoji-button-background", "#667781")
    root.style.setProperty("--panel-background", "#222e35")
    root.style.setProperty("--emoji-icon-default", "rgba(233, 237, 239, 0.32)")
    root.style.setProperty("--modal-background", "#3b4a54")
    root.style.setProperty("--primary-button-background", "#00a884")
    root.style.setProperty("--primary-button-text-color-dark", "#111b21")
    root.style.setProperty("--dark-background", "#0a1014")
    root.style.setProperty(
      "--primary-header-text-dull",
      "rgba(233, 237, 239, 0.8)"
    )
    root.style.setProperty("--shortcut-key", "#e9edef")
    root.style.setProperty(
      "--chat-options-arrow-color",
      "hsla(0, 0%, 100%, 0.6)"
    )
    root.style.setProperty("--app-background-stripe", "#111b21")
    root.style.setProperty("--placeholder", "#d1d7db")
    root.style.setProperty("--reply-message-background-text", "rgb(11, 20, 26)")
    root.style.setProperty("--forwarded-message", "hsla(0, 0%, 100%, 0.6)")
  }

  return (
    <DatabaseContext.Provider value={value}>
      <div className="wrapper">
        <Theme
          themeActive={themeActive}
          setThemeActive={setThemeActive}
          theme={theme}
          setTheme={setTheme}
        />
        <KeyboardShortcuts
          keyboardShortcutsActive={keyboardShortcutsActive}
          setKeyboardShortcutsActive={setKeyboardShortcutsActive}
        />

        <div className="friends-list-container">
          <FriendsListSection
            archivedActive={archivedActive}
            setArchivedActive={setArchivedActive}
            communityTabActive={communityTabActive}
            setCommunityTabActive={setCommunityTabActive}
            startCommunityActive={startCommunityActive}
            setStartCommunityActive={setStartCommunityActive}
            newChatActive={newChatActive}
            setNewChatActive={setNewChatActive}
            starredMessagesActive={starredMessagesActive}
            setStarredMessagesActive={setStarredMessagesActive}
            settingsActive={settingsActive}
            setSettingsActive={setSettingsActive}
            messageHistory={messageHistory}
            setMessageHistory={setMessageHistory}
          />
          <ArchivedSection
            archivedActive={archivedActive}
            setArchivedActive={setArchivedActive}
          />
          <CommunitiesSection
            communityTabActive={communityTabActive}
            setCommunityTabActive={setCommunityTabActive}
            startCommunityActive={startCommunityActive}
            setStartCommunityActive={setStartCommunityActive}
          />
          <StartCommunity
            startCommunityActive={startCommunityActive}
            setStartCommunityActive={setStartCommunityActive}
          />
          <NewChat
            newChatActive={newChatActive}
            setNewChatActive={setNewChatActive}
          />
          <Profile
            profileActive={profileActive}
            setProfileActive={setProfileActive}
          />
          <Settings
            settingsActive={settingsActive}
            setSettingsActive={setSettingsActive}
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
          <Notifications
            notificationsActive={notificationsActive}
            setNotificationsActive={setNotificationsActive}
          />
          <Privacy
            privacyActive={privacyActive}
            setPrivacyActive={setPrivacyActive}
          />
          <Security
            securityActive={securityActive}
            setSecurityActive={setSecurityActive}
          />
          <ChatWallpaper
            chatWallpaperActive={chatWallpaperActive}
            setChatWallpaperActive={setChatWallpaperActive}
            theme={theme}
            wallpaperColor={wallpaperColor}
            setWallpaperColor={setWallpaperColor}
            doodles={doodles}
            setDoodles={setDoodles}
            isWallpaperHovering={isWallpaperHovering}
            setIsWallpaperHovering={setIsWallpaperHovering}
            selectedWallpaper={selectedWallpaper}
            setSelectedWallpaper={setSelectedWallpaper}
          />
          <RequestAccountInfo
            requestAccountInfoActive={requestAccountInfoActive}
            setRequestAccountInfoActive={setRequestAccountInfoActive}
          />
          <StarredMessages
            starredMessagesActive={starredMessagesActive}
            setStarredMessagesActive={setStarredMessagesActive}
            starredMessage={starredMessage}
            setStarredMessage={setStarredMessage}
          />
        </div>
        <div className="direct-message-container">
          {chatWallpaperActive ? (
            <WallpaperPreview
              wallpaperColor={wallpaperColor}
              doodles={doodles}
              setDoodles={setDoodles}
            />
          ) : userId ? (
            <DirectMessage
              selectedWallpaper={selectedWallpaper}
              doodles={doodles}
              setDoodles={setDoodles}
              starredMessage={starredMessage}
              setStarredMessage={setStarredMessage}
              messageHistory={messageHistory}
              setMessageHistory={setMessageHistory}
            />
          ) : (
            <ChatSection theme={theme} />
          )}
        </div>
      </div>
    </DatabaseContext.Provider>
  )
}

export default App
