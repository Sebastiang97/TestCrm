import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { InfoPlayer } from '../components/InfoPlayer'
import { ListsMessage } from '../components/ListsMessage'
import { Navbar } from '../components/Navbar'
import '../styles/approuter.css'

export const AppRouter = () => {
  return (
    <div className='row'>
      <Router>
        <div className='col col-lg-2  text-white'>
          <Navbar />
        </div>
        <div className='col col-lg-11 contenido'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/player/:accountId' element={<InfoPlayer />} />
            <Route
              path='*'
              element={<div className='home'>No encontrado</div>}
            />
          </Routes>
        </div>
        <ListsMessage />
      </Router>
    </div>
  )
}
