const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  addItem,
  getItems,
  getItem,
  editItem,
  deleteItem
}

function addItem (item, testConn) {
  const conn = testConn || connection
  return conn('items')
    .insert({
      'category': item.category.value,
      'subcategory': item.subcategory.value,
      'item': item.item.value,
      'size': item.size.value,
      'condition': item.condition.value,
      'brand': item.brand.value,
      'color': item.color.value
    })
}

function getItems (testConn) {
  const conn = testConn || connection
  return conn('items').select()
}

function getItem (id, testConn) {
  const conn = testConn || connection
  return conn('items').where('id', id).first()
}

function editItem (id, item, testConn) {
  const conn = testConn || connection
  return conn('items')
    .where('id', id)
    .update({
      condition: item.condition,
      category: item.category,
      subcategory: item.subcategory,
      item: item.item,
      size: item.size,
      brand: item.brand
    })
}

function deleteItem (id, testConn) {
  const conn = testConn || connection
  return conn('items')
    .where('id', id)
    .del()
}
