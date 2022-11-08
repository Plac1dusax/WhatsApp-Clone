import React from "react"
import "./contact.css"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"

export default function Contact({ person }) {
  return (
    <div className="contact-wrapper">
      <div className="contact-profile-photo">
        <ProfilePhoto navProfilePhoto={"chat"} url={person.profilePhoto} />
      </div>
      <div className="contact-name-and-about">
        <PrimaryHeaderText headerType={"contact"} text={person.name} />
        <SecondaryHeaderText headerType={"chat"} text={person.about} />
      </div>
    </div>
  )
}
