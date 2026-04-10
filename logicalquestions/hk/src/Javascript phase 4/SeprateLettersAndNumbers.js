const mixedArray = [1, 'a', 2, 'b', 3, 'c', 4, 'd'];

const numbers = [];
const letters = [];

for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "number") {
    numbers.push(mixedArray[i]);
  } else if (typeof mixedArray[i] === "string") {
    letters.push(mixedArray[i]);
  }
}

console.log("Numbers:", numbers); // [1, 2, 3, 4]
console.log("Letters:", letters); // ['a', 'b', 'c', 'd']





// const mixedArray = [1, 'a', 2, 'b', 3, 'c'];

// const numbers = mixedArray.filter(item => typeof item === "number");
// const letters = mixedArray.filter(item => typeof item === "string");

// console.log(numbers); // [1, 2, 3]
// console.log(letters); // ['a', 'b', 'c']