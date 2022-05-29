const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    // console.log(
    //   `The type of operand for actual is a ${typeof actual}, and the type of operand for expected is ${typeof expected}`
    // );
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    // console.log(
    //   `The type of operand for actual is a ${typeof actual}, and the type of operand for expected is ${typeof expected}`
    // );
  }
};

const countOnly = function (allItems, itemsToCount) {};
