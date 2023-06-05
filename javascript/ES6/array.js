const array = [10, 20, 34, 14, 23, 51, 84, 44, 96, 24, 12, 36, 67];
const array2 = [01, 33, 41];

/***
 * Spread operator
 * Array concatenation
 */

/**
 * Concat array to array2 store into arrayConcat variable
 */

const arrayConcat = [...array, ...array2];
// console.log(arrayConcat);

/**
 * Output 
 * [
  10, 20, 34, 14, 23, 51,
  84, 44, 96, 24, 12, 36,
  67,  1, 33, 41
]
 */

/**
 * Array sorting
 */

array.sort((a, b) => a - b);
// console.log(array);

/**
 * Output 
 * [
  10, 12, 14, 20, 23, 24,
  34, 36, 44, 51, 67, 84,
  96
]
 */

/**
 * sum of all the array
 */

let sum = 0;
array.forEach((element) => {
  sum = sum + element;
});

// console.log(sum);
/**
 * Sum of all the element
 *515
 */

/**
 * find the number which is not divisible by 2
 *
 */

const notdivisibleby2 = array.filter((item) => {
  return item % 2 !== 0;
});

// console.log(notdivisibleby2);

/**
 * Output
 * [ 23, 51, 67 ]
 */

/*********************************************Tricks*****************************************************/

/**
 * find the mountain array
 */

/** Problem statement
 * Check the array from first iteration certain period of time has pick and from there till the end of array its always
 * less than its previous element
 */

const mountainList = [1, 3, 4, 5, 6, 7, 5, 4, 2, 1];
const mountainarray = (array) => {
  let result = false;
  let pickIndex = 0;
  // Check first array length
  if (array.length < 0) {
    return result;
  }

  for (let index = 0; index < array.length; index++) {
    if (!(array[index + 1] > array[index])) {
      pickIndex = index;
      break;
    }
  }

  for (let index = pickIndex; index < array.length; index++) {
    if (array[index + 1] < array[index]) {
      result = true;
    } else if (
      array[index + 1] > array[index] ||
      array[index + 1] == array[index]
    ) {
      result = false;
      break;
    }
  }

  return result;
};

// console.log(mountainarray(mountainList));

/**
 * Output
 *
 * true
 */

/**
 * query's
 *
 * 1 . make is single array not any nested array
 * 2 . sum of all the element
 * 3 . find the largest number
 * 4 . find smallest number
 */

const nestedArray = [10, 30, 42, [20, 30, 45], [51, 35, 95, 74]];

//1 . make is single array not any nested array

const singleArray = (nestedArray) => {
  let array = [];
  let newarray = nestedArray.map((element) => {
    if (typeof element !== "number") {
      const setArray = singleArray(element);
      array = [...array, ...setArray];
    } else {
      array.push(element);
    }
  });
  return array;
};

// console.log(singleArray(nestedArray));

/**
 *  convert array to array of object
 */

const names = [
  "Shivraj",
  "Altaf",
  "Rajesh",
  "Mangesh",
  "Devraj",
  "Ramesh",
  "Raja",
  "Mahesh",
];

const arrObj = names.map((item, i) => {
  return { [i]: item };
});

// console.log(arrObj);

/**
 * Output 
 * 
 * [
  { '0': 'Shivraj' },
  { '1': 'Altaf' },  
  { '2': 'Rajesh' }, 
  { '3': 'Mangesh' },
  { '4': 'Devraj' }, 
  { '5': 'Ramesh' }, 
  { '6': 'Raja' },   
  { '7': 'Mahesh' }  
]
 */

/**
 *  Update the element at specific location In array
 */

const updateArray = [1, 2, 3, 4, 5, 6, 7, 7, 9];
updateArray.splice(7, 1, 8);
console.log(updateArray);
/**
 * Output 
 * [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
 */
