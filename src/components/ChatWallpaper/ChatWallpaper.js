import React, { useRef } from "react"
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import SectionHeader from "../SectionHeader/SectionHeader"
import ChatWallpaperColor from "../ChatWallpaperColor/ChatWallpaperColor"
import { v4 as uuidv4 } from "uuid"
import "./chatWallpaper.css"

const backgroundsDark = [
  {
    standard: true,
    backgroundColor: "var(--default-chat-wallpaper-dark)",
    selected: true
  },
  {
    backgroundColor: "rgb(15, 36, 36)",
    selected: false
  },
  {
    backgroundColor: "rgb(18, 38, 31)",
    selected: false
  },
  {
    backgroundColor: "rgb(17, 36, 28)",
    selected: false
  },
  {
    backgroundColor: "rgb(17, 30, 39)",
    selected: false
  },
  {
    backgroundColor: "rgb(15, 34, 36)",
    selected: false
  },
  {
    backgroundColor: "rgb(14, 33, 37)",
    selected: false
  },
  {
    backgroundColor: "rgb(31, 29, 37)",
    selected: false
  },
  {
    backgroundColor: "rgb(33, 33, 33)",
    selected: false
  },
  {
    backgroundColor: "rgb(31, 33, 28)",
    selected: false
  },
  {
    backgroundColor: "rgb(35, 35, 27)",
    selected: false
  },
  {
    backgroundColor: "rgb(38, 36, 25)",
    selected: false
  },
  {
    backgroundColor: "rgb(38, 31, 23)",
    selected: false
  },
  {
    backgroundColor: "rgb(38, 23, 23)",
    selected: false
  },
  {
    backgroundColor: "rgb(38, 15, 16)",
    selected: false
  },
  {
    backgroundColor: "rgb(38, 10, 16)",
    selected: false
  },
  {
    backgroundColor: "rgb(25, 5, 11)",
    selected: false
  },
  {
    backgroundColor: "rgb(33, 16, 12)",
    selected: false
  },
  {
    backgroundColor: "rgb(15, 12, 12)",
    selected: false
  },
  {
    backgroundColor: "rgb(16, 25, 25)",
    selected: false
  },
  {
    backgroundColor: "rgb(10, 29, 37)",
    selected: false
  },
  {
    backgroundColor: "rgb(13, 21, 35)",
    selected: false
  },
  {
    backgroundColor: "rgb(13, 15, 17)",
    selected: false
  },
  {
    backgroundColor: "rgb(10, 12, 13)",
    selected: false
  },
  {
    backgroundColor: "rgb(17, 11, 18)",
    selected: false
  },
  {
    backgroundColor: "rgb(30, 31, 31)",
    selected: false
  },
  {
    backgroundColor: "rgb(38, 38, 24)",
    selected: false
  },
  {
    backgroundColor: "rgb(35, 35, 31)",
    selected: false
  }
]

const backgroundsLight = [
  {
    standard: true,
    backgroundColor: "var(--default-chat-wallpaper-dark)",
    selected: true
  },
  {
    backgroundColor: "rgb(187, 228, 229)",
    selected: false
  },
  {
    backgroundColor: "rgb(174, 216, 199)",
    selected: false
  },
  {
    backgroundColor: "rgb(122, 203, 165)",
    selected: false
  },
  {
    backgroundColor: "rgb(203, 218, 236)",
    selected: false
  },
  {
    backgroundColor: "rgb(102, 210, 213)",
    selected: false
  },
  {
    backgroundColor: "rgb(99, 189, 207)",
    selected: false
  },
  {
    backgroundColor: "rgb(214, 208, 240)",
    selected: false
  },
  {
    backgroundColor: "rgb(206, 206, 206)",
    selected: false
  },
  {
    backgroundColor: "rgb(209, 218, 290)",
    selected: false
  },
  {
    backgroundColor: "rgb(230, 225, 177)",
    selected: false
  },
  {
    backgroundColor: "rgb(254, 239, 169)",
    selected: false
  },
  {
    backgroundColor: "rgb(254, 210, 151)",
    selected: false
  },
  {
    backgroundColor: "rgb(253, 154, 155)",
    selected: false
  },
  {
    backgroundColor: "rgb(253, 103, 105)",
    selected: false
  },
  {
    backgroundColor: "rgb(251, 70, 104)",
    selected: false
  },
  {
    backgroundColor: "rgb(146, 32, 64)",
    selected: false
  },
  {
    backgroundColor: "rgb(220, 110, 79)",
    selected: false
  },
  {
    backgroundColor: "rgb(100, 77, 82)",
    selected: false
  },
  {
    backgroundColor: "rgb(81, 126, 126)",
    selected: false
  },
  {
    backgroundColor: "rgb(49, 144, 187)",
    selected: false
  },
  {
    backgroundColor: "rgb(53, 85, 138)",
    selected: false
  },
  {
    backgroundColor: "rgb(85, 98, 111)",
    selected: false
  },
  {
    backgroundColor: "rgb(29, 35, 38)",
    selected: false
  },
  {
    backgroundColor: "rgb(48, 30, 52)",
    selected: false
  },
  {
    backgroundColor: "rgb(236, 240, 241)",
    selected: false
  },
  {
    backgroundColor: "rgb(255, 254, 162)",
    selected: false
  },
  {
    backgroundColor: "rgb(231, 232, 210)",
    selected: false
  }
]

