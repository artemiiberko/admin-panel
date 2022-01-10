import React from "react"
import { Avatar } from "@mui/material"
import "../Styles/headers.css"

const HeaderRight = () => {
  return (
    <div className="header-right">
      <Avatar
        sizes="70px"
        src="./img/user_avtar.png"
        style={{ display: "flex" }}
      />
    </div>
  )
}

export default HeaderRight
