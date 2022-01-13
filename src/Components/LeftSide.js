import React, { useState } from "react"
import "../Styles/leftside.css"
import HeaderLeft from "./HeaderLeft"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from "react-router-dom"

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
        <Link to="/dashboard" className="menu-item">
          <i className="bi bi-speedometer2"></i>
          <div className="menu-item-link">Dashboard</div>
        </Link>
        <div className="menu-title">Components</div>
        <Link to="/attendees" className="menu-item">
          <i className="bi bi-people"></i>
          <div className="menu-item-link">Attendees</div>
        </Link>
        <Link to="/agendas" className="menu-item">
          <i className="bi bi-list-check"></i>
          <div className="menu-item-link">Agendas</div>
        </Link>
        <Link to="/polls" className="menu-item">
          <i className="bi bi-file-earmark-bar-graph"></i>
          <div className="menu-item-link">Polls</div>
        </Link>
        <Link to="/notification" className="menu-item">
          <i className="bi bi-bell"></i>
          <div className="menu-item-link">Notification</div>
        </Link>
        <Link to="/bulkmail" className="menu-item">
          <i className="bi bi-bell"></i>
          <div className="menu-item-link">Bulk Mail</div>
        </Link>
        <Link to="/pressroom" className="menu-item">
          <i className="bi bi-people"></i>
          <div className="menu-item-link">Press Room</div>
        </Link>
        <div className="menu-title">Informations</div>
        <Link to="informations" className="menu-item">
          <i className="bi bi-info-circle"></i>
          <div className="menu-item-link">Informations</div>
        </Link>
      </nav>
    </div>
  )
}

export default LeftSide
