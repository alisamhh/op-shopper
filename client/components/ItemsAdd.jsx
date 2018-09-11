import React from 'react'
import Select from 'react-select'

import api from '../api'

import GoHome from './GoHome'

import itemData from '../../public/data/itemData.json'

class ItemsAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: {},
      subcategory: {},
      item: {},
      size: {},
      condition: {},
      brand: {},
      color: {},
      user_id: {}
    }
  }

  handleChange = (selectedOption, item) => {
    this.setState({ 
      [item]: selectedOption
    })
  }

  handleClick = (e) => {
    api.addItem(this.state)
  }

  render () {
    const itemDataKeys = Object.keys(itemData)

    return (
      <div>
        <h3>Add item</h3>
        {itemDataKeys.map((key) => {
          return (<div key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}
              <Select
              name={key}
              value={this.state[key]}
              onChange={(selectedOption) => this.handleChange(selectedOption, key)}
              options={itemData[key].filter((i) => {
                return !i.link || (this.state.category.value && i.link === this.state.category.value)
              })}
            /> 
          </div>)
        })}
        <button onClick={this.handleClick}>Add Item</button>
        <GoHome />
      </div>
    )
  }
}

export default ItemsAdd
