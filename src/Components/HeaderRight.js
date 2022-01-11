import React from "react"
import { Avatar } from "@mui/material"
import "../Styles/headers.css"
import avatar from "../img/user_avtar.png"

const HeaderRight = (props) => {
  return (
    <div className={`header-right ${props.topActive ? "active" : null}`}>
      <Avatar sizes="70px" src={avatar} style={{ display: "flex" }} />
    </div>
  )
}

export default HeaderRight
