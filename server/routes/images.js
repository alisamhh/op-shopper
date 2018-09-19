require('dotenv').config()
const express = require('express')

const router = express.Router()

const GoogleImages = require('google-images')
const client = new GoogleImages(`${process.env.CSE_ID}`, `${process.env.API_KEY}`)

router.use(express.json())

router.get('/:search', (req, res) => {
  const search = req.params.search
  client.search(search)
    .then(images => {
      res.status(200).json(images).end()
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('GOOGLE IMAGE ERROR: ' + err.message)
    })
})

module.exports = router
