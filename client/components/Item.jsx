import React from 'react'

class Item extends React.Component {
  render () {
    return (
      <div class='three columns'>
        <span><strong>Brand </strong>Item</span><br />
        <span>size X (Used)</span><br />
        <button>View item</button>
      </div>
    )
  }
}

export default Item
