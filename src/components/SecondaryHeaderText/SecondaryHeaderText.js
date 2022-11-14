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
  } else if (headerType === "setting-secondary-light") {
    style = {
      color: "var(--secondary-header-light-text-color-dark)",
      fontSize: "14px",
      fontWeight: "300"
    }

    renderText = text
  }

  return <div style={style}>{renderText}</div>
}
