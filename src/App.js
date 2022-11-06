import "./app.css"
import FriendsListSection from "./components/FriendsListSection/FriendsListSection"
import ChatSection from "./components/ChatSection/ChatSection"
import ArchivedSection from "./components/ArchivedSection/ArchivedSection"
import CommunitiesSection from "./components/CommunitiesSection/CommunitiesSection"
import StartCommunity from "./components/StartCommunity/StartCommunity"

function App() {
  return (
    <div className="wrapper">
      <div className="friends-list-container">
        {/* <FriendsListSection /> */}
        {/* <ArchivedSection /> */}
        {/* <CommunitiesSection /> */}
        <StartCommunity />
      </div>
      <div className="chat-section-container">
        <ChatSection />
      </div>
    </div>
  )
}

export default App
