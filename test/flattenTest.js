const flatten = require("../flatten");
const assertArraysEqual = require("./assertArraysEqual");
// const eqArrays = require("./eqArrays");

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
