import React from "react"
import "./profile.css"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import SectionHeader from "../SectionHeader/SectionHeader"
import CustomInputArea from "../CustomInputArea/CustomInputArea"

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

        <CustomInputArea
          counter={true}
          emoji={true}
          placeholder={"User name"}
          type={"profile"}
          area={"Your name"}
        />
        <p className="information-text">
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </p>
        <CustomInputArea
          counter={false}
          emoji={true}
          placeholder={"About"}
          type={"profile"}
          area={"About"}
        />
      </div>
    </div>
  )
}
