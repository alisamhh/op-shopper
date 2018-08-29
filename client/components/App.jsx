import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Items from './Items'
import Item from './Item'

const App = props => {
  return (
    <Router>
      <div>
        <Route path= "/" component={Home} />
        <Route path= "/items" component={Items} />
        <Route path= "/items/:id" component={Item} />
      </div>
    </Router>
  )
}

export default App
