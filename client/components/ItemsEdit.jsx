import React from 'react'

import api from '../api'

import GoHome from './GoHome'

import dataLists from '../../public/data/itemData.json'

class ItemsEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: '',
      subcategory: '',
      item: '',
      size: '',
      condition: '',
      brand: '',
      user_id: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    api.getItem(this.props.match.params.id)
      .then(response => {
        this.setState({
          category: response.body.item.category,
          subcategory: response.body.item.subcategory,
          item: response.body.item.item,
          size: response.body.item.size,
          condition: response.body.item.condition,
          brand: response.body.item.brand
        })
      })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    api.editItem(this.props.match.params.id, this.state)
  }

  render () {
    const dataListsKeys = Object.keys(dataLists)

    return (
      <div>
        <h3>Edit item #{this.props.match.params.id}</h3>
        {dataListsKeys.map((item) => {
          return <div key={item}>{item.charAt(0).toUpperCase() + item.slice(1) + ' '}
            <select value={this.state[item]} name={item} onChange={this.handleChange}>
              <option value="">Please select...</option>
              {dataLists[item].map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
          </div>
        })}
        <input type="hidden" name="user_id" />
        <button onClick={this.handleClick}>Edit Item</button>
        <GoHome />
      </div>
    )
  }
}

export default ItemsEdit
