import React from 'react'
import Select from 'react-select'

import api from '../api'

import GoHome from './GoHome'

import itemData from '../../public/data/itemData.json'

class ItemsEdit extends React.Component {
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

  componentDidMount () {
    api.getItem(this.props.match.params.id)
      .then(response => {
        this.setState({
          ...response.body.item
        })
      })
  }

  handleSelect = (selectedOption, key) => {
    this.setState({ 
      [key]: selectedOption.value
    })
  }

  handleSave = (e) => {
    api.editItem(this.props.match.params.id, this.state)
  }

  render () {
    const itemDataKeys = Object.keys(itemData)

    return (
      <div>
        <h3>Edit item #{this.props.match.params.id}</h3>
        {itemDataKeys.map(key => (
          <div key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}
              <Select
                name={key}
                value={{ value: `${this.state[key]}`, label: `${this.state[key]}`}}
                onChange={selected => this.handleSelect(selected, key)}
                options={itemData[key].filter((i) => 
                  !i.link || (this.state.category.value && i.link === this.state.category.value)
                )}
              /> 
            </div>
          ))}
        <button onClick={this.handleSave}>Save Item</button>
        <GoHome />
      </div>
    )
  }
}

export default ItemsEdit
