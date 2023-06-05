/**
 * Diff between Pure function and impure function
 */

let a = 10;

/**
 * Pure function
 */

function increment(a) {
  return a + 1;
}

// console.log("resultant", increment(a));
// console.log("resultant", increment(a));
// console.log("resultant", increment(a));

/**
 * -------------Output-------------------
 * resultant 11
 * resultant 11
 * resultant 11
 */

/**
 * Impute function
 * @description  impure function updated the global variable values and returns the new values
 */

function impureincrement() {
  return a++;
}

// console.log("resultant", impureincrement());
// console.log("resultant", impureincrement());
// console.log("resultant", impureincrement());

/**
 * -------------Output-------------------
 * resultant 10
 * resultant 11
 * resultant 12
 */

/**
 * trick
 */

function multiplication(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log("nested function", multiplication(2)(5)(2));
