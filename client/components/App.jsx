import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Items from './Items'
import ItemView from './ItemView'
import ItemDelete from './ItemDelete'
import ItemUpsert from './ItemUpsert'
import Footer from './Footer'

const App = props => {
  return (
    <Router>
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Items} />
        <Route path='/add' component={ItemUpsert} />
        <Route path='/edit/:id' component={ItemUpsert} />
        <Route path='/id/:id' component={ItemView} />
        <Route path='/delete/:id' component={ItemDelete} />
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App
