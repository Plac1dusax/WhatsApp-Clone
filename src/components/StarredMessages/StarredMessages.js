import React, { useRef } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import StarredMessage from "../StarredMessage/StarredMessage"
import "./starredMessages.css"

export default function StarredMessages({
  starredMessagesActive,
  setStarredMessagesActive
}) {
  const starredMessagesSection = useRef()

  function handleStarredMessagesSectionVisibility() {
    if (!starredMessagesActive) {
      starredMessagesSection?.current?.classList?.remove("section-active")
      starredMessagesSection?.current?.classList?.add("section-deactivate")
    }

    if (starredMessagesActive) {
      starredMessagesSection?.current?.classList?.remove("section-deactivate")
      starredMessagesSection?.current?.classList?.add("section-active")
    }
  }

  handleStarredMessagesSectionVisibility()

  return (
    <div
      ref={starredMessagesSection}
      className="starred-messages-container section-deactivate"
    >
      <div className="starred-messages-header">
        <SectionHeader
          starredMessagesActive={starredMessagesActive}
          setStarredMessagesActive={setStarredMessagesActive}
          header={"Starred messages"}
          menu={true}
        />
      </div>
      <div className="starred-messages-body">
        <StarredMessage reply={false} />
        <StarredMessage reply={true} />
        <div className="information-for-older-messages">
          Use WhatsApp on your phone to see older chats and messages.
        </div>
      </div>
    </div>
  )
}
