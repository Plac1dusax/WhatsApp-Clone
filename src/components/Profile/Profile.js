import React from "react"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./profile.css"

export default function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <SectionHeader header={"Profile"} />
      </div>
      <div className="profile-body">
        <div className="profile-photo-wrapper">
          <ProfilePhoto navProfilePhoto={"user"} />
        </div>
      </div>
    </div>
  )
}
