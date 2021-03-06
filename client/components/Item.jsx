import React from 'react'
import { Link } from 'react-router-dom'

export default function Item (props) {
  const {item} = props

  return (
    <div className='three columns item'>
      <span><strong>{item.brand} </strong>{item.item}</span><br />
      <span>Size {item.size} ({item.condition})</span><br />
      <Link to={`/id/${item.id}`}>
        <button>View item</button>
      </Link>
    </div>
  )
}
