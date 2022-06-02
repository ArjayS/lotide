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

const letterPositions = function (sentence) {
  const result = {};
  let index = 0;
  for (const letter of sentence) {
    if (letter === " ") {
    } else if (result[letter] === undefined) {
      result[letter] = [index];
    } else {
      result[letter].push(index);
    }
    index++;
  }
  return result;
};

console.log("-----------------------------------");
assertArraysEqual(letterPositions("hello").e, [1]);
console.log("-----------------------------------");
