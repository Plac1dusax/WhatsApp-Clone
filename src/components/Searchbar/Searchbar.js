import React from "react"
import "./searchbar.css"

export default function Searchbar({ type }) {
  let placeholder = ""
  let styleInput = {}
  let styleArrowAndSearchbar = {}

  if (type === "search friend") {
    styleInput = {
      border: "none",
      backgroundColor: "var(--navbar-theme-color-dark)",
      color: "var(--searchbar-text-color-dark)",
      outline: "none",

      width: "100%",
      marginTop: "0.2rem",
      padding: "0.5rem 3rem",
      borderRadius: "0.6em"
    }

    styleArrowAndSearchbar = {
      position: "absolute",
      top: "20%",
      left: "3%",
      color: "var(--searchbar-text-color-dark)"
    }

    placeholder = "Search or start a new chat"
  } else if (type === "new chat") {
    styleInput = {
      border: "none",
      backgroundColor: "var(--navbar-theme-color-dark)",
      color: "var(--searchbar-text-color-dark)",
      outline: "none",

      width: "100%",
      marginTop: "0.4rem",
      padding: "0.7rem 3rem",
      borderRadius: "0.6em"
    }

    styleArrowAndSearchbar = {
      position: "absolute",
      top: "25%",
      left: "3%",
      color: "var(--searchbar-text-color-dark)"
    }

    placeholder = "Search contacts"
  } else if (type === "reaction-search") {
    styleInput = {
      border: "none",
      outline: "none",
      margin: "0",
      padding: "10px 5px",
      width: "950px",
      borderRadius: "0.2em",
      backgroundColor: "var(--panel-background)"
    }

    styleArrowAndSearchbar = {
      display: "none"
    }

    placeholder = "Search Emoji"
  }
  return (
    <>
      <div className="searchbar-wrapper">
        <input style={styleInput} placeholder={placeholder}></input>
        <div style={styleArrowAndSearchbar} className="search-icon">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
            ></path>
          </svg>
        </div>
        <div style={styleArrowAndSearchbar} className="back-arrow">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  )
}
