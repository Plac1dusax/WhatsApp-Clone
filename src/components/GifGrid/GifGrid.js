import React from "react"
import Gif from "../Gif/Gif"
import { v4 as uuidv4 } from "uuid"
import "./gifGrid.css"

export default function GifGrid({ gifArray }) {
  return (
    <div className="gif-grid">
      {gifArray.map(link => {
        return <Gif key={uuidv4()} gifname={link.gifName} link={link.link} />
      })}
    </div>
  )
}
