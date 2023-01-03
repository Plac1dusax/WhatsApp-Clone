import React, { useRef } from "react"
import "./communitiesSection.css"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import SectionHeader from "../SectionHeader/SectionHeader"
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary"
import { ReactComponent as StartCommunityLogo } from "../../icons/start-community-logo.svg"

export default function CommunitiesSection(props) {
  const {
    communityTabActive,
    setCommunityTabActive,
    startCommunityActive,
    setStartCommunityActive
  } = props

  const text =
    "Easily organize your related groups and send announcements. Now, your communities, like neighborhoods or schools, can have their own space."
  const communitySection = useRef()

  function handleCommunitySectionVisibility() {
    if (!communityTabActive) {
      communitySection?.current?.classList?.remove("section-active")
      communitySection?.current?.classList?.add("section-deactivate")
    }

    if (communityTabActive) {
      communitySection?.current?.classList?.remove("section-deactivate")
      communitySection?.current?.classList?.add("section-active")
    }
  }

  handleCommunitySectionVisibility()
  return (
    <div
      ref={communitySection}
      className="community-section-container section-deactivate"
    >
      <SectionHeader
        communityTabActive={communityTabActive}
        setCommunityTabActive={setCommunityTabActive}
        header={"Communities"}
      />
      <div className="community-section-wrapper">
        <div className="start-community-logo">
          <StartCommunityLogo />
        </div>
        <div>
          <PrimaryHeaderText
            headerType={"section"}
            text={"Introducing communities"}
          />
        </div>
        <div>
          <div className="description">
            <SecondaryHeaderText headerType={"chat"} text={text} />
          </div>
        </div>
        <ButtonPrimary
          startCommunityActive={startCommunityActive}
          setStartCommunityActive={setStartCommunityActive}
          buttonPrimary={"START A COMMUNITY"}
        />
      </div>
    </div>
  )
}
