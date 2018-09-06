import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Items from './Items'
import ItemsAdd from './ItemsAdd'
import ItemsOne from './ItemsOne'
import Footer from './Footer'

const App = props => {
  return (
    <div>
      <Header />
      <Items />
      <ItemsAdd />
      <ItemsOne />
      <Footer />
    </div>
  )
}

export default App
