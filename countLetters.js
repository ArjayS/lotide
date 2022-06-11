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

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// const countLetters = function (sentence) {
//   emptyObject = {};
//   for (const letter of sentence) {
//     if (emptyObject[letter]) {
//       // if (emptyObject[letter] !== "") { //DOES NOT WORK
//       emptyObject[letter] += 1;
//     } else {
//       emptyObject[letter] = 1;
//     }
//   }
//   return emptyObject;
// };

// console.log(countLetters("LHL"));
// console.log(countLetters("lighthouse in the house"));

// Guide that help me are the countOnly.js and this website: https://stackoverflow.com/questions/4215737/convert-array-to-object

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const countLetters = function (sentence, lettersToCount) {
  emptyObject = {};
  for (const letter of sentence) {
    if (lettersToCount[letter]) {
      if (emptyObject[letter]) {
        // if (emptyObject[letter] !== "") { //DOES NOT WORK
        emptyObject[letter] += 1;
      } else {
        emptyObject[letter] = 1;
      }
    }
  }
  return emptyObject;
};

const sentenceInQuestion = "lighthouse in the house";

const result1 = countLetters(sentenceInQuestion, {
  l: true,
  i: true,
  g: true,
  h: true,
  t: true,
  o: true,
  u: true,
  s: true,
  e: true,
  n: true,
  "": false,
});

// console.log(countLetters("LHL"));
// console.log(countLetters("lighthouse in the house"));

// assertEqual(result1, {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// });

console.log(result1);
