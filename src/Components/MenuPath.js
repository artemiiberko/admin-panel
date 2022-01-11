import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

const MenuPath = () => {
  return (
    <div className="menu-path">
      <div className="current-page">Attendees</div>
      <pre> | </pre>
      <div className="page-path">
        <i class="bi bi-house-door"></i>
        <pre> - </pre>Attendees<pre> - </pre>Attendees List
      </div>
    </div>
  )
}

export default MenuPath
