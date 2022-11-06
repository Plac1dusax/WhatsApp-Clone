import React from "react"

export default function PrimaryHeaderText(props) {
  const { headerType, text } = props

  let style = {}

  let renderText = ""

  if (headerType === "archived") {
    style = {
      color: "var(--primary-header-text-dark)",
      marginLeft: "1.5rem",
      fontSize: "1.2rem"
    }

    renderText = "Archived"
  }

  if (headerType === "chat") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "18px"
    }

    renderText = text
  }

  if (headerType === "section") {
    style = {
      color: "var(--primary-header-text-dark)",
      fontSize: "24px",
      fontWeight: "bold"
    }

    renderText = text
  }

  return <div style={style}>{renderText}</div>
}
