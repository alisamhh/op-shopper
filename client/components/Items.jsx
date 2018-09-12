import React from 'react'
import { Link } from 'react-router-dom'

import Item from './Item'

import api from '../api'

class Items extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount () {
    api.getItems()
      .then(response => {
        this.setState({
          items: response.body.items
        })
      })
  }

  render () {
    return (
      <div>
        <h1>Items</h1>
        <div className='row'>
          {this.state.items.map((item, i) => {
            return <Item key={item.id} item={item} />
          })}
        </div>
        <Link to="/add">
          <button>Add item</button>
        </Link>
      </div>
    )
  }
}

export default Items
