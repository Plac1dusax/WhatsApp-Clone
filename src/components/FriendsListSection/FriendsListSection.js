import React, { useContext } from "react"
import Navbar from "../Navbar/Navbar"
import Archived from "../Archived/Archived"
import SearchFriend from "../SearchFriend/SearchFriend"
import Chat from "../Chat/Chat"
import { DatabaseContext } from "../../App"
import { v4 as uuidv4 } from "uuid"

export default function FriendsListSection() {
  const database = useContext(DatabaseContext)

  return (
    <>
      <div className="friends-list-section-wrapper">
        <div className="navbar-and-searchbar-wrapper">
          <div>
            <Navbar type={"friends-list"} />
          </div>
          <div>
            <SearchFriend />
          </div>
        </div>
        <div className="chat-section-wrapper">
          <Archived />
          {database.map(data => {
            const lastMessage = data.messages[data.messages.length - 1].message
            const messageStatus = data.messages[data.messages.length - 1].status
            const lastMessageTime = data.messages[data.messages.length - 1].time
            const userName = data.userName
            const profilePhotoUrl = data.userProfilePhoto

            return (
              <Chat
                key={uuidv4()}
                userProfilePhoto={profilePhotoUrl}
                userName={userName}
                lastMessage={lastMessage}
                info={messageStatus}
                time={lastMessageTime}
              />
            )
          })}
          <footer className="friend-list-footer">
            Your personal messages are{" "}
            <span className="footer-highlighted">end-to-end encrypted</span>
          </footer>
        </div>
      </div>
    </>
  )
}
