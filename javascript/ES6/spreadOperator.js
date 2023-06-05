/**
 *  spread Operator
 */

/** Spread operator basically use for concat and destructing of array  */

const array1 = ["mango", "Lemon", "potato"];
const array2 = ["tomato", " ladyfinger"];

/** concat array1 and array2  */

const array3 = [...array1, ...array1];
/**
 * @returns [ 'mango', 'Lemon', 'potato', 'mango', 'Lemon', 'potato' ]
 */

/**
 * Destructure array1 and print first element
 */

const [name1, name2, name3] = array1;
// console.log(name1);
/**
 * @returns mango
 */

/**
 *  destructuring with rest operator
 */

const [tesName, ...rest] = array1;
console.log(rest);

/**
 * Output
 * @returns [ 'Lemon', 'potato' ]
 */
