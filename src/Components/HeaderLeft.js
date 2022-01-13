import React from "react"
import "../Styles/headers.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from "react-router-dom"

const HeaderLeft = (props) => {
  return (
    <div className="header-left">
      <Link to="/" className="logo">
        ADSD
      </Link>
      <div className="header-left-buttons">
        <div onClick={props.toggleLeftActive} className="burger">
          <i className="bi bi-list"></i>
        </div>
        <div onClick={props.toggleTopActive} className="dots">
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
    </div>
  )
}

export default HeaderLeft
