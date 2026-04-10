console.log(100 + "8" + 20); // "100820"
console.log(100 - "8" - 20); // 72
console.log(100 - "8" + 20);// 112
console.log(true + true); //👉 2(true = 1)
console.log(true + "1"); // "true1"
console.log("10" - "5" - "2"); //3
console.log("10" + "5" - "2"); // 103
console.log(true == "1"); // true
console.log(false == "0"); // true
console.log([] == ""); // true
console.log([] == false); // true
console.log([] === false); // false
console.log([] + 1);  // "1"
console.log([] == []); // false 
console.log([] === []); // false
// 👉 "Because arrays are reference types, and each array literal creates a new object in memory, so their references are different."






console.log("Start");

async function test() {
  console.log("Inside");
}

test();

console.log("End");

// Start
// Inside
// End

//............................
console.log("Start");

async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

test();

console.log("End");

// Start
// A
// End
// B

//.....................................

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Start
// End
// Promise
// Timeout

//...............................
async function test() {
  console.log("A");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("B");
      resolve();
    }, 0);
  });

  console.log("C");
}

test();
console.log("D");

// A
// D
// B
// C
//...........................................
