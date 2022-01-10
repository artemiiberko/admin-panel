import React from "react"
import HeaderRight from "./HeaderRight"
import "../Styles/rightside.css"
import Attendees from "./Attendees"
import MenuPath from "./MenuPath"

const RightSide = () => {
  return (
    <div className="right-side">
      <HeaderRight />
      <MenuPath />
      <Attendees />
    </div>
  )
}

export default RightSide
