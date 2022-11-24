import React from "react"
import "./inputText.css"

export default function InputText({ type }) {
  if (type === "dm") {
    return (
      <input
        className="dm-input"
        type={"text"}
        placeholder={"Type a message"}
      ></input>
    )
  }
}
