const express = require('express')
const path = require('path')

const items = require('./routes/items')

const server = express()

// Middleware

/* server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs') */
// server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

// Routes

server.use('/api/v1/users', items)

module.exports = server
