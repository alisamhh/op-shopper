import React from 'react'

const ItemTable = props => {
  const item = props.item
  return (
    <div>
      <h3>Item #{item.id}</h3>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{item.id}</td>
          </tr>
          <tr>
            <th>Condition</th>
            <td>{item.condition}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{item.category}</td>
          </tr>
          <tr>
            <th>Subcategory</th>
            <td>{item.subcategory}</td>
          </tr>
          <tr>
            <th>Item</th>
            <td>{item.item}</td>
          </tr>
          <tr>
            <th>Size</th>
            <td>{item.size}</td>
          </tr>
          <tr>
            <th>Brand</th>
            <td>{item.brand}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ItemTable