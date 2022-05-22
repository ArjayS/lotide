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

const head = function (array) {
  return array[0];
};

console.log("---------------------------");
assertEqual(head([5, 6, 7]), 5);
console.log("---------------------------");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log("---------------------------");
assertEqual(head([5]), 5);
console.log("---------------------------");
assertEqual(head([]), 5);
console.log("---------------------------");
