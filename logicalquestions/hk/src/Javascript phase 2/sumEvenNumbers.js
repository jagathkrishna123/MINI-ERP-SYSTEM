function sumEvenNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // check even
      sum += arr[i];
    }
  }

  return sum;
}

// Example
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12