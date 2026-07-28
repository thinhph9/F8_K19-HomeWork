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
// Bai 4: Viết hàm tìm ra sản phẩm bán nhiều nhất
function getBestSellingProduct(productList, orderList) {
  const quantityByProductId = {};

  for (const currentOrder of orderList) {
    const currentProductId = currentOrder.productId;

    const currentQuantity = currentOrder.quantity;

    const hasProduct = quantityByProductId[currentProductId] !== undefined;

    if (hasProduct) {
      quantityByProductId[currentProductId] += currentQuantity;
    } else {
      quantityByProductId[currentProductId] = currentQuantity;
    }
  }

  let bestSellingProductId = null;

  let maxQuantity = 0;

  for (const productId in quantityByProductId) {
    const totalQuantity = quantityByProductId[productId];

    const isGreater = totalQuantity > maxQuantity;

    if (isGreater) {
      maxQuantity = totalQuantity;

      bestSellingProductId = Number(productId);
    }
  }

  for (const currentProduct of productList) {
    const isMatched = currentProduct.id === bestSellingProductId;

    if (isMatched) {
      return {
        ...currentProduct,
        totalSold: maxQuantity,
      };
    }
  }
}
console.log(getBestSellingProduct(products, orders));

// Bai 5: Viết hàm tìm ra sản phẩm có doanh thu cao nhất
function getHighestRevenueProduct(productList, orderList) {
  const productById = {};

  for (const currentProduct of productList) {
    productById[currentProduct.id] = currentProduct;
  }

  const revenueByProductId = {};

  for (const currentOrder of orderList) {
    const currentProduct = productById[currentOrder.productId];

    const currentRevenue = currentOrder.quantity * currentProduct.price;

    const hasRevenue = revenueByProductId[currentOrder.productId] !== undefined;

    if (hasRevenue) {
      revenueByProductId[currentOrder.productId] += currentRevenue;
    } else {
      revenueByProductId[currentOrder.productId] = currentRevenue;
    }
  }

  let highestRevenueProductId = null;

  let maxRevenue = 0;

  for (const productId in revenueByProductId) {
    const totalRevenue = revenueByProductId[productId];

    const isGreater = totalRevenue > maxRevenue;

    if (isGreater) {
      maxRevenue = totalRevenue;

      highestRevenueProductId = Number(productId);
    }
  }

  return {
    ...productById[highestRevenueProductId],
    totalRevenue: maxRevenue,
  };
}
console.log(getHighestRevenueProduct(products, orders));

// Bai 6: Viết hàm tìm ra nhân viên bán nhiều hàng nhất
function getBestSellingEmployee(employeeList, orderList) {
  const quantityByEmployeeId = {};

  for (const currentOrder of orderList) {
    const currentEmployeeId = currentOrder.employeeId;

    const currentQuantity = currentOrder.quantity;

    const hasEmployee = quantityByEmployeeId[currentEmployeeId] !== undefined;

    if (hasEmployee) {
      quantityByEmployeeId[currentEmployeeId] += currentQuantity;
    } else {
      quantityByEmployeeId[currentEmployeeId] = currentQuantity;
    }
  }

  let bestSellingEmployeeId = null;

  let maxQuantity = 0;

  for (const employeeId in quantityByEmployeeId) {
    const totalQuantity = quantityByEmployeeId[employeeId];

    const isGreater = totalQuantity > maxQuantity;

    if (isGreater) {
      maxQuantity = totalQuantity;

      bestSellingEmployeeId = Number(employeeId);
    }
  }

  for (const currentEmployee of employeeList) {
    const isMatched = currentEmployee.id === bestSellingEmployeeId;

    if (isMatched) {
      return {
        ...currentEmployee,
        totalSold: maxQuantity,
      };
    }
  }
}

console.log(getBestSellingEmployee(employees, orders));

// Bai 7: Viết hàm tìm ra nhân viên có doanh thu cao nhất
function getHighestRevenueEmployee(employeeList, productList, orderList) {
  const productById = {};

  for (const currentProduct of productList) {
    productById[currentProduct.id] = currentProduct;
  }

  const revenueByEmployeeId = {};

  for (const currentOrder of orderList) {
    const currentProduct = productById[currentOrder.productId];

    const currentRevenue = currentOrder.quantity * currentProduct.price;

    const currentEmployeeId = currentOrder.employeeId;

    const hasEmployee = revenueByEmployeeId[currentEmployeeId] !== undefined;

    if (hasEmployee) {
      revenueByEmployeeId[currentEmployeeId] += currentRevenue;
    } else {
      revenueByEmployeeId[currentEmployeeId] = currentRevenue;
    }
  }

  let highestRevenueEmployeeId = null;

  let maxRevenue = 0;

  for (const employeeId in revenueByEmployeeId) {
    const totalRevenue = revenueByEmployeeId[employeeId];

    const isGreater = totalRevenue > maxRevenue;

    if (isGreater) {
      maxRevenue = totalRevenue;

      highestRevenueEmployeeId = Number(employeeId);
    }
  }

  for (const currentEmployee of employeeList) {
    const isMatched = currentEmployee.id === highestRevenueEmployeeId;

    if (isMatched) {
      return {
        ...currentEmployee,
        totalRevenue: maxRevenue,
      };
    }
  }
}

