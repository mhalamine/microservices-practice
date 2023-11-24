class Order {
  constructor(id, products, totalPrice) {
    this.id = id;
    this.products = products;
    this.totalPrice = totalPrice;
  }

  static getAll() {
    return orders;
  }

  static getById(id) {
    return orders.find((o) => o.id === id);
  }

  static create(orderData) {
    const id = Date.now().toString();
    const totalPrice = Order.calculateTotalPrice(orderData.products);
    const newOrder = new Order(id, orderData.products, totalPrice);
    orders.push(newOrder);
    return newOrder;
  }

  static calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
  }
}

module.exports = Order;
