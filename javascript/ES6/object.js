const obj1 = {
  name: "shivraj",
  phone: "8830*******",
  roll: 25,
  address: {
    city: "pune",
    country: "India",
    town: "katraj",
  },
};

/**
 *  typeof obj1
 *  @returns obj1
 */

/**
 * normal copy  object
 */

// const obj2 = obj1;
// console.log((obj2.name = "Kaka"));
// console.log(obj1);
// console.log(obj2);

/**
 * Output 
 * 
 * {
  name: 'Kaka',
  phone: '8830*******',
  roll: 25,
  address: { city: 'pune', country: 'India', town: 'katraj' }
}
{
  name: 'Kaka',
  phone: '8830*******',
  roll: 25,
  address: { city: 'pune', country: 'India', town: 'katraj' }
}
 */

/**
 * Shallow copy
 */

const obj3 = Object.assign({}, obj1);
// console.log((obj3.name = "kaka"));
// console.log(obj1);
// console.log(obj3);

/**
 * Output 
 * {
  name: 'shivraj',
  phone: '8830*******',
  roll: 25,
  address: { city: 'pune', country: 'India', town: 'katraj' }
}
{
  name: 'kaka',
  phone: '8830*******',
  roll: 25,
  address: { city: 'pune', country: 'India', town: 'katraj' }
}
 */

/************ shallow copy with spread operator ****************/

const obj4 = { ...obj1 };
// console.log((obj4.name = "kaka"));
// console.log(obj1);
// console.log(obj4);

/**
 * Output 
 * 
 * {
  name: 'shivraj',
  phone: '8830*******',
  roll: 25,
  address: { city: 'pune', country: 'India', town: 'katraj' }
}
{
  name: 'kaka',
  phone: '8830*******',
  roll: 25,
  address: { city: 'pune', country: 'India', town: 'katraj' }
}
 */

/***********************************************************************************************************************************/
/**
 * @description issue with shallow copy is when ever any change happened at nested object into object its update parent object data
 * so to over come this problem deep copy is the solution
 */

const obj5 = { ...obj1 };
// console.log((obj5.address.city = "Mumbai"));
// console.log(obj1);
// console.log(obj5);
/**
 * Output 
 * {
  name: 'shivraj',
  phone: '8830*******',
  roll: 25,
  address: { city: 'Mumbai', country: 'India', town: 'katraj' }
}
{
  name: 'shivraj',
  phone: '8830*******',
  roll: 25,
  address: { city: 'Mumbai', country: 'India', town: 'katraj' }
}
 */

/***********************************************************************************************************************************/

/**
 * Deep copy
 */

const obj6 = JSON.parse(JSON.stringify(obj1));
// console.log((obj6.address.city = "delhi"));
// console.log(obj1);
// console.log(obj6);

/**
 * Output 
 * {
  name: 'shivraj',
  phone: '8830*******',
  roll: 25,
  address: { city: 'pune', country: 'India', town: 'katraj' }
}
{
  name: 'shivraj',
  phone: '8830*******',
  roll: 25,
  address: { city: 'delhi', country: 'India', town: 'katraj' }
}
 */

const Jsondoc = [
  {
    name: "shivraj",
    phone: "8830*******",
    roll: 25,
    address: {
      city: "pune",
      country: "India",
      town: "katraj",
    },
  },
  {
    name: "Akash",
    phone: "8821*******",
    roll: 5,
    address: {
      city: "Mumbai",
      country: "India",
      town: "katraj",
    },
  },
  {
    name: "Kala",
    phone: "8830*******",
    roll: 35,
    address: {
      city: "Nashikh",
      country: "India",
      town: "katraj",
    },
  },
  {
    name: "Ram",
    phone: "8830*******",
    roll: 55,
    address: {
      city: "pune",
      country: "India",
      town: "katraj",
    },
  },
];

/**
 *  get all the city names
 */

let allcityname = [];
let cityname = Jsondoc.map((element, index) => {
  if (!allcityname.includes(element?.address?.city)) {
    allcityname.push(element?.address?.city);
  }
});

console.log(allcityname);

//  name of nested object ;

const nestedArrayofobject = [
  {
    name: "shivraj",
    phone: "8830*******",
    roll: 25,
    address: {
      city: "pune",
      country: "India",
      town: "katraj",
    },
  },
  {
    name: "shivraj",
    phone: "8830*******",
    roll: 25,
    address: {
      city: "pune",
      country: "India",
      town: "katraj",
    },
    test: {
      name: "Pilani",
      phone: "8830*******",
      roll: 25,
      address: {
        city: "pune",
        country: "India",
        town: "katraj",
      },
    },
  },
  {
    name: "shivraj",
    phone: "8830*******",
    roll: 25,
    address: {
      city: "pune",
      country: "India",
      town: "katraj",
    },
  },
];

function getNestednames(nestedArrayofobject) {
  let names = [];

  function extractNames(obj) {
    if (obj.hasOwnProperty("name")) {
      names.push(obj.name);
    }

    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        extractNames(obj[key]);
      }
    }
  }

  nestedArrayofobject.forEach((element) => {
    extractNames(element);
  });

  return names;
}

const nestArray = getNestednames(nestedArrayofobject);
console.log(nestArray);
