import React from 'react'

const ItemTable = props => {
  const item = props.item
  const itemKeys = Object.keys(item)
  return (
    <div>
      <h3>Item #{item.id}</h3>
      <table>
        <tbody>
          {itemKeys.map(i => {
            if (i !== 'available' && i !== 'user_id') {
              return <tr key={i}>
                <th>{i}</th>
                <td>{item[i]}</td>
              </tr>
            }
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ItemTable
