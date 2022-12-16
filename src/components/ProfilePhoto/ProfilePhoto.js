import React from "react"

export default function ProfilePhoto({ navProfilePhoto, url }) {
  let style = {}

  if (navProfilePhoto === "chat") {
    style = {
      borderRadius: "50%",
      width: "49px",
      height: "49px",
      objectFit: "cover"
    }
  } else if (navProfilePhoto === "nav") {
    style = {
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      objectFit: "cover"
    }
  } else if (navProfilePhoto === "user") {
    style = {
      borderRadius: "50%",
      width: "200px",
      height: "200px",
      objectFit: "cover"
    }
  } else if (navProfilePhoto === "settings") {
    style = {
      borderRadius: "50%",
      width: "82px",
      height: "82px",
      objectFit: "cover"
    }
  } else if (navProfilePhoto === "starred") {
    style = {
      borderRadius: "50%",
      width: "26px",
      height: "26px",
      objectFit: "cover"
    }
  }

  return <img style={style} src={url}></img>
}
