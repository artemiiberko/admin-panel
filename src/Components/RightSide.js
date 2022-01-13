import React from "react"
import HeaderRight from "./HeaderRight"
import "../Styles/rightside.css"
import Attendees from "./Attendees"
import MenuPath from "./MenuPath"
import { Routes, Route } from "react-router-dom"
import DashBoard from "./DashBoard"
import Agendas from "./Agendas"
import Polls from "./Polls"
import Notification from "./Notification"
import Bulkmail from "./Bulkmail"
import Pressroom from "./Pressroom"
import Informations from "./Informations"

const RightSide = (props) => {
  return (
    <div className="right-side">
      <HeaderRight topActive={props.topActive} />
      <MenuPath />
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/attendees" element={<Attendees />} />
        <Route path="/agendas" element={<Agendas />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/bulkmail" element={<Bulkmail />} />
        <Route path="/pressroom" element={<Pressroom />} />
        <Route path="/informations" element={<Informations />} />
      </Routes>
    </div>
  )
}

export default RightSide
