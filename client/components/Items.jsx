import React from 'react'

import Item from './Item'

import { getItems } from '../api'

class Items extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount () {
    getItems()
      .then(response => {
        this.setState({
          items: response.body.items
        })
      })
  }

  render () {
    console.log(typeof this.state.items)
    return (
      <div>
        <h1>Test</h1>
        <div className='items row'>
          {this.state.items.map(item => {
            return <Item key={item.id} item={item} />
          })}
        </div>
      </div>
    )
  }
}

export default Items

{ /* <strong>{item.brand}</strong> {item.item} <br />
size {item.size} ({item.condition}) <br />
<Link to={`/items/${item.id}`}><button>View item</button></Link> */ }
