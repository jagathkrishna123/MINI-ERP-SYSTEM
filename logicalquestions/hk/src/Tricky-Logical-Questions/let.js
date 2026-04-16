// // No Redeclaration
// let a = 10;
// let a = 20; // ❌ SyntaxError
// let a = 10;
// //....................................
// // Reassignment is Allowed
// let a = 10;
// a = 20; // ✅ allowed
// //........................
// // Temporal Dead Zon

// console.log(a); // ❌ ReferenceError
// let a = 10;
// //..............................................
// {
//   let a = 20;
//   console.log(a); // 20
// }

// console.log(a); // 10

let a = 10;

{
  a = 20;
}

console.log(a);