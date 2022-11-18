import React from "react"
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import SectionHeader from "../SectionHeader/SectionHeader"
import ChatWallpaperColor from "../ChatWallpaperColor/ChatWallpaperColor"
import "./chatWallpaper.css"

const backgrounds = [
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

export default function ChatWallpaper() {
  return (
    <div className="chat-wallpaper-container">
      <div className="chat-wallpaper-header">
        <SectionHeader header={"Set Chat Wallpaper"} />
      </div>
      <div className="chat-wallpaper-body">
        <div className="set-doodle-background">
          <CustomCheckbox />
          <SecondaryHeaderText
            headerType={"chat"}
            text={"Add WhatsApp Doodles"}
          />
        </div>
        <div className="backgrounds-grid">
          {backgrounds.map(background => {
            return (
              <ChatWallpaperColor
                standard={background.standard}
                backgroundColor={background.backgroundColor}
                selected={background.selected}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
