import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import BasketPage from './pages/BasketPage'
import MainPage from './pages/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/sepet" element={<BasketPage/>}/>
    </Routes>
    </BrowserRouter>


  )
}

export default App
