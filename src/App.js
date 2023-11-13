import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/section/Header'
import Footer from './components/section/Footer'
import Main from './components/section/Main'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter >
  )
}

export default App