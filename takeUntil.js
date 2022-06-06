const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion: Passed, ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion: Failed, ${array1} !== ${array2}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const takeUntil = function (array, callback) {
  const stoppingIndex = 0;
  const newLength = 0;
  for (let i = 0; i <= array.length; i++) {
    if (callback(array[i])) {
      let stoppingIndex = i;
      let newLength = array.length - i;
      array.splice(stoppingIndex, newLength);
    }
  }
  return array;
};

////////////////////////////////////////////EXPECTED_INPUT/////////////////////////////////////////////////////////

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));

////////////////////////////////////////////EXPECTED_OUTPUT/////////////////////////////////////////////////////////

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
