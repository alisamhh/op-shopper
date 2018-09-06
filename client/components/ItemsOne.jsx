import React from 'react'
import { Link } from 'react-router-dom'

import api from '../api'

import ItemTable from './ItemTable'
import GoHome from './GoHome'

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
    const item = this.state.item
    return (
      <div>
        <ItemTable item={item}/>
        <button>Edit</button>
        <Link to={`/delete/${item.id}`}>
          <button>Delete</button>
        </Link>
        <GoHome />
      </div>
    )
  }
}

export default ItemsOne
