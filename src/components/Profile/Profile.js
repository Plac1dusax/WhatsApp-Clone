import React, { useRef } from "react"
import "./profile.css"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import SectionHeader from "../SectionHeader/SectionHeader"
import CustomInputArea from "../CustomInputArea/CustomInputArea"

export default function Profile(props) {
  const { profileActive, setProfileActive } = props
  const profileSection = useRef()

  function handleProfileSectionVisibility() {
    if (!profileActive) {
      profileSection?.current?.classList?.remove("section-active")
      profileSection?.current?.classList?.add("section-deactivate")
    }

    if (profileActive) {
      profileSection?.current?.classList?.remove("section-deactivate")
      profileSection?.current?.classList?.add("section-active")
    }
  }

  handleProfileSectionVisibility()

  return (
    <div ref={profileSection} className="profile-wrapper section-deactivate">
      <div className="profile-header">
        <SectionHeader
          header={"Profile"}
          profileActive={profileActive}
          setProfileActive={setProfileActive}
        />
      </div>
      <div className="profile-body">
        <div className="profile-photo-wrapper">
          <ProfilePhoto
            navProfilePhoto={"user"}
            url={
              "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            }
          />
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
