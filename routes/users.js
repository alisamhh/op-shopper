const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
/*   db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    }) */
})

router.get('/addItem', (req, res) => {
  res.render('add')
})

router.post('/addItem', (req, res) => {
  const item = req.body
  db.addItem(item)
    .then(item => {
      res.render('index', item)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
