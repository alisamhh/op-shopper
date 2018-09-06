import React from 'react'

import api from '../api'

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
        <h3>Item #{item.id}</h3>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{item.id}</td>
            </tr>
            <tr>
              <th>Condition</th>
              <td>{item.condition}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{item.category}</td>
            </tr>
            <tr>
              <th>Subcategory</th>
              <td>{item.subcategory}</td>
            </tr>
            <tr>
              <th>Item</th>
              <td>{item.item}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{item.size}</td>
            </tr>
            <tr>
              <th>Brand</th>
              <td>{item.brand}</td>
            </tr>
          </tbody>
        </table>
        <div className="editDel">
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <GoHome />
      </div>
    )
  }
}

export default ItemsOne
