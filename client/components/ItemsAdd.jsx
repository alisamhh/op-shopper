import React from 'react'

import api from '../api'

import GoHome from './GoHome'

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
    const dataLists = {
      category: ['Clothing', 'Appliances', 'Books', 'Toys', 'Bedding'],
      subcategory: ['Tops', 'Bottoms', 'Footwear'],
      item: ['Tee', 'Shirt', 'Crop top', 'Dress', 'Sweater', 'Jacket'],
      size: ['6', '8', '10', '12', '14', '16', '18', '20'],
      condition: ['Used', 'New'],
      brand: ['Cotton On', 'Country Road', 'Dotti', 'Factorie', 'Forever New', 'Glassons', 'Jay Jays', 'Jeans West', 'Just Jeans', 'Kookai', 'Top Shop'],
      color: ['Black', 'White', 'Grey', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink']
    }
    const dataListsKeys = Object.keys(dataLists)

    return (
      <div>
        <h3>Add item</h3>
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
        <button onClick={this.handleClick}>Add Item</button>
        <GoHome />
      </div>
    )
  }
}

export default ItemsAdd
