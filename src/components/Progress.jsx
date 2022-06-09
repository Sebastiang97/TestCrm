import React from 'react'
import '../styles/progress.css'

export const Progress = ({ percentage }) => {
  const deg = percentage * 3.6
  const background = {
    background: `conic-gradient(rgb(77, 91, 249)${deg}deg, rgb(202, 220, 255)${deg}deg)`,
  }

  return (
    <>
      <div className='row'>
        <div class='cont'>
          <div className='col-lg-4'>
            <div class='circular-progress' style={background}>
              <div class='value-cont'>{percentage}%</div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='contentsProgress '>
              <div className='title'>Leads obtenidos</div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='contentsProgress '>
              <div className='calls'>{percentage}/100</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
