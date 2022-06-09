import React from 'react'
import { BsFillTelephoneFill, BsFillChatSquareTextFill } from 'react-icons/bs'

export const Plan = ({ plan, title, calls, background }) => {
  return (
    <div className='plan rounded mx-2'>
      <div className='row'>
        <div className='col col-lg-5'>
          <div className='rect' id={background}>
            <div className='internal-rect'>
              <p>{plan}</p>
            </div>
          </div>
        </div>
        <div className='col col-lg-5 mx-3'>
          <div className='contents'>
            <div className='title'>{title}</div>
            <div className='calls'>
              <BsFillTelephoneFill /> {calls}
            </div>
            <div className='calls'>
              <BsFillChatSquareTextFill /> {calls}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
