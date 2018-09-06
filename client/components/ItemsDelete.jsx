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
    const item = this.state.item
    return (
      <div>
        <h3>Do you really want to delete below item?</h3>
        <ItemTable item={item}/>
        <button>Delete</button>
        <GoHome />
      </div>
    )
  }
}

export default ItemsDelete
