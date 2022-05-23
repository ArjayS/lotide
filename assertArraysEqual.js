const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.log(
      `The type of operand for actual is a ${typeof actual}, and the type of operand for expected is ${typeof expected}`
    );
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    console.log(
      `The type of operand for actual is a ${typeof actual}, and the type of operand for expected is ${typeof expected}`
    );
  }
};

const eqArrays = function (array1, array2) {
  // determining if both arrays are not equal in length
  if (array1.length !== array2.length) {
    return false;
  }

  // determining if each of the elements (either number or string) are not the same
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // if conditions above are not false the function will return true
  return true;
};

////////////////////////////////////////////////////
console.log("-----------------------------------");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log("-----------------------------------");
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
console.log("-----------------------------------");
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
console.log("-----------------------------------");
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
console.log("-----------------------------------");
