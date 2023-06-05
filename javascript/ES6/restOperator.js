/**
 *  rest operator (...)
 */

const arrowfunction = (...rest) => {
  /** Type of arguments is object [] */
  console.log(typeof rest);

  /** sum of all the element  */
  let sumOfelement = 0;
  for (const i of rest) {
    sumOfelement += i;
  }
  return sumOfelement;
};

console.log(arrowfunction(10, 20, 30));

/**
 * Output
 * 60
 */
