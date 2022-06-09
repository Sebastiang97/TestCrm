import React from 'react'
import { usePlayerAll } from '../hooks/usePlayerAll'

import '../styles/listsmessage.css'

export const ListsMessage = () => {
  const { players, loading } = usePlayerAll()

  return (
    <div className='listsMessage d-flex align-content-center flex-wrap'>
      <div className='contentLine'>
        <div className='line'></div>
      </div>
      <div className='contain'>
        {loading ? (
          <p></p>
        ) : (
          players.map((player) => (
            <div key={player.account_id} className='chat'>
              <div className='header'>
                {/* <div className='icon'>
                  <FaWhatsappSquare />
                </div> */}
                Whatsapp
              </div>
              <div className='name'>{player.team_name}</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
