import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../server/NavBar'

const Server = () => {
  return (
    <div>
        <NavBar />
        <main><Outlet /></main>
        <footer>Footer server</footer>
    </div>
  )
}

export default Server