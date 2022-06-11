// const assertArraysEqual = require("./assertArraysEqual");

// const eqArrays = require("./eqArrays");

// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i <= array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const flatten = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(array[i]);
    }
  }
  return newArray;
};

module.exports = flatten;
