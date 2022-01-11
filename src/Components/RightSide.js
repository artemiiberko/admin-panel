import React from "react"
import HeaderRight from "./HeaderRight"
import "../Styles/rightside.css"
import Attendees from "./Attendees"
import MenuPath from "./MenuPath"

const RightSide = (props) => {
  return (
    <div className="right-side">
      <HeaderRight topActive={props.topActive} />
      <MenuPath />
      <Attendees />
    </div>
  )
}

export default RightSide
