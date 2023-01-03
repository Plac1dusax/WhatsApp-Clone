import React, { useRef } from "react"
import "./newChat.css"
import SectionHeader from "../SectionHeader/SectionHeader"
import Searchbar from "../Searchbar/Searchbar"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import ContactsList from "../ContactsList/ContactsList"
import { ReactComponent as NewGroupLogo } from "../../icons/new-group-logo.svg"
import { ReactComponent as NewCommunityLogo } from "../../icons/new-community-logo.svg"

export default function NewChat({ newChatActive, setNewChatActive }) {
  const newChatSection = useRef()

  function handleNewChatSectionVisibility() {
    if (!newChatActive) {
      newChatSection?.current?.classList?.remove("section-active")
      newChatSection?.current?.classList?.add("section-deactivate")
    }

    if (newChatActive) {
      newChatSection?.current?.classList?.remove("section-deactivate")
      newChatSection?.current?.classList?.add("section-active")
    }
  }

  handleNewChatSectionVisibility()
  return (
    <>
      <div ref={newChatSection} className="new-chat-wrapper section-deactivate">
        <div className="new-chat-header-section">
          <div className="searchbar-wrapper">
            <SectionHeader
              newChatActive={newChatActive}
              setNewChatActive={setNewChatActive}
              header={"New chat"}
            />
          </div>
          <div className="contacts-section">
            <div className="searchbar-wrapper">
              <Searchbar type={"new chat"} />
            </div>
          </div>
        </div>
        <div className="new-chat-body">
          <div className="new-group">
            <div className="new-group-logo">
              <NewGroupLogo />
            </div>
            <div className="new-group-text">
              <PrimaryHeaderText headerType={"contact"} text={"New group"} />
            </div>
          </div>
          <div className="new-community">
            <div className="new-community-logo">
              <NewCommunityLogo />
            </div>
            <div className="new-community-text">
              <PrimaryHeaderText
                headerType={"contact"}
                text={"New community"}
              />
            </div>
          </div>
          <ContactsList />
        </div>
      </div>
    </>
  )
}
