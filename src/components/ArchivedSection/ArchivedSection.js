import React, { useRef } from "react"
import Chat from "../Chat/Chat"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./archivedSection.css"

export default function ArchivedSection({ archivedActive, setArchivedActive }) {
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
  return (
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
        <Chat />
        <Chat />
      </div>
    </div>
  )
}
