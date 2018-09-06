import React from 'react'

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
