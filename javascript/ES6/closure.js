/**
 * closure is basically returns the functions with its laical environment
 */

function closurefunction() {
  let a = 10;
  let b = 12;

  function innerfunction() {
    return a + b;
  }
  return innerfunction();
}

console.log(closurefunction());
