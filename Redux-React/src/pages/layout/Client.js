import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/client/Header'

const Client = () => {
  return (
      <div>
          <Header />
          <main><Outlet /></main>
          <footer>footer</footer>
      </div>
  )
}

export default Client