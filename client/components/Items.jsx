import React from 'react'
import {Link} from 'react-router-dom'

import Item from './Item'

import api from '../api'

class Items extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount () {
    api.getItems()
      .then(response => {
        this.setState({
          items: response.body.items
        })
      })
  }

  render () {
    function chunkArray (myArray, chunkSize) {
      const arrayLength = myArray.length
      let tempArray = []

      for (let i = 0; i < arrayLength; i += chunkSize) {
        const myChunk = myArray.slice(i, i + chunkSize)
        tempArray.push(myChunk)
      }

      return tempArray
    }

    const itemsGroupedByFour = chunkArray(this.state.items, 4)

    return (
      <div>
        <h1>Items</h1>
        {itemsGroupedByFour.map((row, i) => {
          return <div className='row' key={i}>
            {row.map(item => {
              return <Item key={item.id} item={item} />
            })}
          </div>
        })}
        <Link to="/add">
          <button>Add item</button>
        </Link>
      </div>
    )
  }
}

export default Items
