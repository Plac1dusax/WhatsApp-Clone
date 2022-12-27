import React, { useRef } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import LogoAndText from "../LogoAndText/LogoAndText"
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox"
import { v4 as uuidv4 } from "uuid"
import "./security.css"

const listItems = [
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        height="25"
        width="25"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1468 3H5.19245C3.43784 3 2 4.43784 2 6.19245V10.2361C2 11.9907 3.43784 13.4286 5.19245 13.4286H5.91071V16.0357L9.38734 13.4286H13.1468C14.9027 13.4286 16.3393 11.9907 16.3393 10.2361V6.19245C16.3393 4.43784 14.9027 3 13.1468 3Z"
          stroke="#8696A0"
          strokeWidth="1.2"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.21436 15.0581V15.4505C7.21436 17.2051 8.65219 18.6429 10.4068 18.6429H14.1663L17.6429 21.2501V18.6429H18.3612C20.1158 18.6429 21.5536 17.2051 21.5536 15.4505V11.4068C21.5536 9.65219 20.1158 8.21436 18.3612 8.21436H16.3394"
          stroke="#8696A0"
          strokeWidth="1.2"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    text: "Text and voice messages"
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        height="25"
        width="25"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <path
          d="M15.9512 20.1499C17.4038 20.1499 18.3584 19.7598 19.1968 18.8135C19.2632 18.7471 19.3296 18.6724 19.3877 18.606C19.8857 18.0498 20.1182 17.502 20.1182 16.979C20.1182 16.3813 19.7695 15.8252 19.0308 15.3105L16.6152 13.6338C15.8682 13.1191 14.9966 13.061 14.2993 13.75L13.6602 14.3892C13.4692 14.5801 13.3032 14.5884 13.1206 14.4722C12.6724 14.1899 11.7676 13.4014 11.1533 12.7871C10.5059 12.1479 9.8833 11.4341 9.55127 10.9111C9.44336 10.7202 9.45166 10.5625 9.64258 10.3716L10.2734 9.73242C10.9707 9.03516 10.9126 8.15527 10.3979 7.4165L8.72119 5.00098C8.20654 4.26221 7.65039 3.92188 7.05273 3.91357C6.52979 3.90527 5.98193 4.146 5.42578 4.64404C5.35107 4.71045 5.28467 4.76855 5.21826 4.82666C4.27197 5.67334 3.88184 6.62793 3.88184 8.06396C3.88184 10.438 5.34277 13.3267 8.02393 16.0078C10.6885 18.6724 13.5854 20.1499 15.9512 20.1499ZM15.9595 18.8716C13.8428 18.9131 11.1284 17.2861 8.97852 15.1445C6.81201 12.9863 5.11035 10.1807 5.15186 8.06396C5.16846 7.15088 5.49219 6.3623 6.13965 5.79785C6.19775 5.74805 6.23926 5.70654 6.29736 5.66504C6.54639 5.44922 6.81201 5.33301 7.05273 5.33301C7.29346 5.33301 7.50928 5.42432 7.66699 5.67334L9.27734 8.08887C9.45166 8.34619 9.46826 8.63672 9.21094 8.89404L8.48047 9.62451C7.90771 10.1973 7.94922 10.8945 8.36426 11.4507C8.8374 12.0898 9.65918 13.0195 10.2983 13.6504C10.9292 14.2896 11.9336 15.186 12.5811 15.6675C13.1372 16.0825 13.8345 16.124 14.4072 15.5513L15.1377 14.8208C15.395 14.5635 15.6772 14.5801 15.9429 14.7461L18.3584 16.3564C18.6074 16.5225 18.6987 16.73 18.6987 16.979C18.6987 17.2197 18.5825 17.4854 18.3667 17.7344C18.3169 17.7925 18.2837 17.834 18.2339 17.8921C17.6694 18.5396 16.8809 18.855 15.9595 18.8716Z"
          fill="#8696A0"
        ></path>
      </svg>
    ),
    text: "Audio and video calls"
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        height="25"
        width="25"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <path
          d="M10.0636 6.34105L17.5257 12.6005C18.9998 13.8371 19.4065 16.0166 18.3169 17.602C17.0651 19.4237 14.5629 19.728 12.9125 18.3435L4.195 11.0309C3.27106 10.2559 2.98788 8.88887 3.66532 7.89506C4.44697 6.74836 6.01764 6.55189 7.05443 7.42159L14.4601 13.6338C14.848 13.9592 14.8992 14.5428 14.5738 14.9307C14.2484 15.3186 13.6648 15.3698 13.2768 15.0444L7.10544 9.86756C6.81627 9.62499 6.37531 9.66364 6.13274 9.95281C5.89017 10.242 5.92882 10.6829 6.21799 10.9255L12.2906 16.0195C13.2146 16.7945 14.61 16.8356 15.4709 15.9956C16.4641 15.0264 16.3844 13.4455 15.3476 12.5758L8.06178 6.46422C6.5877 5.2277 4.37064 5.20638 2.99898 6.55508C1.42867 8.09762 1.5584 10.6216 3.20881 12.0061L11.8629 19.2654C13.8871 20.9634 16.9421 21.0028 18.8247 19.1453C20.9827 17.0024 20.8041 13.5482 18.5331 11.6432L10.9511 5.28309C10.6619 5.04052 10.2209 5.07917 9.97836 5.36834C9.73579 5.65752 9.77444 6.09848 10.0636 6.34105Z"
          fill="#8696A0"
        ></path>
      </svg>
    ),
    text: "Photos, videos and documents"
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        height="25"
        width="25"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.85C15.2628 3.85 17.9 6.48723 17.9 9.75C17.9 11.2005 17.2341 12.9144 16.1692 14.6727C15.1244 16.3979 13.8026 17.9926 12.7293 19.1643C12.3206 19.6104 11.6795 19.6104 11.2707 19.1643C10.1975 17.9926 8.87559 16.3979 7.83078 14.6727C6.7659 12.9144 6.1 11.2005 6.1 9.75C6.1 6.48723 8.73723 3.85 12 3.85ZM12 2.25C16.1464 2.25 19.5 5.60357 19.5 9.75C19.5 13.5199 16.1311 17.8193 13.9091 20.245C12.8662 21.3835 11.1338 21.3835 10.0909 20.245C7.86889 17.8193 4.50001 13.5199 4.5 9.75C4.5 5.60357 7.85357 2.25 12 2.25ZM12 13.6C13.9192 13.6 15.475 12.0442 15.475 10.125C15.475 8.20581 13.9192 6.65 12 6.65C10.0808 6.65 8.525 8.20581 8.525 10.125C8.525 12.0442 10.0808 13.6 12 13.6ZM13.875 10.125C13.875 11.1605 13.0355 12 12 12C10.9645 12 10.125 11.1605 10.125 10.125C10.125 9.08947 10.9645 8.25 12 8.25C13.0355 8.25 13.875 9.08947 13.875 10.125Z"
          fill="#8696A0"
        ></path>
      </svg>
    ),
    text: "Location sharing"
  },
  {
    logo: (
      <svg
        viewBox="0 0 24 24"
        height="25"
        width="25"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <path
          d="M20.3351 11.583C20.4874 15.1659 18.3165 18.5828 14.7619 19.8518C14.3677 19.9923 13.9702 20.102 13.5718 20.1813"
          stroke="#8696A0"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.61426 6.39954C6.52735 5.35496 7.71219 4.52266 9.11157 4.02283C11.6343 3.12242 14.3025 3.50061 16.408 4.82167"
          stroke="#8696A0"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.3036 20.1821C7.50086 19.624 5.05315 17.6498 4.02262 14.7625C3.35894 12.9029 3.3898 10.9646 3.98122 9.23047"
          stroke="#8696A0"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.2768 11.9373C17.2768 14.8864 14.886 17.2769 11.937 17.2769C8.98793 17.2769 6.59717 14.8864 6.59717 11.9373C6.59717 8.98828 8.98793 6.59778 11.937 6.59778C12.9754 6.59778 13.9446 6.89418 14.7646 7.40699"
          stroke="#8696A0"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    text: "Status updates"
  }
]

