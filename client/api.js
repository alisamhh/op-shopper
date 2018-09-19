import request from 'superagent'

const itemsApi = 'http://localhost:3000/api/v1/items'
const imagesApi = 'http://localhost:3000/api/v1/images'

function getImages (search) {
  return request
    .get(`${imagesApi}/${search}`)
    .catch(err => {
      console.log(err.message)
    })
}

function getItems () {
  return request
    .get(itemsApi)
    .catch(err => {
      console.log(err.message)
    })
}

function getItem (id) {
  return request
    .get(`${itemsApi}/item/${id}`)
    .catch(err => {
      console.log(err.message)
    })
}

function addItem (item) {
  return request
    .post(`${itemsApi}/item`)
    .send(item)
    .then((res) => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

function editItem (id, item) {
  return request
    .put(`${itemsApi}/edit/${id}`)
    .send(item)
    .then((res) => {
      console.log('success')
    })
    .catch(err => {
      console.log(err.message)
    })
}

function deleteItem (id) {
  return request
    .delete(`${itemsApi}/item/${id}`)
    .then((res) => {
      console.log('success')
    })
    .catch(err => {
      console.log(err.message)
    })
}

export default {
  getImages,
  getItems,
  getItem,
  addItem,
  editItem,
  deleteItem
}
