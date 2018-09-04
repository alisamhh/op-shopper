import React from 'react'

export default function Item (props) {
  const {item} = props

  return (
    <div className='three columns'>
      <span><strong>{item.brand} </strong>{item.item}</span><br />
      <span>Size {item.size} ({item.condition})</span><br />
      <button>View item</button>
    </div>
  )
}
