import React from "react"
import Navbar from "../Navbar/Navbar"
import Archived from "../Archived/Archived"
import SearchFriend from "../SearchFriend/SearchFriend"

export default function FriendsListSection() {
  return (
    <>
      <div className="navbar-and-searchbar-wrapper">
        <div>
          <Navbar />
        </div>
        <div>
          <SearchFriend />
        </div>
        <div>
          <Archived />
        </div>
      </div>
    </>
  )
}
