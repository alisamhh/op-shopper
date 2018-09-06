import React from 'react'
import { Link } from 'react-router-dom'

const GoHome = () => {
  return (
    <div className='goHome'>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  )
}

export default GoHome
