import React from 'react'
import { usePlayerAll } from '../hooks/usePlayerAll'
import { Link } from 'react-router-dom'
import '../styles/listsplayer.css'
import { Players } from './Players'

export const ListsPlayers = () => {
  const { players, loading } = usePlayerAll()
  console.log(players)
  return (
    <div className='listPlayers'>
      <div className='h4'>Conexiones de agenda para hoy</div>
      {loading ? (
        <p>cargando....</p>
      ) : (
        players.map((player) => (
          <Link
            key={player.account_id}
            className='list-group-item'
            to={`/player/${player.account_id}`}
          >
            <Players player={player} />
          </Link>
        ))
      )}
    </div>
  )
}
