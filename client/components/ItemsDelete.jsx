import React from 'react'

import api from '../api'

import ItemTable from './ItemTable'
import GoHome from './GoHome'

class ItemsDelete extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      item: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    api.getItem(this.props.match.params.id)
      .then(response => {
        this.setState({
          item: response.body.item
        })
      })
  }

  handleClick (e) {
    api.deleteItem(this.props.match.params.id)
  }

  render () {
    const item = this.state.item
    return (
      <div>
        <h3>Do you really want to delete below item?</h3>
        <ItemTable item={item}/>
        <button onClick={this.handleClick}>Delete</button>
        <GoHome />
      </div>
    )
  }
}

export default ItemsDelete
