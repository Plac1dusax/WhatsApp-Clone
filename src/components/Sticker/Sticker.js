import React from "react"
import "./sticker.css"

export default function Sticker({ stickername, link }) {
  return <img className="sticker-img" stickername={stickername} src={link} />
}
