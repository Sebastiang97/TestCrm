import React from 'react'
import '../styles/search.css'
import { AiOutlineSearch } from 'react-icons/ai'

export const IconsSearch = () => {
  return <AiOutlineSearch /> + Search
}

export const Search = () => {
  return (
    <div className=' d-flex justify-content-between my-3'>
      <div className='search'>
        <input type='text' placeholder='search' />
      </div>

      <div className='search'>
        <select>
          <option defaultValue='selected'>Wed, 20 May</option>
          <option value='1'>One</option>
        </select>
      </div>
    </div>
  )
}
