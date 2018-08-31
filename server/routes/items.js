/* const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/items/add', (req, res) => {
  res.render('itemsAdd')
})

router.post('/items/add', (req, res) => {
  const item = req.body
  db.addItem(item)
    .then(ids => {
      res.redirect(`/items/${ids[0]}`)
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

router.get('/items/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getItem(id)
    .then(item => {
      res.render('itemsDelete', item)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/items/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteItem(id)
    .then(() => {
      res.redirect('/items')
    })
})

router.get('/items/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getItem(id)
    .then(item => {
      res.render('itemsOne', item)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/items', (req, res) => {
  db.getItems()
    .then(items => {
      res.render('itemsAll', {items})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  res.redirect('/items')
})

module.exports = router
 */