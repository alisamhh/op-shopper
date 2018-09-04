import request from 'superagent'

const itemsApi = 'http://localhost:3000/api/v1/items'

export function getItems () {
  return request
    .get(itemsApi)
    .catch(err => {
      console.log(err.message)
    })
}
