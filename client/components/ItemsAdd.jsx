import React from 'react'

import api from '../api'

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
      brand: ['Cotton On', 'Country Road', 'Dotti', 'Factorie', 'Forever New', 'Glassons', 'Jay Jays', 'Jeans West', 'Just Jeans', 'Kookai', 'Top Shop']
    }
    const pleaseSelect = <option value="">Please select...</option>
    return (
      <div>
        <h3>Add item</h3>
        Category:
        <select value={this.state.category} name="category" onChange={this.handleChange}>
          {pleaseSelect}
          {dataLists.category.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select><br />
        Subcategory:
        <select value={this.state.subcategory} name="subcategory" onChange={this.handleChange}>
          {pleaseSelect}
          {dataLists.subcategory.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select><br />
        Item:
        <select value={this.state.item} name="item" onChange={this.handleChange}>
          {pleaseSelect}
          {dataLists.item.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select><br />
        Size:
        <select value={this.state.size} name="size" onChange={this.handleChange}>
          {pleaseSelect}
          {dataLists.size.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select><br />
        Condition:
        <select value={this.state.condition} name="condition" onChange={this.handleChange}>
          {pleaseSelect}
          {dataLists.condition.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select><br />
        Brand:
        <select value={this.state.brand} name="brand" onChange={this.handleChange}>
          {pleaseSelect}
          {dataLists.brand.map((item) => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select><br />
        <input type="hidden" name="user_id" />
        <button onClick={this.handleClick}>Add Item</button>
      </div>
    )
  }
}

export default ItemsAdd
