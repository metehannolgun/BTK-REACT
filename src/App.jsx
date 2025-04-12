import React from 'react'
import AppRoutes from './AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  )
}

export default App