import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Tools from './pages/Tools'
import Dashboard from './pages/Dashboard'
import Strategies from './pages/Strategies'
import ProductPage from './pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/strategies" element={<Strategies />} />
        <Route path="/searchProduct" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
