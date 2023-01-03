import React, { useRef } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import { ReactComponent as RequestAccountInfoIcon } from "../../icons/request-account-info-icon.svg"
import { ReactComponent as RequestReportIcon } from "../../icons/request-report-icon.svg"
import "./requestAccountInfo.css"

export default function RequestAccountInfo(props) {
  const { requestAccountInfoActive, setRequestAccountInfoActive } = props
  const requestAccountInfoSection = useRef()

  function handleRequestAccountInfoSectionVisibility() {
    if (!requestAccountInfoActive) {
      requestAccountInfoSection?.current?.classList?.remove("section-active")
      requestAccountInfoSection?.current?.classList?.add("section-deactivate")
    }

    if (requestAccountInfoActive) {
      requestAccountInfoSection?.current?.classList?.remove(
        "section-deactivate"
      )
      requestAccountInfoSection?.current?.classList?.add("section-active")
    }
  }

  handleRequestAccountInfoSectionVisibility()
  return (
    <div
      ref={requestAccountInfoSection}
      className="request-account-info-container section-deactivate"
    >
      <div className="request-account-info-header">
        <SectionHeader
          header={"Request Account Info"}
          requestAccountInfoActive={requestAccountInfoActive}
          setRequestAccountInfoActive={setRequestAccountInfoActive}
        />
      </div>
      <div className="request-account-info-body">
        <div className="request-account-info-icon">
          <RequestAccountInfoIcon />
        </div>
        <div className="request-account-info-description">
          Create a report of your WhatsApp account information and settings,
          which you can access or port to another app. This report does not
          include your messages.<span className="learn-more">Learn more</span>
        </div>
        <div className="request-report-wrapper">
          <div className="request-report-icon">
            <RequestReportIcon />
          </div>
          <PrimaryHeaderText
            headerType={"request-report"}
            text={"Request Report"}
          />
        </div>
        <div className="request-account-information">
          <SecondaryHeaderText
            headerType={"request-account-secondary"}
            text={
              "Your report will be ready in about 3 days. You'll have a few weeks to download your report after it's available."
            }
          />
          <SecondaryHeaderText
            headerType={"request-account-secondary"}
            text={
              "Your request will be canceled if you make changes to your account such as changing your number or deleting your account."
            }
          />
        </div>
      </div>
    </div>
  )
}
