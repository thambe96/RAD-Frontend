// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './context/authContext'
import Router from './routes'

function App() {
  return (
    <AuthProvider>
      <Router />
    </ AuthProvider>
    
  )
}

export default App
