import React from "react"
import routes from "./routes"
import { useRoutes } from "react-router-dom"
import Topbar from "./compnents/topbar/Topbar"
import Sidebar from "./compnents/Sidebar/Sidebar"
import './app.css'






function App() {

  let router = useRoutes(routes)

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  )
}

export default App
