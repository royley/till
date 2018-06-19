//OLD CODE
/*const scan = (barcode, items) => {
  return items.find((item) => {
    return item.barcode === barcode;
  });
}

const addToBasket = (item, basket) => {
  basket.push(item);
}

const totalPrice = (basket) => {
  return basket.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

const removeFromBasket = (barcode, basket) => {
  const item = scan(barcode, basket);
  const index = basket.indexOf(item);
  basket.splice(index, 1);
}
*/

//NEW CODE
function till() {
  this.products = [{
      name: 'apple',
      barcode: 123,
      price: 5
  },{
      name: 'banana',
      barcode: 456,
      price: 6
  },{
      name: 'orange',
      barcode: 789,
      price: 7
  },{
      name: 'pineapple',
      barcode: 5367,
      price: 80
  },{
      name: 'kiwi',
      barcode: 765,
      price: 25
  }
]
  this.basket = [];
};

till.prototype.scan = function(barcode) {
    return this.products.find((product) => {
      return product.barcode === barcode
    }).name;
};

till.prototype.addToBasket = function(product) {
  this.basket.push(product);
  return this.basket;
};

till.prototype.totalPrice = function(basket) {
  return this.basket.reduce((total, product) => {
    return total + product.price;
  }, 0);
};

till.prototype.removeFromBasket = function(barcode, basket) {
  const product = scan(barcode, basket);
  const index = this.basket.indexOf(product);
  this.basket.splice(index, 1);
}

module.exports = till;