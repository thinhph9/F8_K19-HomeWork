const products = [
  { id: 1, name: "iPhone", price: 2000 },
  { id: 2, name: "Samsung", price: 1500 },
  { id: 3, name: "Xiaomi", price: 1000 },
  { id: 4, name: "Oppo", price: 1200 },
];

const orders = [
  {
    id: 1,
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
    ],
  },
  {
    id: 2,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 3 },
    ],
  },
  {
    id: 3,
    items: [
      { productId: 2, quantity: 2 },
      { productId: 4, quantity: 1 },
    ],
  },
];

function findProductHasBestRevenue(products, orders) {
  let maxRevenue = 0;
  let bestProduct = {};
  // productMapper
  const productMapper = {};
  for (let pIdx = 0; pIdx < products.length; pIdx++) {
    const product = products[pIdx];
    productMapper[product.id] = product;
  }

  // Tính doanh thu
  const revenueMapper = {};
  for (let oIdx = 0; oIdx < orders.length; oIdx++) {
    const order = orders[oIdx];

    for (let iIdx = 0; iIdx < order.items.length; iIdx++) {
      const item = order.items[iIdx];
      const product = productMapper[item.productId];
      const revenue = product.price * item.quantity;

      if (revenueMapper[product.id] === undefined) {
        revenueMapper[product.id] = 0;
      }
      revenueMapper[product.id] += revenue;
    }
  }

  // Tìm sản phẩm có doanh thu lớn nhất
  for (let pIdx = 0; pIdx < products.length; pIdx++) {
    const product = products[pIdx];
    const revenue = revenueMapper[product.id];
    if (revenue > maxRevenue) {
      maxRevenue = revenue;
      bestProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        revenue: revenue,
      };
    }
  }
  return bestProduct;
}

console.log(findProductHasBestRevenue(products, orders));
