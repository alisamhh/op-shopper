import React from 'react'

import Item from './Item'

const Items = (props) => {
  return (
    <div>
      <h1>Test</h1>
      <div className='items row'>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Items

{/* <strong>{item.brand}</strong> {item.item} <br />
size {item.size} ({item.condition}) <br />
<Link to={`/items/${item.id}`}><button>View item</button></Link> */}