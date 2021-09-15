const drinkShop = {
  title: "My Fancy Drink Shop",
  products: [{
      id: 1,
      title: 'Coca Cola',
      price: 4.32
    },
    {
      id: 2,
      title: 'Fanta',
      price: 4.22
    },
    {
      id: 3,
      title: 'Lift',
      price: 4.11
    }
  ],
  customers: {
    'jane@doe.com': {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        streetNumber: 12,
        street: 'Main St',
        city: 'Brisbane',
        postcode: 4000
      },
      orders: [{
          id: 61721,
          status: 'delivered',
          items: [{
              productId: 1,
              qty: 2
            },
            {
              productId: 3,
              qty: 1
            },
            {
              productId: 2,
              qty: 3
            }
          ],
          notes: 'Please leave on doorstep'
        },
        {
          id: 82721,
          status: 'delivered',
          items: [{
            productId: 4,
            qty: 100
          }],
          notes: 'Really enjoying coke ATM'
        }
      ]
    }
  }
};

const shop = {
  
  shopTitle: () => {
    // * Return the shop title
    return drinkShop.title;
  },

  // * Uppercase version of a string
  upperCase: (string) => {
    return string.toUpperCase();
  },

  // * Return an uppercased shopTitle
  upperCaseShopTitle: () => {
    return shop.upperCase(shop.shopTitle());
  },

  // * Return a specific product object
  productById: (productId) => {
    return drinkShop.products.find(product => product.id == productId);
  },

  // * Given a product id, return its cost
  productCost: (productId) => {
    return shop.productById(productId).price;
  },

  // return(drinkShop.customers.'jane@doe.com'.address.(streetNumber, street, city, postcode))
  // * Given a user's email, return their address in the format: streetNumber street, city, postcode
  // E.g. 10 Amelia St, Sydney, 2000
  formatAddress: (email) => {
    let {
      streetNumber, street, city, postcode
    } = drinkShop.customers[email].address
    
    return `${streetNumber} ${street}, ${city}, ${postcode}`
  },

  // * Return a total cost of an order
  totalCost: (email, orderId) => {
    let totalCost = 0;
    for (order of drinkShop.customer[email].orders) {
      if (orderId == order.id) {
        for (item of order.items) {
          totalCost += (shop.productCost(item.productId) * item.qty)
        }
      }
    }
    return totalCost;
  },

  // * Add a product to the shop
  addProduct: (id, title, price) => {
    drinkShop.products.push({
      id,
      title,
      price
    });
    return true;
  },

  // * Update the price of a specific product
  updateProductPrice: (id, newPrice) => {
    shop.productById(id).price = newPrice;
    return true;
  }
};