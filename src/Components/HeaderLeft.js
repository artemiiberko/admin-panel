import React from "react"
import "../Styles/headers.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const HeaderLeft = () => {
  return (
    <div className="header-left">
      <div className="logo">ADSD</div>
      <div className="burger">
        <i class="bi bi-list"></i>
      </div>
    </div>
  )
}

export default HeaderLeft
