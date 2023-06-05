/**
 * Diff between arrow function normal function
 */

/**
 * Normal function
 */

function functionName() {
  return "This is normal function ";
}

// console.log(functionName());

/**
 * Output
 * This is normal function
 */

const arrowfunction = () => {
  return `This is arrow function`;
};

// console.log(arrowfunction());

/**
 * Output
 * This is arrow function
 */

/**
 * @description arrow function basically short representation of  normal function, but in terms with this keyword in object it will get * failed
 */

const obj = {
  name: "shivraj",
  phone: "8830******",
  address: {
    city: "pune",
    country: "india",
  },
  noFunction: function () {
    return `Name : ${this.name} Phone : ${this.phone} `;
  },
  arrFunction: () => {
    return `Name : ${this.name} Phone : ${this.phone} `;
  },
};

// console.log(obj.noFunction());
// console.log(obj.arrFunction());

/**
 * output
 *
 * Name : shivraj Phone : 8830******
 *
 * Name : undefined Phone : undefined
 */
