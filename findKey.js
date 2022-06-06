const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // assertEqual("Lighthouse Labs", "Bootcamp");
// // assertEqual(1, 1);

const findKey = function (shows, rating) {
  for (const keys of Object.keys(shows)) {
    if (rating(shows[keys])) {
      return keys;
    }
  }
  return undefined;
};
////////////////////////////////////////////EXPECTED_INPUT/////////////////////////////////////////////////////////

console.log(
  "/////////////////////////////////////////////////////////////////////////////////////////////////////"
);
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);
console.log(
  "/////////////////////////////////////////////////////////////////////////////////////////////////////"
);
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 1
  ),
  "Blue Hill"
);
console.log(
  "/////////////////////////////////////////////////////////////////////////////////////////////////////"
);
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 3
  ),
  "Akaleri"
);
console.log(
  "/////////////////////////////////////////////////////////////////////////////////////////////////////"
);

////////////////////////////////////////////EXPECTED_OUTPUT/////////////////////////////////////////////////////////

// "noma"
