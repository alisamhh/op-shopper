import React from 'react'
import Select from 'react-select'

import api from '../api'

import GoHome from './GoHome'

import dataLists from '../../public/data/itemData.json'

class ItemsAdd extends React.Component {
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

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    api.addItem(this.state)
  }

  render () {
    const dataListsKeys = Object.keys(dataLists)

    return (
      <div>
        <h3>Add item</h3>
        {dataListsKeys.map((item) => {
          return <div key={item}>{item.charAt(0).toUpperCase() + item.slice(1) + ' '}
            <Select
              name={item}
              value={this.state[item]}
              onChange={this.handleChange}
              options={dataLists[item].map((i) => {
                return {
                  key: {i},
                  value: {i},
                  label: {i}
                }
              })}
            />
            {/*              <select value={this.state[item]} name={item} onChange={this.handleChange}>
              <option value="">Please select...</option>
              {dataLists[item].map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>  */}
          </div>
        })}
        <input type="hidden" name="user_id" />
        <button onClick={this.handleClick}>Add Item</button>
        <GoHome />
      </div>
    )
  }
}

export default ItemsAdd
