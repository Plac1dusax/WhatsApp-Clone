import React from "react"
import { v4 as uuidv4 } from "uuid"
import "./gifGrid.css"

export default function GifGrid({ gifArray }) {
  return (
    <div className="gif-grid">
      {gifArray.map(link => {
        return <img key={uuidv4()} src={link.link} />
      })}
    </div>
  )
}
