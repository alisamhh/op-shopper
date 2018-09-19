exports.seed = function (knex, Promise) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        {id: 22201, category: 'Clothing', subcategory: 'Tops', item: 'Jacket', size: 'Small', condition: 'Great', brand: 'The North Face', color: 'Purple', imageurl: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2015/01/25/54c58249c8ce8533b11e58c9/m_54c5824dc8ce8533b11e58e8.jpg'},
        {id: 22202, category: 'Clothing', subcategory: 'Bottoms', item: 'Yoga Pants', size: 'Medium', condition: 'Good', brand: 'Express', color: 'Black', imageurl: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2015/01/25/54c58249c8ce8533b11e58c9/m_54c5824dc8ce8533b11e58e8.jpg'},
        {id: 22203, category: 'Clothing', subcategory: 'Tops', item: 'Fridge', size: 'Small', condition: 'Great', brand: 'Fisher & Paykel', color: 'Green', imageurl: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2015/01/25/54c58249c8ce8533b11e58c9/m_54c5824dc8ce8533b11e58e8.jpg'},
        {id: 22204, category: 'Clothing', subcategory: 'Footwear', brand: 'Converse', item: 'Shoes', size: '8', condition: 'Good', color: 'Yellow', imageurl: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2015/01/25/54c58249c8ce8533b11e58c9/m_54c5824dc8ce8533b11e58e8.jpg'},
        {id: 22205, category: 'Clothing', subcategory: 'Bottoms', brand: 'American Apparel', item: 'Shirt', size: 'S', condition: 'Used', color: 'White', imageurl: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2015/01/25/54c58249c8ce8533b11e58c9/m_54c5824dc8ce8533b11e58e8.jpg'}
      ])
    })
}
