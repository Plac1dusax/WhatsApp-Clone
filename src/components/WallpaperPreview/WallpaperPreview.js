import React from "react"
import Navbar from "../Navbar/Navbar"
import "./wallpaperPreview.css"

export default function WallpaperPreview() {
  return (
    <div className="wallpaper-preview-container">
      <div className="wallpaper-preview-header">
        <Navbar type={"wallpaper-preview"} />
      </div>
      <div className="wallpaper-preview-body"></div>
      <div className="wallpaper-preview-footer"></div>
    </div>
  )
}
