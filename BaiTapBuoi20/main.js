// Bai 1
function findSecondMax(numbers) {
    let max = -Infinity;
    let secondMax = -Infinity;
    for(let i = 1; i < numbers.length; i++) {

        if (numbers[i] > max) {
            secondMax = max;
            max = numbers[i];
        }else if (numbers[i] < max && numbers[i] > secondMax) 
            secondMax = numbers[i];
    }
    if (secondMax === -Infinity) return "value not found"
    return secondMax;
}
const numbers = [9, 8, 3, 5, 6, 2, 7, 9];
console.log(findSecondMax(numbers))


// Bai 2
const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];

const mergedClass = [...classA, ...classB];
console.log("Merged Class:", mergedClass);


const objectMapper = {};
const idArray = [];

for (let i = 0; i < mergedClass.length; i++) {
    const current = mergedClass[i];

    if (objectMapper[current] !== true) {
        objectMapper[current] = true;
        idArray.push(current);
    }
}
console.log("Filtered ID: ",idArray)

function quickSort (arr) {
    if (arr.length <= 1) return arr; 
    const mid = Math.floor(arr.length / 2);
    const pivot = arr[mid];
    const left = [];
    const right = [];

    for(let i = 0; i < arr.length; i++) {
        if (mid === i ) continue;
        if (arr[i] < pivot) {
            left.push(arr[i])
        }else {right.push(arr[i])}
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log("Quick Sort ID: ", quickSort(idArray));
