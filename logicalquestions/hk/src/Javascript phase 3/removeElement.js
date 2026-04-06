function removeElement(arr, value) {
  let result = [];   // new array to store final values
  let k = 0;         // index for result array

  for (let i = 0; i < arr.length; i++) {
    // check each element
    if (arr[i] !== value) {
      result[k] = arr[i]; // add element to result
      k++;                // move to next index
    }
  }

  return result; // return new array
}

// Test
let arr = [1, 2, 3, 2, 4];
let value = 2;

console.log(removeElement(arr, value)); 
// Output: [1, 3, 4]

//////////////////////////////////////////////////////////

// function removeElement(arr, value) {
//   let result = [];
//   let k = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== value) {
//       result[k] = arr[i];
//       k++;
//     }
//   }

//   return result;
// }

// // Directly passing values
// console.log(removeElement([1, 2, 3, 2, 4], 2));
// // Output: [1, 3, 4]