import React from 'react'
import { BsFillTelephoneFill, BsFillChatSquareTextFill } from 'react-icons/bs'

export const Players = ({ player }) => {
  return (
    <div className='row'>
      <div className='col-sm-3'>
        <div className='playerName'>{player.name}</div>
      </div>
      <div className='col-sm-3'>
        <div className='callsPlayer'>llamar</div>
      </div>
      <div className='col-sm-3'>
        <div className='iconsPlayer'>
          <BsFillTelephoneFill /> <BsFillChatSquareTextFill />
        </div>
      </div>
    </div>
  )
}
