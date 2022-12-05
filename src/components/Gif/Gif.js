import React from "react"
import "./gif.css"

export default function Gif({ gifname, link }) {
  return <img className="gif-img" gifname={gifname} src={link} />
}
