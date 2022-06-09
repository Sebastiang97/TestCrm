import React from 'react'
import { ListsPlayers } from './ListsPlayers'
import '../styles/home.css'
import { Search } from './Search'
import { Plans } from './Plans'
import { Progress } from './Progress'

export const Home = () => {
  return (
    <div className='home'>
      <div className='col col-lg-12'>
        <Search />
      </div>
      <div className='col-lg-12 my-2'>
        <div className='h3'>Hola Jorge</div>
        <Progress percentage={80} />
      </div>
      <div className='row'>
        <div className='col col-lg-12 d-flex '>
          <ListsPlayers />
          <Plans />
        </div>
      </div>
    </div>
  )
}
