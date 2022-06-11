// const words = ["ground", "control", "to", "major", "tom"];

// const map = function (array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log(`item BEFORE: ${item}`);
//     console.log(`item AFTER: ${callback(item)}`);
//     console.log(`---`);
//   }
//   return results;
// };

// const results1 = map(words, (word) => word[0]);

// console.log(results1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const words = ["ground", "control", "to", "major", "tom"];

// const map = function (array, callback) {
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//   }
//   return results;
// };

// const results1 = map(words, (word) => word[0]);

// console.log(results1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);

console.log(results1);
console.log(eqArrays(results1, ["g", "c", "t", "m", "t"]));
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));

const results2 = map(
  ["dog", "cat", "squirrel", "trashDog", "coyote"],
  (word) => word[0]
);
console.log(assertArraysEqual(results2, ["d", "c", "s", "t", "c"]));

const results3 = map(
  ["Bob", "Linda", "Tina", "Louise", "Gene"],
  (word) => word[0]
);
console.log(assertArraysEqual(results3, ["B", "L", "T", "l", "G"]));
