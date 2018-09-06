import React from 'react'

import api from '../api'

class ItemsOne extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      item: {}
    }
  }

  componentDidMount () {
    api.getItem(this.state.item.id)
      .then(response => {
        this.setState({
          item: response.body
        })
      })
  }

  render () {
    return (
      <div>
        <h3>View item</h3>
        <p>{this.state.item.brand}</p>
      </div>
    )
  }
}

export default ItemsOne
