/**
 * Difference between var/ let /const
 */

// var keywords
var a = 10;

function varKeyword() {
  var a = 15;
  return a;
}

console.log("function called", varKeyword());
console.log("variable name", a);

/**
 * Let keyword example
 */
let b = 10;
function letKeyword() {
  let b = 20;
  return b;
}

console.log("function called", letKeyword());
console.log("variable name ", b);

/**
 * Const keyword example
 */

const c = 10;
function constKeyword() {
  c = 40;
  return c;
}

// console.log("function called", constKeyword());
// console.log("variable name ", c);

/**
 * @returns  "\TypeError: Assignment to constant variable.\"
 */

let trick1 = (y = z = 2);
// console.log("y", y);
// console.log("z", z);

/**
 * Output
 * y=2 ,x=2
 */

console.log("1" - "1");
/**
 * Output
 * 0
 */
