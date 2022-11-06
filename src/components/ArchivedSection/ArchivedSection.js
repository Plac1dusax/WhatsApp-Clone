import React from "react"
import Chat from "../Chat/Chat"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./archivedSection.css"

export default function ArchivedSection() {
  return (
    <div>
      {/* <div className="archived-section-nav">
        <div className="title-section">
          <div className="archived-section-arrow-left">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
              ></path>
            </svg>
          </div>
          <div className="archive-section-title">Archived</div>
        </div>
      </div> */}
      <SectionHeader header={"Archived"} />
      <div className="archived-chats-list">
        <Chat />
        <Chat />
      </div>
    </div>
  )
}
