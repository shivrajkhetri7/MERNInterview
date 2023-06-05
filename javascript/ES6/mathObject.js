/**
 * Math object ES6
 */

/**
 * @description to check the numbers wether positive or negative
 * sign()
 */

const positiveNum = 5.55;
console.log(Math.sign(positiveNum));

/**
 * Output
 * @returns 1
 */

const negativeNum = -5.55;
console.log(Math.sign(negativeNum));

/**
 * Output
 * @returns -1
 */

const notANumber = NaN;
console.log(Math.sign(notANumber));

/**
 * Output
 * @returns NaN
 */

const zero = 0;
console.log(Math.sign(zero));

/**
 * Output
 * @returns 0
 */

/********************************************************************************/

/**
 * trunc() remove / floor()
 */

console.log(Math.trunc(positiveNum));
console.log(Math.floor(positiveNum));
/**
 * Output
 * @returns 5
 */

console.log(Math.trunc(negativeNum));
console.log(Math.floor(negativeNum));

/**
 * @description diff between floor and trunc
 * Output
 * trunc @returns -5
 * floor @returns -6
 */
