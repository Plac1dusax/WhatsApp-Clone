import React from "react"
import Navbar from "../Navbar/Navbar"
import "./wallpaperPreview.css"

export default function WallpaperPreview(props) {
  const { wallpaperColor, doodles, setDoodles } = props
  let styles = {}

  if (!doodles) {
    styles = {
      display: "flex",
      background: `${wallpaperColor} url(../../wpBackgroundDoodle/wp-background-doodle.png) repeat`,
      backgroundBlendMode: "overlay",
      height: "100%"
    }
  } else {
    styles = {
      display: "flex",
      backgroundColor: `${wallpaperColor}`,
      height: "100%"
    }
  }

  return (
    <div className="wallpaper-preview-container">
      <div className="wallpaper-preview-header">
        <Navbar type={"wallpaper-preview"} />
      </div>
      <div style={styles} className="wallpaper-preview-body"></div>
      <div className="wallpaper-preview-footer"></div>
    </div>
  )
}
