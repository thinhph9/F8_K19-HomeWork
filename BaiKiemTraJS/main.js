const employees = [
  { id: 1, name: "Alice", age: 23, status: "working" },
  { id: 3, name: "Bob", age: 25, status: "working" },
  { id: 6, name: "John", age: 27, status: "working" },
  { id: 8, name: "David", age: 23, status: "quit_job" },
  { id: 10, name: "Eve", age: 20, status: "working" },
];

const products = [
  { id: 1, name: "Phone", price: 1200 },
  { id: 2, name: "Laptop", price: 3000 },
  { id: 3, name: "Tab", price: 2000 },
  { id: 4, name: "PC", price: 800 },
  { id: 5, name: "Monitor", price: 1500 },
];

const orders = [
  { id: 1, employeeId: 1, productId: 4, quantity: 1 },
  { id: 2, employeeId: 3, productId: 2, quantity: 4 },
  { id: 3, employeeId: 1, productId: 5, quantity: 3 },
  { id: 4, employeeId: 6, productId: 1, quantity: 2 },
  { id: 5, employeeId: 3, productId: 5, quantity: 3 },
  { id: 6, employeeId: 8, productId: 1, quantity: 1 },
  { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

// Bai 1:
function getWorkingEmployees(employeeList) {
  return employeeList.filter((employee) => employee.status === "working");
}
console.log(getWorkingEmployees(employees));

// Bai 2:
function getOldestEmployee(employeeList) {
  let oldestEmployee = employeeList[0];

  for (let i = 1; i < employeeList.length; i++) {
    const currentEmployee = employeeList[i];

    if (currentEmployee.age > oldestEmployee.age) {
      oldestEmployee = currentEmployee;
    }
  }
  return oldestEmployee;
}
console.log(getOldestEmployee(employees));

// Bai 3:
function getCheapestProduct(productList) {
  let cheapestProduct = productList[0];

  for (const currentProduct of productList) {
    if (currentProduct.price < cheapestProduct.price) {
      cheapestProduct = currentProduct;
    }
  }
  return cheapestProduct;
}
console.log(getCheapestProduct(products));

// Bai 4:
function getBestSellingProduct(products, orders) {
  const totalSold = {};

  // add up the number of sales
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (totalSold[order.productId]) {
      totalSold[order.productId] += order.quantity;
    } else {
      totalSold[order.productId] = order.quantity;
    }
  }

  // find the best-selling product
  let bestProductId = null;
  let maxQuantity = 0;

  for (const productId in totalSold) {
    if (totalSold[productId] > maxQuantity) {
      maxQuantity = totalSold[productId];
      bestProductId = Number(productId);
    }
  }

  // get product information
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === bestProductId) {
      return {
        ...products[i],
        totalSold: maxQuantity,
      };
    }
  }
}

console.log(getBestSellingProduct(products, orders));

// Bai 5:
function getHighestRevenueProduct(products, orders) {
  // hash map for products
  const productMap = {};

  for (let i = 0; i < products.length; i++) {
    productMap[products[i].id] = products[i];
  }

  // object revenue for each product.
  const revenues = {};

  // calculate revenue
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    const product = productMap[order.productId];

    const revenue = product.price * order.quantity;
    // cumulative revenue
    if (revenues[order.productId]) {
      revenues[order.productId] += revenue;
    } else {
      revenues[order.productId] = revenue;
    }
  }

  // highest-revenue product.
  let maxRevenue = 0;
  let bestProductId = null;

  for (const productId in revenues) {
    if (revenues[productId] > maxRevenue) {
      maxRevenue = revenues[productId];
      bestProductId = Number(productId);
    }
  }

  return {
    ...productMap[bestProductId],
    totalRevenue: maxRevenue,
  };
}

console.log(getHighestRevenueProduct(products, orders));

// Bai 6:
function getBestSellingEmployee(employees, orders) {
  // Object total number of items sold by employeeID
  const totalSold = {};

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    // cumulative quantity
    if (totalSold[order.employeeId]) {
      totalSold[order.employeeId] += order.quantity;
    } else {
      totalSold[order.employeeId] = order.quantity;
    }
  }

  // highest-selling employee
  let bestEmployeeId = null;
  let maxSold = 0;

  for (const employeeId in totalSold) {
    if (totalSold[employeeId] > maxSold) {
      maxSold = totalSold[employeeId];
      bestEmployeeId = Number(employeeId);
    }
  }

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === bestEmployeeId) {
      return {
        ...employees[i],
        totalSold: maxSold,
      };
    }
  }
}

console.log(getBestSellingEmployee(employees, orders));

