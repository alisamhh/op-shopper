const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.use(express.json())

router.get('/items/add', (req, res) => {
  res.render('itemsAdd')
})

// THIS IS WORKING WITH REACT
router.post('/add', (req, res) => {
  const item = req.body
  db.addItem(item)
    .then(() => {
      res.status(201).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/items/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getItem(id)
    .then(item => {
      res.render('itemsEdit', item)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/items/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  const item = req.body
  db.editItem(id, item)
    .then(() => {
      res.redirect(`/items/${id}`)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// THIS IS WORKING WITH REACT
router.delete('/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteItem(id)
    .then(() => {
      res.redirect('/items')
    })
})

// THIS IS WORKING WITH REACT
router.get('/id/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getItem(id)
    .then(item => {
      res.json({item: item})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// THIS IS WORKING WITH REACT
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
