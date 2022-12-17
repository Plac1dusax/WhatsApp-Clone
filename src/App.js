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
  const [directMessage, setDirectMessage] = useState(null)

  return (
    <DatabaseContext.Provider value={chatHistory}>
      <div className="wrapper">
        {/* <Theme /> */}
        {/* <KeyboardShortcuts /> */}

        <div className="friends-list-container">
          <FriendsListSection
            directMessage={directMessage}
            setDirectMessage={setDirectMessage}
          />
          {/* <ArchivedSection /> */}
          {/* <CommunitiesSection /> */}
          {/* <StartCommunity /> */}
          {/* <NewChat /> */}
          {/* <Profile /> */}
          {/* <Settings /> */}
          {/* <Notifications /> */}
          {/* <Privacy /> */}
          {/* <Security /> */}
          {/* <ChatWallpaper /> */}
          {/* <RequestAccountInfo /> */}
          {/* <StarredMessages /> */}
        </div>
        <div className="direct-message-container">
          {directMessage ? (
            <DirectMessage directMessage={directMessage} />
          ) : (
            <ChatSection />
          )}
        </div>
      </div>
    </DatabaseContext.Provider>
  )
}

export default App
