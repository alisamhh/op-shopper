import React from 'react'
import { Link } from 'react-router-dom'

import api from '../api'

import ItemTable from './ItemTable'
import GoogleImage from './GoogleImage'
import GoHome from './GoHome'

class ItemView extends React.Component {
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
    const image = (item.item || item.brand || item.color) && <GoogleImage item={item} imageurl={item.imageurl} />
    return (
      <div>
        <ItemTable item={item}/>
        {image}
        <Link to={`/edit/${item.id}`}>
          <button>Edit</button>
        </Link>
        <Link to={`/delete/${item.id}`}>
          <button>Delete</button>
        </Link>
        <GoHome />
      </div>
    )
  }
}

export default ItemView
