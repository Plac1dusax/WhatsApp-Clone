import React from "react"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"

export default function EmojiContainerHeader({ emojiHeader }) {
  return <SecondaryHeaderText headerType={"emoji-header"} text={emojiHeader} />
}
