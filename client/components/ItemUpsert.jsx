import React from 'react'
import Select from 'react-select'
import api from '../api'
import GoHome from './GoHome'
import itemData from '../../public/data/itemData.json'

class ItemUpsert extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: '',
      subcategory: '',
      item: '',
      size: '',
      condition: '',
      brand: '',
      color: '',
      user_id: ''
    }
  }
  componentDidMount () {
    if (this.props.match.params.id){
      api.getItem(this.props.match.params.id)
        .then(response => {
          this.setState({
            ...response.body.item
          })
        })
    }
  }

  onSelect = (selectedOption, item) => {
    this.setState({ 
      [item]: selectedOption.value
    })
  }

  onClick = () => {
    if (this.props.match.params.id) {
      api.editItem(this.props.match.params.id, this.state)
    } else {
      api.addItem(this.state)
    }
  }

  render () {
    const title = this.props.match.params.id
      ? `Edit item #${this.props.match.params.id}`
      : 'Add item'
    const buttonLabel = this.props.match.params.id
      ? "Save Item"
      : "Add Item"
    const itemDataKeys = Object.keys(itemData)
    return (
      <div>
        <h3>{title}</h3>
        {
          itemDataKeys.map(key => {
            const value = this.state[key]
              ? { value: `${this.state[key]}`, label: `${this.state[key]}`}
              : null;
            return (
              <div key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}
                  <Select
                    name={key}
                    value={value}
                    onChange={selected => this.onSelect(selected, key)}
                    options={itemData[key].filter((i) => 
                      !i.link || (this.state.category && i.link === this.state.category)
                    )}
                  /> 
                </div>
            )})
          }
          
        <button onClick={this.onClick}>{buttonLabel}</button>
        <GoHome />
      </div>
    )
  }
}
export default ItemUpsert