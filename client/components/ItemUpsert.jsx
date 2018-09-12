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
    const id = this.props.match.params.id
    if (id){
      api.getItem(id)
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
    const id = this.props.match.params.id    
    if (id) {
      api.editItem(id, this.state)
        .then(() => {
          this.props.history.push(`/id/${id}`)
        })
    } else {
      api.addItem(this.state)
        .then((newId) => {
          this.props.history.push(`/id/${newId}`)          
        })
    }
  }

  render () {
    const id = this.props.match.params.id    
    const title = id
      ? `Edit Item #${id}`
      : 'Add Item'
    const buttonLabel = id
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