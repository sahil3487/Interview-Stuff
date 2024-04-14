//* Diffrence bettwwen null and undifibe

//? In undefine the variable has been decalred but its not assign yet
// Null usally denote the absent value and developer can set the value according to it

let foo;

let bar = null;

//Type corrcion in javascript refer to the automatic conversation of the from one data type to another

console.log("5" - 3);

console.log("4" == 4);

//Hosting is the by defult behaviour of the javaScript  where variable and function contaaing move to the top of there containng scope during complization ..

console.log(x);
var x = 10;
console.log(x);

hoo();
function hoo() {
  console.log("Hello World");
}

// Scope in javaScript define the accessbilty and visablity of variablr and function within code block and function
// Scope are primary two type Globel and local

let globelvar = " i am globel ";

function testScope() {
  console.log(globelvar);
}

testScope();
console.log(globelvar);

//! Local Scope

function localScope() {
  let localvar = "i am a local Scope ";

  console.log(localScope);
}
localScope();

// console.log(localvar);
//? A closuer in javaScript in the combinataion of the function and the lexical eniviroment within which that function was declare.
//? A clousure in js is a functon that retain access to variable from its parents scope even after parents function has finshed excustion.
// A clousre are used to achive the encapsulation and data hiding simailar to what commanly assosited with object orinted
//   in this can hididng the inner working how the function oprate the data
// this help keep things orgamised andd prevent outside code from directory accesing or changeing the data


function outerFunction() {
  let outervarible = "Im from the outer function";

  function inner() {
    console.log(outervarible);
  }
  return inner;
}

const myClosuer = outerFunction();
myClosuer();

//This refere to excution contest typically an object that own the function where this is used.
// This is is a globel scope
// lamda function / arrow function
//arrow function have fixed context for this defined at function creation and are not changed by how they are invoked .
// lamda function dont have own this
// they use the this from thire surrounding lexical context

var name = "sahil";
function regular() {
  return "hello , " + name + "!";
}

console.log(regular());

let arro = (name) => "hello , " + name + "!";

console.log(arro());


//template Litral is nothing but the moredn javascript version whgich offer more flaxiable way to work with string 

let name1= "john ";
let message  = `hello  ${name1}!`

console.log(message);

// What is higher-order function in javaScript ?

//high order function is a function which takes other functions 


const num = [1,3,4,5,6]

const resuult =  num.map(num=> num * 2 )

console.log(resuult)


const result = num.filter(num => num % 2==0)
console.log(result);


//? JavaScript support first class function it can be trated like as varibale and then assigned to other variable or passed as argumenst