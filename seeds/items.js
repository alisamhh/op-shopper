exports.seed = function (knex, Promise) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        {id: 22201, category: 'Clothing', subcategory: 'Tops', item: 'Jacket', size: 'Small', condition: 'Great', brand: 'The North Face', user_id: 99901},
        {id: 22202, category: 'Clothing', subcategory: 'Pants', item: 'Yoga Pants', size: 'Medium', condition: 'Good', brand: 'Express', user_id: 99902},
        {id: 22203, category: 'Appliances', subcategory: 'Kitchen', item: 'Fridge', size: 'Small', condition: 'Great', brand: 'Fisher & Paykel', user_id: 99901},
        {id: 22204, category: 'Clothing', subcategory: 'Footwear', brand: 'Converse', item: 'Shoes', size: '8', condition: 'Good', user_id: 99902}
      ])
    })
}
