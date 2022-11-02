import React from "react"

export default function FriendsListBorder({ border, wideBorder }) {
  let style = {}

  if (border === "chat" || border === "archived") {
    style = {
      position: "absolute",
      bottom: "0%",
      right: "0",
      width: "82%",
      border: "1px solid var(--border-color-dark)"
    }
  }

  if (wideBorder) {
    style = {
      position: "absolute",
      bottom: "-20%",
      right: "0",
      width: "95%",
      border: "1px solid var(--border-color-dark)"
    }
  }

  return <div style={style}></div>
}
