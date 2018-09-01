import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Items from './Items'
import Footer from './Footer'

const App = props => {
  return (
    <div>
      <Header />
      <Items />
      <Footer />
    </div>
  )
}

export default App
