import React from 'react'
/* import { Link } from 'react-router-dom' */

class Items extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
/*     const items = props.items */
    return (
      <div className="row"> Test
{/*         <div className="three columns">
          {items.map(item => {
            <div>
              <strong>{item.brand}</strong> {item.item} <br />
                size {item.size} ({item.condition}) <br />
              <Link to={`/items/${item.id}`}><button>View item</button></Link>
            </div>
          })}
        </div> */}
      </div>
    )
  }
}

export default Items
