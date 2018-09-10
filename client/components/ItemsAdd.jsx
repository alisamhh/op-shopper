import React from 'react'
import Select from 'react-select'

import api from '../api'

import GoHome from './GoHome'

import dataLists from '../../public/data/itemData.json'

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
    const dataListsKeys = Object.keys(dataLists)

    return (
      <div>
        <h3>Add item</h3>
        {dataListsKeys.map((item) => {
          return (<div key={item}>{item.charAt(0).toUpperCase() + item.slice(1) + ' '}
              <Select
              name={item}
              value={this.state[item]}
              onChange={(selectedOption) => this.handleChange(selectedOption, item)}
              options={dataLists[item].filter((i) => {
                return !i.link || (this.state.category.value && i.link === this.state.category.value)
              })}
            /> 
          </div>)
        })}
        <input type="hidden" name="user_id" />
        <button onClick={this.handleClick}>Add Item</button>
        <GoHome />
      </div>
    )
  }
}

export default ItemsAdd
