import React from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import MiniSectionHeader from "../MiniSectionHeader/MiniSectionHeader"
import "./privacy.css"

export default function Privacy() {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <SectionHeader header={"Privacy"} />
      </div>
      <div className="privacy-body">
        <MiniSectionHeader text={"Hello world."} />
      </div>
    </div>
  )
}
