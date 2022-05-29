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

const countOnly = function (allItems, itemsToCount) {
  const results = {};

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 1);
assertEqual(result1["Agouhanna"], undefined);
