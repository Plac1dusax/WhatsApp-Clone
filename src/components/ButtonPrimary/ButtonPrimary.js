import React from "react"
import "./buttonPrimary.css"

export default function ButtonPrimary({ buttonPrimary }) {
  return (
    <button className="button-primary" type="click">
      {buttonPrimary}
    </button>
  )
}
