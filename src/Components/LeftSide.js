import React, { useState } from "react"
import "../Styles/leftside.css"
import HeaderLeft from "./HeaderLeft"
import "bootstrap-icons/font/bootstrap-icons.css"

const LeftSide = (props) => {
  const [leftActive, setLeftActive] = useState(false)
  const toggleLeftActive = () => {
    setLeftActive(!leftActive)
  }

  return (
    <div className={`left-side ${leftActive ? "active" : null}`}>
      <HeaderLeft
        toggleLeftActive={toggleLeftActive}
        toggleTopActive={props.toggleTopActive}
      />
      <nav className="left-menu">
        <div className="menu-item">
          <i className="bi bi-speedometer2"></i>
          <div className="menu-item-link">Dashboard</div>
        </div>
        <div className="menu-title">Components</div>
        <div className="menu-item">
          <i className="bi bi-people"></i>
          <div className="menu-item-link">Attendees</div>
        </div>
        <div className="menu-item">
          <i className="bi bi-list-check"></i>
          <div className="menu-item-link">Agendas</div>
        </div>
        <div className="menu-item">
          <i className="bi bi-file-earmark-bar-graph"></i>
          <div className="menu-item-link">Polls</div>
        </div>
        <div className="menu-item">
          <i className="bi bi-bell"></i>
          <div className="menu-item-link">Notification</div>
        </div>
        <div className="menu-item">
          <i className="bi bi-bell"></i>
          <div className="menu-item-link">Bulk Mail</div>
        </div>
        <div className="menu-item">
          <i className="bi bi-people"></i>
          <div className="menu-item-link">Press Room</div>
        </div>
        <div className="menu-title">Informations</div>
        <div className="menu-item">
          <i className="bi bi-info-circle"></i>
          <div className="menu-item-link">Informations</div>
        </div>
      </nav>
    </div>
  )
}

export default LeftSide
