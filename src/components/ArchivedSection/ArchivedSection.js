import React from "react"
import Chat from "../Chat/Chat"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./archivedSection.css"

export default function ArchivedSection() {
  return (
    <div>
      <SectionHeader header={"Archived"} />
      <div className="archived-chats-list">
        <Chat />
        <Chat />
      </div>
    </div>
  )
}
