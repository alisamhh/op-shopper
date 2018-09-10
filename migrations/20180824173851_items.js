exports.up = (knex, Promise) => {
  return knex.schema.createTable('items', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.string('subcategory')
    table.string('item')
    table.string('size')
    table.string('condition')
    table.string('brand')
    table.string('color')
    table.boolean('available')
    table.integer('user_id').references('users.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('items')
}
