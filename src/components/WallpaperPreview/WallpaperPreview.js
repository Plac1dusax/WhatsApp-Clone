import React from "react"
import Navbar from "../Navbar/Navbar"
import "./wallpaperPreview.css"

export default function WallpaperPreview(props) {
  const { wallpaperColor, isWallpaperHovering, setIsWallpaperHovering } = props

  return (
    <div className="wallpaper-preview-container">
      <div className="wallpaper-preview-header">
        <Navbar type={"wallpaper-preview"} />
      </div>
      <div
        style={{
          backgroundColor: wallpaperColor,
          transition: "all 0.1s linear"
        }}
        className="wallpaper-preview-body"
      ></div>
      <div className="wallpaper-preview-footer"></div>
    </div>
  )
}
