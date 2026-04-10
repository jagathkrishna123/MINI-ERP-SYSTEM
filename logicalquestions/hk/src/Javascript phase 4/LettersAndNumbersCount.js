const mixedArray = [1, 'a', 2, 'b', 'c'];

let numberCount = 0;
let letterCount = 0;

for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "number") {
    numberCount++;
  } else if (typeof mixedArray[i] === "string") {
    letterCount++;
  }
}

console.log("Numbers:", numberCount); // 2
console.log("Letters:", letterCount); // 3