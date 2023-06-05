const obj = {
  name: "Shivraj",
  sname: "Khetri",
  fullname: function () {
    return `${this.name} ${this.sname}`;
  },
};

const obj2 = {
  name: "akash",
  sname: "yelwande",
  __proto__: obj,
};

console.log(obj2.fullname());
