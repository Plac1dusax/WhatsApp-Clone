import React, { useRef } from "react"
import Chat from "../Chat/Chat"
import SectionHeader from "../SectionHeader/SectionHeader"
import { ReactComponent as NoArchivedChatsIcon } from "../../icons/no-archived-chats-icon.svg"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import "./archivedSection.css"

export default function ArchivedSection(props) {
  const {
    archivedActive,
    setArchivedActive,
    archivedMessages,
    setArchivedMessages
  } = props
  const archivedSection = useRef()
  function handleArchivedSectionVisibility() {
    if (!archivedActive) {
      archivedSection?.current?.classList?.remove("section-active")
      archivedSection?.current?.classList?.add("section-deactivate")
    }

    if (archivedActive) {
      archivedSection?.current?.classList?.remove("section-deactivate")
      archivedSection?.current?.classList?.add("section-active")
    }
  }

  handleArchivedSectionVisibility()

  return archivedMessages.length === 0 ? (
    <div
      ref={archivedSection}
      className="archived-section-container-empty section-deactivate"
    >
      <SectionHeader
        header={"Archived"}
        archivedActive={archivedActive}
        setArchivedActive={setArchivedActive}
      />
      <div className="no-archived-chats-icon-and-notification">
        <div className="no-archived-chats-icon-wrapper">
          <NoArchivedChatsIcon />
        </div>
        <SecondaryHeaderText
          headerType={"empty-archived-section"}
          text={"No archived chats"}
        />
      </div>
    </div>
  ) : (
    <div
      ref={archivedSection}
      className="archived-section-container section-deactivate"
    >
      <SectionHeader
        header={"Archived"}
        archivedActive={archivedActive}
        setArchivedActive={setArchivedActive}
      />
      <div className="archived-chats-list">
        {archivedMessages.map(message => {
          return <Chat />
        })}
      </div>
    </div>
  )
}
