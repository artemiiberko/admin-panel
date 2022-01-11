import { useState } from "react"
import "./App.css"
import LeftSide from "./Components/LeftSide"
import RightSide from "./Components/RightSide"

function App() {
  const [topActive, setTopActive] = useState(false)
  const toggleTopActive = () => {
    setTopActive(!topActive)
  }
  return (
    <div className="App">
      <LeftSide toggleTopActive={toggleTopActive} />
      <RightSide topActive={topActive} />
    </div>
  )
}

export default App
