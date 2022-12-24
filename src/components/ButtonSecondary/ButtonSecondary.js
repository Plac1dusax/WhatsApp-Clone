import React from "react"
import "./buttonSecondary.css"

export default function ButtonSecondary({ buttonSecondary }) {
  function handleButtonClick(e) {
    switch (e.target.textContent) {
      case "CANCEL":
        handleCancelButton(e)
        break
    }
  }

  function handleCancelButton(e) {
    const container = e.target.closest(".chat-message")
    const alert = container.querySelector(".custom-alert")
    const overlay = container.querySelector(".overlay")

    alert.classList.remove("custom-alert-show")
    alert.classList.add("custom-alert-hide")
    overlay.style.display = "none"
  }

  return (
    <button onClick={handleButtonClick} className="button-secondary">
      {buttonSecondary}
    </button>
  )
}
