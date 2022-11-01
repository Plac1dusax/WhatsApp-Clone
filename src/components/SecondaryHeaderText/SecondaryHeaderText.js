import { render } from "@testing-library/react"

export default function SecondaryHeaderText(props) {
  const { headerType, text } = props

  let style = {}
  let renderText = ""

  if (headerType === "chat") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px"
    }

    renderText = text
  }

  return <div style={style}>{renderText}</div>
}
