//-----redeclare-------
{
var a = 10;
var a = 20;
console.log(a); // 20
}
//---------reassign--------------
var b = 40;
b = 60;
b = 50;
console.log(b); // 50

//--------
var y = 10;

{
  var y = 20;
}

console.log(y);// 20
//--------------------------------

var a = 10;

{
  var a = 20;
  console.log(a);
}

console.log(a);
// 20
//20

//---------------------------------------------

var a = 10;

function test() {
 var a = 50;
}

test();
console.log(a);// 10

/* here redclaration wont work coz its inside a function and var is
 funcion scoped so both inner and outer varibale will be diffrent ,
  and coz of function scope inner var 50 wont be avail outside the function */

//-------------------------------------------------------------------

var a = 10;

function test() {
 a = 50;
}

test();
console.log(a);// 50

/* here the output is 50 coz we are reassigning, not redeclaring ,
 when you use var a = 50 inside the function you are declaring
  a new varibale that exist only inside the function, but here 
  we are reassigning, that will reasign the new value to the exixting 
  variable, so outer variable will get inner reassined value */

  //----------------------------------------------------------------------------

