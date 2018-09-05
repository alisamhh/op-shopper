import request from 'superagent'

const itemsApi = 'http://localhost:3000/api/v1/items'

function getItems () {
  return request
    .get(itemsApi)
    .catch(err => {
      console.log(err.message)
    })
}

function addItem (item) {
  return request
    .post('http://localhost:3000/api/v1/items/add')
    .send(item)
    .then((res) => {
      console.log('success')
    })
    .catch(err => {
      console.log(err.message)
    })
}

export default {
  getItems,
  addItem
}
