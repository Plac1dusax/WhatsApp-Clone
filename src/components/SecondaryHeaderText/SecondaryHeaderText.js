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
  } else if (headerType === "setting-secondary") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      fontWeight: "light"
    }

    renderText = text
  }

  return <div style={style}>{renderText}</div>
}
