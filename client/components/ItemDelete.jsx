import React from 'react'

import api from '../api'

import ItemTable from './ItemTable'
import GoHome from './GoHome'

class ItemDelete extends React.Component {
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

  handleClick = (e) => {
    api.deleteItem(this.props.match.params.id)
      .then(() => {
        this.props.history.push('/')
      })
  }

  render () {
    const item = this.state.item
    return (
      <div>
        <h2><span>Are you sure you want to delete below item?</span></h2>
        <ItemTable item={item}/>
        <button onClick={this.handleClick}>Delete</button>
        <GoHome />
      </div>
    )
  }
}

export default ItemDelete
