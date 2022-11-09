import React from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./startCommunity.css"
import CustomInputArea from "../CustomInputArea/CustomInputArea"

export default function StartCommunity() {
  return (
    <>
      <SectionHeader header={"New community"} />
      <div className="new-community-wrapper">
        <div className="icons-wrapper">
          <div className="add-community-background-icon">
            <svg
              viewBox="0 0 180 180"
              height="180"
              width="180"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <path
                d="M90 0C1.43051e-05 0 0 0 0 90C0 180 1.43051e-05 180 90 180C180 180 180 180 180 90C180 0 180 0 90 0Z"
                fill="currentColor"
              ></path>
              <path
                transform="translate(30, 52)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M86.0728 25.3655C86.1287 25.7634 86.2023 26.1501 86.2934 26.5313C86.3389 26.7247 86.3886 26.9126 86.4426 27.0949C86.5491 27.4658 86.6736 27.831 86.8156 28.1888C87.0246 28.7152 87.2706 29.2248 87.5516 29.7138C87.7381 30.0342 87.939 30.3491 88.1538 30.6475C88.7962 31.5513 89.5655 32.3502 90.4362 33.0177C91.0223 33.4638 91.6483 33.8505 92.3056 34.1725C92.8094 34.4169 93.3294 34.6237 93.8617 34.7913C94.2205 34.9018 94.5877 34.9957 94.9632 35.0731C95.7326 35.2269 96.5143 35.3046 97.2978 35.3051C103.567 35.3051 108.649 30.0362 108.649 23.5368C108.649 17.0373 103.567 11.7684 97.2978 11.7684C96.5142 11.7662 95.7322 11.8439 94.9632 12.0005C94.5915 12.0741 94.2238 12.1682 93.8617 12.2822C93.3296 12.448 92.8095 12.6529 92.3056 12.8955C90.663 13.6984 89.2368 14.9092 88.1538 16.4205C87.9406 16.7244 87.7381 17.0338 87.5516 17.3598C87.2695 17.8481 87.0235 18.3579 86.8156 18.8847C86.6755 19.2383 86.5492 19.6029 86.4426 19.9731C86.3883 20.161 86.3385 20.3488 86.2934 20.5367C86.2023 20.9179 86.1287 21.3046 86.0728 21.7024C85.9037 22.9172 85.9037 24.1508 86.0728 25.3655ZM33.9272 25.3655C33.8739 25.7634 33.7977 26.1501 33.7071 26.5313C33.6617 26.7247 33.6119 26.9126 33.5579 27.0949C33.4514 27.4658 33.3269 27.8309 33.1849 28.1888C32.9755 28.7151 32.7294 29.2247 32.4484 29.7138C32.2624 30.0342 32.0615 30.3491 31.8467 30.6475C31.204 31.551 30.4347 32.3499 29.5642 33.0177C28.9782 33.4638 28.3521 33.8505 27.6948 34.1725C27.191 34.4169 26.6709 34.6237 26.1387 34.7913C25.7795 34.9018 25.4123 34.9957 25.0371 35.0731C24.2677 35.2268 23.486 35.3045 22.7024 35.3051C16.4334 35.3051 11.3514 30.0362 11.3514 23.5368C11.3514 17.0373 16.4334 11.7684 22.7024 11.7684C23.4861 11.7663 24.2681 11.844 25.0371 12.0005C25.4089 12.0742 25.7765 12.1682 26.1387 12.2822C26.6708 12.448 27.1908 12.6529 27.6948 12.8955C29.3375 13.6984 30.7636 14.9092 31.8467 16.4205C32.0599 16.7244 32.2624 17.0338 32.4484 17.3598C32.7304 17.8482 32.9766 18.3579 33.1849 18.8847C33.325 19.2383 33.4513 19.6029 33.5579 19.9731C33.6116 20.161 33.6613 20.3488 33.7071 20.5367C33.7977 20.9179 33.8718 21.3046 33.9272 21.7024C34.0963 22.9172 34.0963 24.1508 33.9272 25.3655ZM119.343 54.0764C119.204 53.836 119.05 53.5733 118.862 53.2826C118.66 52.9695 118.432 52.6341 118.171 52.2764C117.909 51.9186 117.62 51.5385 117.295 51.1472C116.97 50.7559 116.615 50.3534 116.224 49.9398C114.625 48.2625 112.798 46.8262 110.799 45.6746C110.168 45.3056 109.497 44.9591 108.788 44.6292C108.767 44.6181 108.748 44.6125 108.728 44.6013C100.676 41.1728 91.6054 41.1728 83.5538 44.6013C83.4404 44.6516 83.3336 44.7075 83.2235 44.7634C83.0429 44.8472 82.8778 44.9423 82.7027 45.0317C82.8007 45.0876 82.9003 45.1379 82.9978 45.1938C84.9925 46.3455 86.8856 47.6696 88.6562 49.1516C89.8126 50.1167 90.913 51.1488 91.952 52.2428C92.5945 52.9136 93.1818 53.5788 93.7185 54.2273C94.269 54.8925 94.7513 55.513 95.1817 56.1055C95.6249 56.7148 96.0075 57.2794 96.3488 57.7993C96.6719 58.3024 96.9455 58.7496 97.1817 59.1633C97.6294 59.9211 97.9634 60.7426 98.1726 61.6005L98.2601 62.2042H116.6C118.478 62.2042 120 60.682 120 58.8042V55.3676C119.81 54.9225 119.591 54.491 119.343 54.0764ZM77.6389 15.6162C77.5508 14.9906 77.435 14.382 77.292 13.7846C77.2208 13.4859 77.1425 13.1873 77.0577 12.8942C76.8886 12.3081 76.6929 11.7389 76.4727 11.181C76.1444 10.3541 75.7576 9.55357 75.3153 8.78587C75.0228 8.27866 74.7075 7.78837 74.3694 7.31498C72.6729 4.93631 70.4305 3.03412 67.8456 1.78084C67.0544 1.39541 66.2367 1.07141 65.3992 0.811523C64.8349 0.63682 64.2576 0.48466 63.6683 0.366313C62.4595 0.123014 61.231 0 59.9997 0C49.8923 0 42.1622 8.01379 42.1622 18.496C42.1622 28.9781 49.8923 36.9863 59.9997 36.9863C61.231 36.9863 62.4595 36.8633 63.6683 36.62C64.2576 36.5016 64.8349 36.3495 65.3992 36.1748C66.2367 35.9149 67.0544 35.5909 67.8456 35.2055C70.4305 33.9522 72.6729 32.05 74.3694 29.6713C74.7072 29.1979 75.0225 28.7076 75.3153 28.2004C75.7576 27.4327 76.1444 26.6322 76.4727 25.8053C76.6902 25.2474 76.8886 24.6726 77.0577 24.0921C77.1425 23.799 77.2208 23.5004 77.292 23.2017C77.435 22.6043 77.5508 21.9957 77.6389 21.3701C77.9042 19.462 77.9042 17.5243 77.6389 15.6162ZM93.0965 61.4246C92.8978 61.0703 92.6696 60.6818 92.4021 60.2532C92.1144 59.7961 91.7847 59.299 91.4118 58.7733C91.039 58.2476 90.623 57.6876 90.1612 57.1162C89.6993 56.5448 89.1905 55.9448 88.6326 55.3448C87.7365 54.3736 86.7887 53.456 85.7938 52.5964C84.2613 51.2774 82.6237 50.0979 80.8992 49.0708C79.999 48.5337 79.0431 48.0195 78.0315 47.5395C78.0039 47.522 77.9751 47.5067 77.9453 47.4938C73.2477 45.2653 67.3414 43.7111 59.9989 43.7111C52.6564 43.7111 46.7496 45.2653 42.0526 47.4938C41.8888 47.5681 41.7398 47.6538 41.5803 47.7338C40.8941 48.0709 40.2347 48.4252 39.6009 48.7851C39.2573 48.9851 38.9214 49.1851 38.5931 49.3851C37.0554 50.3392 35.5882 51.4126 34.204 52.5964C33.209 53.4558 32.2612 54.3734 31.3652 55.3448C30.8084 55.9448 30.3001 56.5391 29.8367 57.1162C29.3732 57.6933 28.9583 58.2419 28.5854 58.7733C28.2126 59.3047 27.8834 59.7961 27.5957 60.2532C27.3282 60.6818 27.1 61.0703 26.9018 61.4246C26.8833 61.4521 26.8664 61.4807 26.8511 61.5103C26.6425 61.8817 26.4728 62.2074 26.3385 62.476C26.0699 63.0131 25.9459 63.3159 25.9459 63.3159V70.5726C25.9459 72.4504 27.4682 73.9726 29.3459 73.9726H90.6541C92.5318 73.9726 94.0541 72.4504 94.0541 70.5726V63.3159C93.7702 62.6666 93.4505 62.035 93.0965 61.4246ZM21.7773 61.6062C21.8277 61.1833 21.9651 60.7758 22.1807 60.4102C22.3487 60.086 22.4749 59.6948 22.7367 59.2421C23.0271 58.7447 23.2558 58.3032 23.5732 57.8057C23.9132 57.2804 24.2785 56.7159 24.7161 56.1179C25.1536 55.5199 25.6319 54.8883 26.1698 54.24C26.7076 53.5917 27.2983 52.921 27.9447 52.2392C30.4236 49.6351 33.2397 47.3846 36.3159 45.5492C36.6355 45.3592 36.965 45.1692 37.2973 44.9847C37.1535 44.9121 37.0218 44.8339 36.8724 44.7668C36.7622 44.7109 36.652 44.655 36.5418 44.6047C32.5724 42.8404 28.2751 41.9636 23.9418 42.0338C19.6088 41.9636 15.3116 42.8405 11.3424 44.6047C11.3215 44.6159 11.3028 44.6215 11.2818 44.6326C10.5721 44.9624 9.90032 45.3089 9.26825 45.6778C8.05739 46.376 6.90772 47.1782 5.83185 48.0754C5.1338 48.66 4.46803 49.2832 3.83757 49.9421C3.44632 50.3557 3.08887 50.7581 2.76521 51.1493C2.44064 51.5406 2.14858 51.9206 1.88682 52.2783C1.62507 52.636 1.39363 52.9713 1.19139 53.2843C1.00403 53.5749 0.826588 53.8376 0.68717 54.0779C0.224832 54.8716 0 55.369 0 55.369V58.8042C0 60.682 1.52223 62.2042 3.4 62.2042H21.7371L21.7773 61.6062Z"
                fill="#fff"
              ></path>
            </svg>
          </div>
          <div className="add-community-icon">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.317,4.381H10.971L9.078,2.45C8.832,2.199,8.342,1.993,7.989,1.993H4.905 c-0.352,0-0.837,0.211-1.078,0.468L1.201,5.272C0.96,5.529,0.763,6.028,0.763,6.38v1.878c0,0.003-0.002,0.007-0.002,0.01v11.189 c0,1.061,0.86,1.921,1.921,1.921h18.634c1.061,0,1.921-0.86,1.921-1.921V6.302C23.238,5.241,22.378,4.381,21.317,4.381z  M12.076,18.51c-3.08,0-5.577-2.497-5.577-5.577s2.497-5.577,5.577-5.577s5.577,2.497,5.577,5.577 C17.654,16.013,15.157,18.51,12.076,18.51z M12.076,9.004c-2.17,0-3.929,1.759-3.929,3.929s1.759,3.929,3.929,3.929 s3.929-1.759,3.929-3.929C16.004,10.763,14.245,9.004,12.076,9.004z"
              ></path>
            </svg>
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
            <svg
              viewBox="0 0 30 30"
              height="30"
              width="30"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 30 30"
            >
              <path
                fill="currentColor"
                d="M15,7l-1.4,1.4l5.6,5.6H7v2h12.2l-5.6,5.6L15,23l8-8L15,7z"
              ></path>
            </svg>
          </div>
          <div className="button-background"></div>
        </div>
      </div>
    </>
  )
}
