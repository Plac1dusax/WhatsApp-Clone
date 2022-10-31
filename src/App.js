import "./app.css"
import FriendsListSection from "./components/FriendsListSection/FriendsListSection"
import ChatSection from "./components/ChatSection/ChatSection"

function App() {
  return (
    <div className="wrapper">
      <div className="friends-list-container">
        <FriendsListSection />
      </div>
      <div className="chat-section-container">
        <ChatSection />
      </div>
    </div>
  )
}

export default App
