import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home/index'
import Survey from './pages/Survey/index'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey/:questionNumber" element={<Survey />} />
      <Route path="/results" element={<Results />} />
      <Route path="/freelances" element={<Freelances />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
