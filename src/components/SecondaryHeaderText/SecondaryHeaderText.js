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
  } else if (headerType === "request-account-secondary") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      fontWeight: "light"
    }

    renderText = text
  } else if (headerType === "chat-section-main") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      fontWeight: "400"
    }

    renderText = text
  } else if (headerType === "emoji-header") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "14px",
      fontWeight: "400"
    }

    renderText = text
  } else if (headerType === "gif-header") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "13px",
      fontWeight: "bold"
    }

    renderText = text
  } else if (headerType === "sticker-header") {
    style = {
      color: "var(--secondary-header-text-dark)",
      fontSize: "13px",
      fontWeight: "bold"
    }

    renderText = text
  }

  return <div style={style}>{renderText}</div>
}
