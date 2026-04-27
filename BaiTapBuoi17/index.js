// ====================Bài 1====================
function isEvenNumber(number) {
  if (number % 2 === 0) {
    return true;
  } else return false;
}
// Test
console.log(isEvenNumber(10)); // Kết quả mong đợi: true
console.log(isEvenNumber(7)); // Kết quả mong đợi: false

// ====================Bài 2====================
function getElectricityBill(kwh) {
  let total = 0;
  if (kwh <= 50) {
    total = kwh * 1678;
  } else if (kwh <= 100) {
    total = 50 * 1678 + (kwh - 50) * 1734;
  } else if (kwh <= 200) {
    total = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
  } else if (kwh <= 300) {
    total = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536;
  } else if (kwh <= 400) {
    total =
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834;
  } else
    total =
      50 * 1678 +
      50 * 1734 +
      100 * 2014 +
      100 * 2536 +
      100 * 2834 +
      (kwh - 400) * 2927;
  return total;
}
// Test
console.log(getElectricityBill(70));
// Mong đợi: (50 * 1678) + (20 * 1734) = 118580
console.log(getElectricityBill(120));
// Mong đợi: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880

// ====================Bài 3====================
function cleanName(name, keyword) {
  const cleanName = name.trim().toLowerCase();
  const keyWord = keyword.toLowerCase();
  if (cleanName.includes(keyWord)) {
    return true;
  } else return false;
}
// Test
console.log(cleanName("   NGUYEN Van An   ", "an")); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
console.log(cleanName("   Tran Thi B ", "hoang")); // Mong đợi: false