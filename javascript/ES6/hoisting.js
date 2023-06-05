/**
 * hoisting is javascript concept
 * @description whenever define function and called before the definition so , in such case
 * hoisting concept comes into picture it moves all the definitions on top of hierarchy and moves all the call at down
 */

/**
 * defined name variable
 */
let name = "shivraj";

/**
 * Called function at top of function definition
 */
console.log(returnName(name));

/**
 *
 * @param {*} name
 * @returns  name
 */
function returnName(name) {
  return name;
}
