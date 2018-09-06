import React from 'react'

import api from '../api'

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
    return (
      <div>
        <h3>Edit item</h3>
            Category:
        <select value={this.state.category} name="category" onChange={this.handleChange}>
          <option value="">Please select...</option>
          <option value="Clothing">Clothing</option>
          <option value="Appliances">Appliances</option>
          <option value="Books">Books</option>
          <option value="Toys">Toys</option>
          <option value="Bedding">Bedding</option>
        </select><br />
            Subcategory:
        <select value={this.state.subcategory} name="subcategory" onChange={this.handleChange}>
          <option value="">Please select...</option>
          <option value="Tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="footwear">Footwear</option>
        </select><br />
            Item:
        <select value={this.state.item} name="item" onChange={this.handleChange}>
          <option value="">Please select...</option>
          <option value="Tee">Tee</option>
          <option value="Shirt">Shirt</option>
          <option value="Crop top">Crop top</option>
          <option value="Dress">Dress</option>
          <option value="Sweater">Sweater</option>
          <option value="Jacket">Jacket</option>
        </select><br />
            Size:
        <select value={this.state.size} name="size" onChange={this.handleChange}>
          <option value="">Please select...</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
        </select><br />
            Condition:
        <select value={this.state.condition} name="condition" onChange={this.handleChange}>
          <option value="">Please select...</option>
          <option value="Used">Used</option>
          <option value="New">New</option>
        </select><br />
            Brand:
        <select value={this.state.brand} name="brand" onChange={this.handleChange}>
          <option value="">Please select...</option>
          <option value="Cotton On">Cotton On</option>
          <option value="Country Road">Country Road</option>
          <option value="Dotti">Dotti</option>
          <option value="Factorie">Factorie</option>
          <option value="Forever New">Forever New</option>
          <option value="Glassons">Glassons</option>
          <option value="Jay Jays">Jay Jays</option>
          <option value="Jeans West">Jeans West</option>
          <option value="Just Jeans">Just Jeans</option>
          <option value="Kookai">Kookai</option>
          <option value="Top Shop">Top Shop</option>
        </select><br />
        <input type="hidden" name="user_id" />
        <button onClick={this.handleClick}>Edit Item</button>
      </div>
    )
  }
}

export default ItemsEdit
