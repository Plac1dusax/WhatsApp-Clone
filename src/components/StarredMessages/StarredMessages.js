import React, { useRef } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import StarredMessage from "../StarredMessage/StarredMessage"
import { v4 as uuidv4 } from "uuid"
import "./starredMessages.css"

export default function StarredMessages({
  starredMessagesActive,
  setStarredMessagesActive,
  starredMessage,
  setStarredMessage
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
        {starredMessage
          ? starredMessage.map(message => {
              console.log(message)
              return (
                <StarredMessage
                  key={uuidv4()}
                  reply={message?.reply}
                  profilePhotoURL={message?.profilePhoto}
                  name={message?.name}
                  message={message?.starredMessageInfo[0]?.message}
                  repliedMessage={
                    message?.starredMessageInfo[0]?.repliedMessage
                  }
                  status={message?.starredMessageInfo[0]?.status}
                  time={message?.starredMessageInfo[0]?.time}
                  type={message?.starredMessageInfo[0]?.type}
                />
              )
            })
          : null}
        <div className="information-for-older-messages">
          Use WhatsApp on your phone to see older chats and messages.
        </div>
      </div>
    </div>
  )
}
