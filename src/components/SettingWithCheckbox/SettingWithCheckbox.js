import React from "react"
import PrimaryHeaderText from "../PrimaryHeaderText/PrimaryHeaderText"
import SecondaryHeaderText from "../SecondaryHeaderText/SecondaryHeaderText"
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox"
import "./settingWithCheckbox.css"

export default function SettingWithCheckbox(props) {
  const { primaryText, secondaryText, hide, ischecked, relative } = props

  if (hide) {
    return (
      <div
        relative={relative ? 1 : 0}
        hide={hide ? 1 : 0}
        className="setting-with-checkbox-setting hide"
      >
        <div className="setting-with-checkbox-option">
          <div className="setting-with-checkbox-option-header">
            <PrimaryHeaderText
              headerType={"setting-primary"}
              text={primaryText}
            />
            <SecondaryHeaderText
              headerType={"setting-secondary"}
              text={secondaryText}
            />
          </div>
          <div className="setting-with-checkbox-checkbox">
            <CustomCheckbox className="a" ischecked={ischecked} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div
        relative={relative ? 1 : 0}
        hide={hide ? 1 : 0}
        className="setting-with-checkbox-setting"
      >
        <div className="setting-with-checkbox-option">
          <div className="setting-with-checkbox-option-header">
            <PrimaryHeaderText
              headerType={"setting-primary"}
              text={primaryText}
            />
            <SecondaryHeaderText
              headerType={"setting-secondary"}
              text={secondaryText}
            />
          </div>
          <div className="setting-with-checkbox-checkbox">
            <CustomCheckbox className="a" ischecked={ischecked} />
          </div>
        </div>
      </div>
    )
  }
}
