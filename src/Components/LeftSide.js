import React from "react"
import "../Styles/leftside.css"
import HeaderLeft from "./HeaderLeft"
import "bootstrap-icons/font/bootstrap-icons.css"

const LeftSide = () => {
  return (
    <div className="left-side">
      <HeaderLeft />
      <nav className="left-menu">
        <div className="menu-item">
          <i class="bi bi-speedometer2"></i>
          <div className="menu-item-link">Dashboard</div>
        </div>
        <div className="menu-title">Components</div>
        <div className="menu-item">
          <i class="bi bi-people"></i>
          <div className="menu-item-link">Attendees</div>
        </div>
        <div className="menu-item">
          <i class="bi bi-list-check"></i>
          <div className="menu-item-link">Agendas</div>
        </div>
        <div className="menu-item">
          <i class="bi bi-file-earmark-bar-graph"></i>
          <div className="menu-item-link">Polls</div>
        </div>
        <div className="menu-item">
          <i class="bi bi-bell"></i>
          <div className="menu-item-link">Notification</div>
        </div>
        <div className="menu-item">
          <i class="bi bi-bell"></i>
          <div className="menu-item-link">Bulk Mail</div>
        </div>
        <div className="menu-item">
          <i class="bi bi-people"></i>
          <div className="menu-item-link">Press Room</div>
        </div>
        <div className="menu-title">Informations</div>
        <div className="menu-item">
          <i class="bi bi-info-circle"></i>
          <div className="menu-item-link">Informations</div>
        </div>
      </nav>
    </div>
  )
}

export default LeftSide
