import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Items from './Items'

const App = props => {
  return (
    <Router>
      <div>
        <Route path= "/" component={Home} />
        <Route path= "/items" component={Items} />        
      </div>
    </Router>
  )
}

export default App
