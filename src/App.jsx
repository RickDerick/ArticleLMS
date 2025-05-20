import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/Login"
import RegisterPage from './pages/Register'
import HomePage from './pages/HomePage'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
