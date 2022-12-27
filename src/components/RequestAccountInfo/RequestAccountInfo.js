import React, { useRef } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
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
          <svg
            viewBox="0 0 112 112"
            height="112"
            width="112"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M112 56C112 86.9279 86.9279 112 56 112C25.0721 112 0 86.9279 0 56C0 25.0721 25.0721 0 56 0C86.9279 0 112 25.0721 112 56ZM41.9395 48.6665H69.9395C71.044 48.6665 71.9395 49.5619 71.9395 50.6665C71.9395 51.7711 71.044 52.6665 69.9395 52.6665H41.9395C40.8349 52.6665 39.9395 51.7711 39.9395 50.6665C39.9395 49.5619 40.8349 48.6665 41.9395 48.6665ZM41.9395 58.6665H69.9395C71.044 58.6665 71.9395 59.5619 71.9395 60.6665C71.9395 61.7711 71.044 62.6665 69.9395 62.6665H41.9395C40.8349 62.6665 39.9395 61.7711 39.9395 60.6665C39.9395 59.5619 40.8349 58.6665 41.9395 58.6665ZM53.9394 68.6665H41.9395C40.8349 68.6665 39.9395 69.5619 39.9395 70.6665C39.9395 71.7711 40.8349 72.6665 41.9395 72.6665H53.9394C55.044 72.6665 55.9394 71.7711 55.9394 70.6665C55.9394 69.5619 55.044 68.6665 53.9394 68.6665Z"
              fill="#06CF9C"
              fillOpacity="0.15"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68 19H34C30.6863 19 28 21.6863 28 25V87C28 90.3137 30.6863 93 34 93H78C81.3137 93 84 90.3137 84 87V35L68 19ZM42 49H70C71.1046 49 72 49.8954 72 51C72 52.1046 71.1046 53 70 53H42C40.8954 53 40 52.1046 40 51C40 49.8954 40.8954 49 42 49ZM42 59H70C71.1046 59 72 59.8954 72 61C72 62.1046 71.1046 63 70 63H42C40.8954 63 40 62.1046 40 61C40 59.8954 40.8954 59 42 59ZM54 69H42C40.8954 69 40 69.8954 40 71C40 72.1046 40.8954 73 42 73H54C55.1046 73 56 72.1046 56 71C56 69.8954 55.1046 69 54 69Z"
              fill="#06CF9C"
            ></path>
            <path
              d="M84 35L68 19V29C68 32.3137 70.6863 35 74 35L84 35Z"
              fill="#00A884"
            ></path>
          </svg>
        </div>
        <div className="request-account-info-description">
          Create a report of your WhatsApp account information and settings,
          which you can access or port to another app. This report does not
          include your messages.<span className="learn-more">Learn more</span>
        </div>
        <div className="request-report-wrapper">
          <div className="request-report-icon">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.42L14.58 2.59C14.21 2.21 13.7 2 13.17 2H6ZM13 8V3.5L18.5 9H14C13.45 9 13 8.55 13 8ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8ZM14 17C14 16.4477 13.5523 16 13 16H8C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H13C13.5523 18 14 17.5523 14 17Z"
                fill="currentColor"
              ></path>
            </svg>
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
