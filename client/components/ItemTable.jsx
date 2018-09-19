import React from 'react'

const ItemTable = props => {
  const item = props.item
  const itemKeys = Object.keys(item)
  return (
    <div>
      <h3><span>Item #{item.id}</span></h3>
      <table>
        <tbody>
          {itemKeys.map(i => {
            if (i !== 'available' && i !== 'imageurl') {
              return <tr key={i}>
                <th>{i.charAt(0).toUpperCase() + i.slice(1)}</th>
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
