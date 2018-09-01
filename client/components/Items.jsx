import React from 'react'

import Item from './Item'

const Items = (props) => {
  return (
    <div className="items">
      <h1>Test</h1>
      <Item />
    </div>
  )
}

export default Items

{/* <strong>{item.brand}</strong> {item.item} <br />
size {item.size} ({item.condition}) <br />
<Link to={`/items/${item.id}`}><button>View item</button></Link> */}