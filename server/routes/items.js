const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.use(express.json())

router.post('/item', (req, res) => {
  const item = req.body
  db.addItem(item)
    .then((id) => {
      res.status(201).json(id[0]).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  const item = req.body
  db.editItem(id, item)
    .then(() => {
      res.status(201).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/item/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteItem(id)
    .then(() => {
      res.redirect('/items')
    })
})

router.get('/item/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getItem(id)
    .then(item => {
      res.json({item: item})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  db.getItems()
    .then(items => {
      res.json({items: items})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
