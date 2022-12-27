import React, { useState } from "react"
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
import ButtonSecondary from "./components/ButtonSecondary/ButtonSecondary"
import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary"
import ChatWallpaper from "./components/ChatWallpaper/ChatWallpaper"
import RequestAccountInfo from "./components/RequestAccountInfo/RequestAccountInfo"
import KeyboardShortcuts from "./components/KeyboardShortcuts/KeyboardShortcuts"
import StarredMessages from "./components/StarredMessages/StarredMessages"
import DirectMessage from "./components/DirectMessage/DirectMessage"
import chatHistory from "./chatHistory.json"

export const DatabaseContext = React.createContext()

function App() {
  const [database, setDatabase] = useState([...chatHistory])
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

  const value = [database, setDatabase, userId, setUserId]

  return (
    <DatabaseContext.Provider value={value}>
      <div className="wrapper">
        <Theme />
        {/* <KeyboardShortcuts /> */}

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
          {/* <Profile /> */}
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
          />
          <RequestAccountInfo
            requestAccountInfoActive={requestAccountInfoActive}
            setRequestAccountInfoActive={setRequestAccountInfoActive}
          />
          <StarredMessages
            starredMessagesActive={starredMessagesActive}
            setStarredMessagesActive={setStarredMessagesActive}
          />
        </div>
        <div className="direct-message-container">
          {userId ? <DirectMessage /> : <ChatSection />}
        </div>
      </div>
    </DatabaseContext.Provider>
  )
}

export default App