export default function ChatWallpaper(props) {
  const chatWallpaperSection = useRef()
  const {
    chatWallpaperActive,
    setChatWallpaperActive,
    theme,
    wallpaperColor,
    setWallpaperColor,
    doodles,
    setDoodles,
    isWallpaperHovering,
    setIsWallpaperHovering,
    selectedWallpaper,
    setSelectedWallpaper
  } = props

  function handleChatWallpaperSectionVisibility() {
    if (!chatWallpaperActive) {
      chatWallpaperSection?.current?.classList?.remove("section-active")
      chatWallpaperSection?.current?.classList?.add("section-deactivate")
    }

    if (chatWallpaperActive) {
      chatWallpaperSection?.current?.classList?.remove("section-deactivate")
      chatWallpaperSection?.current?.classList?.add("section-active")
    }
  }

  handleChatWallpaperSectionVisibility()

  return (
    <div
      ref={chatWallpaperSection}
      className="chat-wallpaper-container section-deactivate"
    >
      <div className="chat-wallpaper-header">
        <SectionHeader
          chatWallpaperActive={chatWallpaperActive}
          setChatWallpaperActive={setChatWallpaperActive}
          header={"Set Chat Wallpaper"}
        />
      </div>
      <div className="chat-wallpaper-body">
        <div className="set-doodle-background">
          <CustomCheckbox
            location={"chat-wallpaper"}
            ischecked={true}
            doodles={doodles}
            setDoodles={setDoodles}
          />
          <SecondaryHeaderText
            headerType={"chat"}
            text={"Add WhatsApp Doodles"}
          />
        </div>
        <div className="backgrounds-grid">
          {theme === "dark" || theme === "system default"
            ? backgroundsDark.map(background => {
                return (
                  <ChatWallpaperColor
                    key={uuidv4()}
                    standard={background.standard}
                    backgroundColor={background.backgroundColor}
                    selected={background.selected}
                    wallpaperColor={wallpaperColor}
                    setWallpaperColor={setWallpaperColor}
                    theme={theme}
                    backgroundsDark={backgroundsDark}
                    backgroundsLight={backgroundsLight}
                    isWallpaperHovering={isWallpaperHovering}
                    setIsWallpaperHovering={setIsWallpaperHovering}
                    selectedWallpaper={selectedWallpaper}
                    setSelectedWallpaper={setSelectedWallpaper}
                  />
                )
              })
            : backgroundsLight.map(background => {
                return (
                  <ChatWallpaperColor
                    key={uuidv4()}
                    standard={background.standard}
                    backgroundColor={background.backgroundColor}
                    selected={background.selected}
                    wallpaperColor={wallpaperColor}
                    setWallpaperColor={setWallpaperColor}
                    theme={theme}
                    backgroundsDark={backgroundsDark}
                    backgroundsLight={backgroundsLight}
                    isWallpaperHovering={isWallpaperHovering}
                    setIsWallpaperHovering={setIsWallpaperHovering}
                    selectedWallpaper={selectedWallpaper}
                    setSelectedWallpaper={setSelectedWallpaper}
                  />
                )
              })}
        </div>
      </div>
    </div>
  )
}
