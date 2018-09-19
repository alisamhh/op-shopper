const express = require('express')
const path = require('path')

const items = require('./routes/items')
const images = require('./routes/images')

const server = express()

// Middleware

// server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, '../public')))

// Routes

server.use('/api/v1/items', items)
server.use('/api/v1/images', images)

module.exports = server
