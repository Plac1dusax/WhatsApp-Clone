import React from "react"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import { ReactComponent as ChatSectionLogoLight } from "../../icons/chat-section-icon-light.svg"
import { ReactComponent as ChatSectionLogoDark } from "../../icons/chat-section-icon-dark.svg"
import { ReactComponent as EncryptedIcon } from "../../icons/encrypted-icon.svg"
import "./chatSection.css"

export default function ChatSection({ theme }) {
  return (
    <div className="chat-section-container">
      {theme === "light" ? (
        <div className="chat-section-svg">
          <ChatSectionLogoLight />
        </div>
      ) : (
        <div className="chat-section-svg">
          <ChatSectionLogoDark />
        </div>
      )}

      <div className="whatsapp-web-header">
        <PrimaryHeaderText
          headerType={"chat-section-main"}
          text={"WhatsApp Web"}
        />
      </div>
      <div className="whatsapp-web-description">
        <SecondaryHeaderText
          headerType={"chat-section-main"}
          text={"Send and receive messages without keeping your phone online. "}
        />
        <SecondaryHeaderText
          headerType={"chat-section-main"}
          text={
            "Use WhatsApp on up to 4 linked devices and 1 phone at the same time."
          }
        />
      </div>
      <div className="end-to-end-encrypted">
        <div className="encrypted-icon">
          <EncryptedIcon />
        </div>
        <div className="encrypted-text">
          <SecondaryHeaderText
            headerType={"chat-section-main"}
            text={"End-to-end encrypted"}
          />
        </div>
      </div>
    </div>
  )
}
