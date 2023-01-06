import React, { useEffect } from "react"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import OptionsMenu from "../OptionsMenu/OptionsMenu"
import { ReactComponent as CommunityIcon } from "../../icons/community-button-icon.svg"
import { ReactComponent as StatusIcon } from "../../icons/status-button-icon.svg"
import { ReactComponent as NewChatIcon } from "../../icons/new-chat-button-icon.svg"
import { ReactComponent as MoreOptionsIcon } from "../../icons/more-options-button-icon.svg"
import { ReactComponent as SearchIcon } from "../../icons/search-button-icon.svg"
import "./navbar.css"

export default function Navbar(props) {
  const {
    type,
    userProfilePhoto,
    communityTabActive,
    setCommunityTabActive,
    newChatActive,
    setNewChatActive,
    startCommunityActive,
    setStartCommunityActive,
    starredMessagesActive,
    setStarredMessagesActive,
    settingsActive,
    setSettingsActive
  } = props

  function handleMoreOptionsNav(e) {
    const container = e.target.closest(".navbar-container")
    const moreOptionsButton = container.querySelector(".more-options-btn")
    const optionsMenu = container.querySelector("[data-options]")

    if (!moreOptionsButton.classList.contains("more-options-btn-selected")) {
      moreOptionsButton.classList.remove("more-options-btn-not-selected")
      moreOptionsButton.classList.add("more-options-btn-selected")
    } else {
      moreOptionsButton.classList.remove("more-options-btn-selected")
      moreOptionsButton.classList.add("more-options-btn-not-selected")
    }

    if (!optionsMenu.classList.contains("more-options-btn-options-show")) {
      optionsMenu.classList.remove("more-options-btn-options-hide")
      optionsMenu.classList.add("more-options-btn-options-show")
    } else {
      optionsMenu.classList.remove("more-options-btn-options-show")
      optionsMenu.classList.add("more-options-btn-options-hide")
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", handleHideMoreOptions)

    function handleHideMoreOptions(e) {
      const moreOptionsButton = document.querySelector(".more-options-btn")
      const optionsMenu = document.querySelector("[data-options]")

      if (!e.target.matches(".more-options-btn")) {
        optionsMenu.classList.remove("more-options-btn-options-show")
        optionsMenu.classList.add("more-options-btn-options-hide")
        moreOptionsButton.classList.remove("more-options-btn-selected")
        moreOptionsButton.classList.add("more-options-btn-not-selected")
      }
    }

    return () => {
      document.body.removeEventListener("click", handleHideMoreOptions)
    }
  }, [])

  function handleShowCommunitySection() {
    setCommunityTabActive(!communityTabActive)
  }

  function handleShowNewChat() {
    setNewChatActive(!newChatActive)
  }

  if (type === "friends-list") {
    return (
      <div className="navbar-container">
        <ProfilePhoto
          navProfilePhoto={"nav"}
          url={
            "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          }
        />
        <div className="navigation-buttons-container">
          <div
            onClick={handleShowCommunitySection}
            className="nav community-btn"
          >
            <CommunityIcon />
          </div>
          <div className="nav status-btn">
            <StatusIcon />
          </div>
          <div onClick={handleShowNewChat} className="nav new-chat-btn">
            <NewChatIcon />
          </div>
          <div onClick={handleMoreOptionsNav} className="nav more-options-btn">
            <MoreOptionsIcon />
          </div>
          <div data-options>
            <OptionsMenu
              startCommunityActive={startCommunityActive}
              setStartCommunityActive={setStartCommunityActive}
              menuArray={friendsListNavOptions}
              starredMessagesActive={starredMessagesActive}
              setStarredMessagesActive={setStarredMessagesActive}
              settingsActive={settingsActive}
              setSettingsActive={setSettingsActive}
            />
          </div>
        </div>
      </div>
    )
  } else if (type === "direct-message") {
    return (
      <div className="direct-message-header">
        <div className="profile-photo-and-name-wrapper">
          <ProfilePhoto navProfilePhoto={"nav"} url={userProfilePhoto} />
          <PrimaryHeaderText
            headerType={"direct-message"}
            text={"Random Friend"}
          />
        </div>
        <div className="search-button-and-menu-wrapper">
          <div className="search-icon-wrapper">
            <SearchIcon />
          </div>
          <div className="menu">
            <MoreOptionsIcon />
          </div>
        </div>
      </div>
    )
  } else if (type === "wallpaper-preview") {
    return (
      <div className="direct-message-header-wallpaper-preview">
        <div className="wallpaper-preview-header">
          <PrimaryHeaderText
            headerType={"direct-message"}
            text={"Wallpaper Preview"}
          />
        </div>
      </div>
    )
  }
}

const friendsListNavOptions = [
  "New group",
  "New community",
  "Starred messages",
  "Settings",
  "Log out"
]