// Bai 7:
function getHighestRevenueEmployee(employees, products, orders) {
  // product hash map
  const productMap = {};

  for (let i = 0; i < products.length; i++) {
    productMap[products[i].id] = products[i];
  }

  // employee hash map
  const employeeMap = {};

  for (let i = 0; i < employees.length; i++) {
    employeeMap[employees[i].id] = employees[i];
  }

  // revenue employee
  const revenues = {};

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    const product = productMap[order.productId];

    const revenue = product.price * order.quantity;

    if (revenues[order.employeeId]) {
      revenues[order.employeeId] += revenue;
    } else {
      revenues[order.employeeId] = revenue;
    }
  }

  // highest-earning employee
  let bestEmployeeId = null;
  let maxRevenue = 0;

  for (const employeeId in revenues) {
    if (revenues[employeeId] > maxRevenue) {
      maxRevenue = revenues[employeeId];

      bestEmployeeId = Number(employeeId);
    }
  }

  return {
    ...employeeMap[bestEmployeeId],
    totalRevenue: maxRevenue,
  };
}

console.log(getHighestRevenueEmployee(employees, products, orders));

// Bai 8:
function getHighestRevenueProductByEmployee(employees, products, orders) {
  // object product hash map
  const productMap = {};

  for (let i = 0; i < products.length; i++) {
    productMap[products[i].id] = products[i];
  }

  //object employee hash map
  const employeeMap = {};

  for (let i = 0; i < employees.length; i++) {
    employeeMap[employees[i].id] = employees[i];
  }

  const revenues = {};

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    const revenue = productMap[order.productId].price * order.quantity;

    // employee object if it doesn't exist
    if (!revenues[order.employeeId]) {
      revenues[order.employeeId] = {};
    }

    // cumulative revenue product
    if (revenues[order.employeeId][order.productId]) {
      revenues[order.employeeId][order.productId] += revenue;
    } else {
      revenues[order.employeeId][order.productId] = revenue;
    }
  }

  const result = [];
  for (const employeeId in revenues) {
    const productsRevenue = revenues[employeeId];

    let bestProductId = null;
    let maxRevenue = 0;

    for (const productId in productsRevenue) {
      if (productsRevenue[productId] > maxRevenue) {
        maxRevenue = productsRevenue[productId];

        bestProductId = Number(productId);
      }
    }

    result.push({
      employee: employeeMap[employeeId],
      topProduct: productMap[bestProductId],
      revenue: maxRevenue,
    });
  }

  return result;
}

console.log(getHighestRevenueProductByEmployee(employees, products, orders));

// Bai 9:
function getEmployeeCommissionList(employees, products, orders) {
  const COMMISSION_RATE = 0.03;

  // object product hash map
  const productMap = {};

  for (let i = 0; i < products.length; i++) {
    productMap[products[i].id] = products[i];
  }

  // object employee hash map
  const employeeMap = {};

  for (let i = 0; i < employees.length; i++) {
    employeeMap[employees[i].id] = employees[i];
  }

  // object commission
  const commissions = {};

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    const product = productMap[order.productId];

    const revenue = product.price * order.quantity;

    const commission = revenue * COMMISSION_RATE;

    // cumulative
    if (commissions[order.employeeId]) {
      commissions[order.employeeId].totalRevenue += revenue;

      commissions[order.employeeId].commission += commission;
    } else {
      commissions[order.employeeId] = {
        totalRevenue: revenue,
        commission: commission,
      };
    }
  }

  const result = [];
  for (const employeeId in commissions) {
    result.push({
      employee: employeeMap[employeeId],

      totalRevenue: commissions[employeeId].totalRevenue,

      commission: commissions[employeeId].commission,
    });
  }

  return result;
}

console.log(getEmployeeCommissionList(employees, products, orders));

// Bai 10:
function getEmployeesSortedByRevenue(employees, products, orders) {
  // object product hash map
  const productMap = {};

  for (let i = 0; i < products.length; i++) {
    productMap[products[i].id] = products[i];
  }

  // object employee hash map
  const employeeMap = {};

  for (let i = 0; i < employees.length; i++) {
    employeeMap[employees[i].id] = employees[i];
  }

  // revenue each employee
  const revenues = {};

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    const product = productMap[order.productId];

    const revenue = product.price * order.quantity;

    if (revenues[order.employeeId]) {
      revenues[order.employeeId] += revenue;
    } else {
      revenues[order.employeeId] = revenue;
    }
  }

  // convert to array
  const result = [];

  for (const employeeId in revenues) {
    result.push({
      ...employeeMap[employeeId],
      totalRevenue: revenues[employeeId],
    });
  }

  // sort
  result.sort((a, b) => {
    return b.totalRevenue - a.totalRevenue;
  });

  return result;
}

console.log(getEmployeesSortedByRevenue(employees, products, orders));
