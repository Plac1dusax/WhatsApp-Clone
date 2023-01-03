import React from "react"
import "./archived.css"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import { ReactComponent as ArchivedLogo } from "../../icons/archived-logo.svg"

export default function Archived({ archivedActive, setArchivedActive }) {
  function handleShowArchivedSection() {
    if (!archivedActive) return setArchivedActive(!archivedActive)
  }

  return (
    <div
      onClick={handleShowArchivedSection}
      className="archived-section-wrapper"
    >
      <div className="archived-logo">
        <ArchivedLogo />
      </div>
      <PrimaryHeaderText headerType={"archived"} text={"Archived"} />
    </div>
  )
}
