import React from 'react'

export default function Item (props) {
  const {item} = props

  return (
    <div className='three columns'>
      <span><strong>Brand {item.brand}</strong>Item</span><br />
      <span>size X (Used)</span><br />
      <button>View item</button>
    </div>
  )
}
