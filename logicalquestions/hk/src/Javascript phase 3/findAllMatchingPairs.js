function findAllPairs(arr, target) {
  let result = []; // store all pairs

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      if (arr[i] + arr[j] === target) {
        result[result.length] = [arr[i], arr[j]]; // store pair
      }

    }
  }

  return result;
}

// Test
console.log(findAllPairs([2, 7, 11, 15, -2, 9], 9));