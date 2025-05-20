import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from "./pages/Login"
import RegisterPage from './pages/Register'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import './App.css'

function App() {
// const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        {/* <Route path="/" element={<Navigate to={isAuthenticated ? <Dashboard /> :  <HomePage />} />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route
            path="/dashboard/*"
            element={isAuthenticated ? <Dashboard /> : <LoginPage />}
          /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
