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
    api.getItem(this.props.match.params.id)
      .then(response => {
        this.setState({
          item: response.body.item
        })
      })
  }

  render () {
    console.log(this.state.item.brand)
    return (
      <div>
        <h3>View item</h3>
        <p>{this.state.item.brand}</p>
      </div>
    )
  }
}

export default ItemsOne
