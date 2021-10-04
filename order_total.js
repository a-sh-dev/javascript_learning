// ! Morning challenge
/*
 ? Write a function ‘orderTotal’ that takes two arguments; an array of order objects, and an ‘options’ object, and returns a total cost of the order” Orders will have the following structure - {name: <string>, qty: <number>, price:<number>. Price will be whole dollar values. The ‘options’ object will determine sales tax (as a decimal) and shipping cost. e.g {salesTax: 0.2, shipping: 20}. If options is not provided a default sales tax of 10% and shipping cost of $15 will apply. Finally, all orders over $200 will receive free shipping. E.g. if an order looks like this:
 const order = [
    {name: "jar of coffee", qty:2, price: 15},
    {name: "packet of teabags", qty: 3, price: 8}
    ]
 orderTotal(order) will calculate the price of coffee (2  x 15) + the price of teabags ( 3 x 8). Then add default sales tax and shipping  - because options wasn't specified - to the subtotal (54) for a grand total of 74.4.

 another example passing custom options 
  const order = [{name: "cup of coffee", qty: 100, price: 1}]
  orderTotal(order, {salesTax: 0.2, shipping: 20}) // returns 140
*/

const order = [
  {name: "jar of coffee", qty:2, price: 15},
  {name: "packet of teabags", qty: 3, price: 8}
]

function orderTotal(order, options = {salesTax: 0.10, shipping: 15}) {
  let {salesTax, shipping} = options;
  const subtotal = order.reduce((initial, order) => {
    return initial += (order.price * order.qty)
  }, 0)

  if (subtotal >= 200) {
    shipping = 0;
  }

  return subtotal + (subtotal * salesTax) + shipping;
}

