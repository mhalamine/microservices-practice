class Product {
  constructor(id, name, description, price, inventory) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.inventory = inventory;
  }

  static getAll() {
    return products;
  }

  static getById(id) {
    return products.find((p) => p.id === id);
  }

  static create(productData) {
    const id = Date.now().toString();
    const newProduct = new Product(id, ...productData);
    products.push(newProduct);
    return newProduct;
  }

  static update(id, productData) {
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products[index] = new Product(id, ...productData);
      return products[index];
    }
    return null;
  }

  static delete(id) {
    products = products.filter((p) => p.id !== id);
  }
}

module.exports = Product;
