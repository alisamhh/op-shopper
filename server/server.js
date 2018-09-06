const express = require('express')
const path = require('path')

const items = require('./routes/items')

const server = express()

// Middleware

// server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, '../public')))

// Routes

server.use('/api/v1/items', items)

module.exports = server
