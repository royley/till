function till() {
    this.products = [{
        name: 'apple',
        barcode: 123,
        price: 5
    },{
        name: 'banana',
        barcode: '456',
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
}

const items = [
    apple,
    banana,
    orange,
    pineapple,
    kiwi, 
  ];

till.prototype.scan = function(barcode, items) {
    return items.find((item) => {
        return item.barcode === barcode;
      });
};

till.prototype.addToBasket = function(item, basket) {
    basket.push(item);
};

till.prototype.removeFromBasket = function(barcode, basket) {
    const item = scan(barcode, basket);
    const index = basket.indexOf(item);
    basket.splice(index, 1);  
};

module.exports = till;