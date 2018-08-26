const express = require('express')

const db = require('../db')

const router = express.Router()

/* router.get('/item/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getItem(id)
    .then(item => {
      res.render('items', item)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}) */

router.get('/item/add', (req, res) => {
  res.render('addItem')
})

/* router.post('/item/add', (req, res) => {
  const item = req.body
  db.addItem(item)
    .then(ids => {
      res.redirect(`/item/${ids[0]}`)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
 */
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

module.exports = router
