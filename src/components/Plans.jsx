import React from 'react'
import { Plan } from './Plan'
import '../styles/plan.css'

export const Plans = () => {
  return (
    <div className='d-flex flex-wrap align-content-start mx-3'>
      <Plan
        background='rect1'
        plan={30}
        title='leads de primer contacto'
        calls={30}
      />
      <Plan
        background='rect2'
        plan={30}
        title='leads de primer contacto'
        calls={30}
      />
      <Plan
        background='rect3'
        plan={30}
        title='leads de primer contacto'
        calls={30}
      />
    </div>
  )
}
