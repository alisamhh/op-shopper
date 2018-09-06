import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Items from './Items'
import ItemsAdd from './ItemsAdd'
import ItemsOne from './ItemsOne'
import ItemsDelete from './ItemsDelete'
import Footer from './Footer'

const App = props => {
  return (
    <Router>
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Items} />
        <Route path='/add' component={ItemsAdd} />
        <Route path='/id/:id' component={ItemsOne} />
        <Route path='/delete/:id' component={ItemsDelete} />
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App
