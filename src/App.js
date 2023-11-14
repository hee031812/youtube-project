import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/section/Header'
import Footer from './components/section/Footer'
import Main from './components/section/Main'
import Home from './pages/Home'
import Today from './pages/Today'
import Traveler from './pages/Traveler'
import Channel from './pages/Channel'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/traveler" element={<Traveler />} />
          <Route path="/channel/:channelId" element={<Channel />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter >
  )
}

export default App