console.log(getHighestRevenueEmployee(employees, products, orders));

// Bài 8 Viết hàm tìm ra sản phẩm bán có doanh thu cao nhất của mỗi nhân viên
function getHighestRevenueProductByEmployee(
  employeeList,
  productList,
  orderList,
) {
  const productById = {};

  for (const currentProduct of productList) {
    productById[currentProduct.id] = currentProduct;
  }

  const revenueByEmployeeId = {};

  for (const currentOrder of orderList) {
    const currentProduct = productById[currentOrder.productId];

    const currentRevenue = currentOrder.quantity * currentProduct.price;

    const currentEmployeeId = currentOrder.employeeId;

    const currentProductId = currentOrder.productId;

    const hasEmployee = revenueByEmployeeId[currentEmployeeId] !== undefined;

    if (!hasEmployee) {
      revenueByEmployeeId[currentEmployeeId] = {};
    }

    const currentEmployeeRevenue = revenueByEmployeeId[currentEmployeeId];

    const hasProduct = currentEmployeeRevenue[currentProductId] !== undefined;

    if (hasProduct) {
      currentEmployeeRevenue[currentProductId] += currentRevenue;
    } else {
      currentEmployeeRevenue[currentProductId] = currentRevenue;
    }
  }

  const result = [];

  for (const currentEmployee of employeeList) {
    const currentEmployeeRevenue = revenueByEmployeeId[currentEmployee.id];

    if (!currentEmployeeRevenue) continue;

    let highestRevenueProductId = null;

    let maxRevenue = 0;

    for (const productId in currentEmployeeRevenue) {
      const totalRevenue = currentEmployeeRevenue[productId];

      const isGreater = totalRevenue > maxRevenue;

      if (isGreater) {
        maxRevenue = totalRevenue;

        highestRevenueProductId = Number(productId);
      }
    }

    result.push({
      employeeName: currentEmployee.name,
      productName: productById[highestRevenueProductId].name,
      totalRevenue: maxRevenue,
    });
  }

  return result;
}

console.log(getHighestRevenueProductByEmployee(employees, products, orders));

// Bai 9: Giả sử nhân viên sẽ nhận được hoa hồng là 3%. Viết hàm tìm hoa hồng cho mỗi nhân viên
function getEmployeeCommissionList(employeeList, productList, orderList) {
  const COMMISSION_RATE = 0.03;

  const productById = {};

  for (const currentProduct of productList) {
    productById[currentProduct.id] = currentProduct;
  }

  const revenueByEmployeeId = {};

  for (const currentOrder of orderList) {
    const currentProduct = productById[currentOrder.productId];

    const currentRevenue = currentOrder.quantity * currentProduct.price;

    const currentEmployeeId = currentOrder.employeeId;

    const hasEmployee = revenueByEmployeeId[currentEmployeeId] !== undefined;

    if (hasEmployee) {
      revenueByEmployeeId[currentEmployeeId] += currentRevenue;
    } else {
      revenueByEmployeeId[currentEmployeeId] = currentRevenue;
    }
  }

  const employeeCommissionList = [];

  for (const currentEmployee of employeeList) {
    const totalRevenue = revenueByEmployeeId[currentEmployee.id] || 0;

    const commission = totalRevenue * COMMISSION_RATE;

    employeeCommissionList.push({
      employeeName: currentEmployee.name,
      totalRevenue,
      commission,
    });
  }

  return employeeCommissionList;
}

console.log(getEmployeeCommissionList(employees, products, orders));

// Bai 10: Viết hàm sắp xếp nhân viên theo thứ tự giảm dần theo doanh thu
function getEmployeesSortedByRevenue(employeeList, productList, orderList) {
  const productById = {};

  for (const currentProduct of productList) {
    productById[currentProduct.id] = currentProduct;
  }

  const revenueByEmployeeId = {};

  for (const currentOrder of orderList) {
    const currentProduct = productById[currentOrder.productId];

    const currentRevenue = currentOrder.quantity * currentProduct.price;

    const currentEmployeeId = currentOrder.employeeId;

    const hasEmployee = revenueByEmployeeId[currentEmployeeId] !== undefined;

    if (hasEmployee) {
      revenueByEmployeeId[currentEmployeeId] += currentRevenue;
    } else {
      revenueByEmployeeId[currentEmployeeId] = currentRevenue;
    }
  }

  const employeeRevenueList = [];

  for (const currentEmployee of employeeList) {
    const totalRevenue = revenueByEmployeeId[currentEmployee.id] || 0;

    employeeRevenueList.push({
      ...currentEmployee,
      totalRevenue,
    });
  }

  employeeRevenueList.sort((firstEmployee, secondEmployee) => {
    return secondEmployee.totalRevenue - firstEmployee.totalRevenue;
  });

  return employeeRevenueList;
}

console.log(getEmployeesSortedByRevenue(employees, products, orders));

function buildObjectById(itemList) {
  const objectById = {};

  for (const currentItem of itemList) {
    objectById[currentItem.id] = currentItem;
  }

  return objectById;
}

function createHashMap(array, key) {
  const map = {};

  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    map[item[key]] = item;
  }

  return map;
}
