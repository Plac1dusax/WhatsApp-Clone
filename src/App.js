import "./app.css"
import FriendsListSection from "./components/FriendsListSection/FriendsListSection"
import ChatSection from "./components/ChatSection/ChatSection"
import ArchivedSection from "./components/ArchivedSection/ArchivedSection"

function App() {
  return (
    <div className="wrapper">
      <div className="friends-list-container">
        {/* <FriendsListSection /> */}
        <ArchivedSection />
      </div>
      <div className="chat-section-container">
        <ChatSection />
      </div>
    </div>
  )
}

export default App
