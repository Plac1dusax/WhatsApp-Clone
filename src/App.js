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

function App() {
  return (
    <div className="wrapper">
      {/* <Theme /> */}

      <div className="friends-list-container">
        {/* <FriendsListSection /> */}
        {/* <ArchivedSection /> */}
        {/* <CommunitiesSection /> */}
        {/* <StartCommunity /> */}
        {/* <NewChat /> */}
        {/* <Profile /> */}
        {/* <Settings /> */}
        {/* <Notifications /> */}
        {/* <Privacy /> */}
        {/* <Security /> */}
        <ChatWallpaper />
      </div>
      <div className="chat-section-container">
        <ChatSection />
      </div>
    </div>
  )
}

export default App