export default function Security(props) {
  const { securityActive, setSecurityActive } = props
  const securitySection = useRef()

  function handleSecuritySectionVisibility() {
    if (!securityActive) {
      securitySection?.current?.classList?.remove("section-active")
      securitySection?.current?.classList?.add("section-deactivate")
    }

    if (securityActive) {
      securitySection?.current?.classList?.remove("section-deactivate")
      securitySection?.current?.classList?.add("section-active")
    }
  }

  handleSecuritySectionVisibility()
  return (
    <div
      ref={securitySection}
      className="security-container section-deactivate"
    >
      <div className="security-header">
        <SectionHeader
          securityActive={securityActive}
          setSecurityActive={setSecurityActive}
          header={"Security"}
        />
      </div>
      <div className="security-body">
        <div className="security-icon">
          <svg
            viewBox="0 0 84 84"
            width="84"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <circle cx="42" cy="42" r="42" fill="#07CD9E"></circle>
            <path
              d="M53.2411 33.432C53.2411 31.3535 52.7335 29.4441 51.7185 27.7039C50.7193 25.9476 49.3553 24.5619 47.6265 23.5468C45.9136 22.5156 44.042 22 42.0119 22C39.9659 22 38.0785 22.5156 36.3497 23.5468C34.6368 24.5619 33.2728 25.9476 32.2577 27.7039C31.2585 29.4441 30.7589 31.3535 30.7589 33.432V37.8066C30.6638 37.8389 30.4734 37.9275 30.1879 38.0725C29.157 38.6365 28.3719 39.434 27.8327 40.4653C27.5313 41.0292 27.3172 41.6495 27.1903 42.3263C27.0634 43.003 27 44.0101 27 45.3474V53.8792C27 55.2165 27.0634 56.2236 27.1903 56.9003C27.3172 57.577 27.5313 58.1974 27.8327 58.7613C28.3719 59.7925 29.157 60.5901 30.1879 61.1541C30.7272 61.4602 31.3299 61.6777 31.996 61.8066C32.678 61.9356 33.6693 62 34.9699 62H49.0301C50.3307 62 51.314 61.9356 51.9802 61.8066C52.6622 61.6777 53.2728 61.4602 53.8121 61.1541C54.8271 60.6062 55.6122 59.8087 56.1673 58.7613C56.4687 58.1974 56.6828 57.577 56.8097 56.9003C56.9366 56.2236 57 55.2165 57 53.8792V45.3474C57 44.0101 56.9366 43.003 56.8097 42.3263C56.6828 41.6495 56.4687 41.0292 56.1673 40.4653C55.6122 39.4179 54.8271 38.6203 53.8121 38.0725C53.5266 37.9275 53.3362 37.8389 53.2411 37.8066V33.432ZM35.2554 33.432C35.2554 32.1913 35.5567 31.0473 36.1594 30C36.7621 28.9366 37.5789 28.0987 38.6098 27.4864C39.6566 26.8741 40.7906 26.568 42.0119 26.568C43.2332 26.568 44.3592 26.8741 45.3902 27.4864C46.4211 28.0987 47.2379 28.9366 47.8406 30C48.4433 31.0473 48.7446 32.1913 48.7446 33.432V37.2266H35.2554V33.432Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="description-area">
          <div className="description-area-header">
            <PrimaryHeaderText
              headerType={"setting-privacy"}
              text={"Your chats and calls are private"}
            />
          </div>
          <div className="description-area-text">
            <SecondaryHeaderText
              headerType={"chat"}
              text={
                "End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen to them. This includes your:"
              }
            />
          </div>
          <div className="description-area-list">
            {listItems.map(item => {
              return (
                <LogoAndText key={uuidv4()} logo={item.logo} text={item.text} />
              )
            })}
          </div>
          <div className="learn-more">Learn more</div>
        </div>
        <div className="security-option">
          <div className="security-option-header">
            <div className="checkbox-container">
              <CustomCheckbox />
            </div>
            <div className="header-container">
              <PrimaryHeaderText
                headerType={"setting-privacy-notification"}
                text={"Show security notifications on this computer"}
              />
            </div>
          </div>
          <div className="security-option-description">
            Get notified when your security code changes for a contact’s phone.
            If you have multiple devices, this setting must be enabled on each
            device where you want to get notifications.
            <span className="learn-more">Learn more</span>
          </div>
        </div>
      </div>
    </div>
  )
}
