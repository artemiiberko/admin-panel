import React from "react"
import "../Styles/leftside.css"
import HeaderLeft from "./HeaderLeft"

const LeftSide = () => {
  return (
    <div className="left-side">
      <HeaderLeft />
      <nav className="left-menu">
        <div className="menu-item">
          <div className="menu-item-link">Dashboard</div>
        </div>
        <div className="menu-title">Components</div>
        <div className="menu-item">
          <div className="menu-item-link">Attendees</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-link">Agendas</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-link">Polls</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-link">Notification</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-link">Bulk Mail</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-link">Press Room</div>
        </div>
        <div className="menu-title">Informations</div>
        <div className="menu-item">
          <div className="menu-item-link">Informations</div>
        </div>
      </nav>
    </div>
  )
}

export default LeftSide
