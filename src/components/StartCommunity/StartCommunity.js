import React, { useRef } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./startCommunity.css"
import CustomInputArea from "../CustomInputArea/CustomInputArea"
import { ReactComponent as AddCommunityBackgroundIcon } from "../../icons/add-community-background-icon.svg"
import { ReactComponent as AddCommunityIcon } from "../../icons/add-community-icon.svg"
import { ReactComponent as ArrowRightIcon } from "../../icons/arrow-right.svg"

export default function StartCommunity({
  startCommunityActive,
  setStartCommunityActive
}) {
  const startCommunitySection = useRef()

  function handleCommunitySectionVisibility() {
    if (!startCommunityActive) {
      startCommunitySection?.current?.classList?.remove("section-active")
      startCommunitySection?.current?.classList?.add("section-deactivate")
    }

    if (startCommunityActive) {
      startCommunitySection?.current?.classList?.remove("section-deactivate")
      startCommunitySection?.current?.classList?.add("section-active")
    }
  }

  handleCommunitySectionVisibility()
  return (
    <div
      ref={startCommunitySection}
      className="start-community-container section-deactivate"
    >
      <SectionHeader
        startCommunityActive={startCommunityActive}
        setStartCommunityActive={setStartCommunityActive}
        header={"New community"}
      />
      <div className="new-community-wrapper">
        <div className="icons-wrapper">
          <div className="add-community-background-icon">
            <AddCommunityBackgroundIcon />
          </div>
          <div className="add-community-icon">
            <AddCommunityIcon />
            <div className="add-community-text">ADD COMMUNITY ICON</div>
          </div>
        </div>
        <CustomInputArea
          counter={true}
          emoji={true}
          placeholder={"Community name"}
          type={"community"}
        />
        <CustomInputArea
          counter={false}
          emoji={true}
          placeholder={"Community description"}
          type={"community"}
        />
        <div className="button-wrapper">
          <div className="arrow-right">
            <ArrowRightIcon />
          </div>
          <div className="button-background"></div>
        </div>
      </div>
    </div>
  )
}
