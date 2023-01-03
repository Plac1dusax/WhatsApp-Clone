import React from "react"
import Searchbar from "../Searchbar/Searchbar"
import { ReactComponent as FilterUnreadChatsIcon } from "../../icons/filter-unread-chats-icon.svg"
import "./searchFriend.css"

export default function SearchFriend() {
  return (
    <div className="searchbar-area">
      <Searchbar type={"search friend"} />
      <div className="nav filter-unread-chats">
        <FilterUnreadChatsIcon />
      </div>
    </div>
  )
}
