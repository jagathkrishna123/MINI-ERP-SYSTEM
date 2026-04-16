var a = 10;

function test() {
  console.log(a); // undefined
  var a = 20;
}
//........................................................
var a = 10;

function test() {
  console.log(a);
}

test();// 10
// //..................................................................................
var a = 10;

function test() {
  
  console.log("first " + a);
  var a = 20;
  console.log("second " + b);
}

test();


// During Creation Phase, JS hoists (moves) variable declarations to the top-----'var a' inside the function is moved to the top (hoisting)
//So "a" exists but its value is undefined before assignment// OR// It creates 'a' and assigns it undefined before execution starts
// Therefore "first undefined" is printed instead of 10// OR // Then in Execution Phase, values are assigned line by line


//  Key Points:
// Hoisting happens in Creation Phase
// Only declarations are moved, not values
// Variables start as undefined
// Values are assigned later in Execution Phase

//internal-working

// Move declaration to top (Hoisting).....

/*function test() {
  var a;

  console.log("first " + a);
  a = 20;
  console.log("second " + a);
}*/

//..................................................................................................

var a = 10;

function test() {
  console.log(a);
  var a = 20;
  console.log(a);
}

test();// undefined


//..............note.............................
var a = 10;

function test() {
  console.log(a);

}

test();//10

/*while executing js check if there is any "a" inside the function 
and only after that it checks outside the function for a, in this
 example it looked inside the function and found nothing so it went
 outside the function and there it is, he found an "a" */

//.............................................................

var a = 10;

function test() {
  console.log("1:", a);

  if (true) {
    var a = 20;
    console.log("2:", a);
  }

  console.log("3:", a);
}

test();
// 1: undefined
// 2: 20
// 3: 20
//-------working---
function test() {
  var a; // 🔥 hoisted

  console.log("1:", a);

  if (true) {
    a = 20;
    console.log("2:", a);
  }

  console.log("3:", a);
}

//........................................................................

var a = 10;

function outer() {
  console.log("1:", a);

  function inner() {
    console.log("2:", a);
    var a = 30;
    console.log("3:", a);
  }

  inner();
  console.log("4:", a);
}

outer();

// 1: 10
// 2: undefined
// 3: 30
// 4: 10

//..............................................

var a = 10;

function test() {
  console.log("1:", a);

  a = 20;

  console.log("2:", a);

  var a = 30;

  console.log("3:", a);
}

test();
console.log("4:", a);

// 1: undefined
// 2: 20
// 3: 30
// 4: 10

//...................................................

var a = 5;

function test() {
  console.log("1:", a);

  if (true) {
    console.log("2:", a);
    var a = 10;
    console.log("3:", a);
  }

  console.log("4:", a);
}

test();

//undefined
//10
//10
//..................................................

var a = 100;

function test() {
  console.log("1:", a);

  if (true) {
    var a = 200;
  }

  function inner() {
    console.log("2:", a);
  }

  inner();

  console.log("3:", a);
}

test();
// 1: undefined
// 2: 200
// 3: 200