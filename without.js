const assertArraysEqual = function (source, itemsToRemove) {
  if (without(source, itemsToRemove)) {
    console.log(`✅✅✅ Assertion: Passed`);
  } else {
    console.log(`❌❌❌ Assertion: Failed`);
  }
};

const without = function (source, itemsToRemove) {
  let newSource = source.filter(function (element) {
    return itemsToRemove.indexOf(element) < 0;
  });
  return newSource;
};

console.log("-----------------------------------");
console.log(without([1, 2, 3], [1]));
console.log("-----------------------------------");
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log("-----------------------------------");
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// My initial solution for without.js, it was looping multiple times because of the second loop of the array itemsToRemove

// const without = function (source, itemsToRemove) {
//   let newArray = [];
//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (source[i] !== itemsToRemove[j]) {
//         newArray.push(source[i]);
//       }
//     }
//   }
//   return newArray;
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Not working as well, may require more tweaking, but learned a new array method called .includes
// The JavaScript includes method EXPLAINED in 5 minutes! : https://www.youtube.com/watch?v=gL4246wr-OQ&t=2s&ab_channel=CodewithAniaKub%C3%B3w

// const without = function (source, itemsToRemove) {
//   let newArray = [];
//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (source[i] !== itemsToRemove[i] && !newArray.includes(source[i])) {
//         newArray.push(source[i]);
//       }
//     }
//   }
//   return newArray;
// };
// //////////////////////////////////////////////////
// console.log("-----------------------------------");
// console.log(without([1, 2, 3], [1]));
// console.log("-----------------------------------");
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log("-----------------------------------");
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Array Filter : https://www.youtube.com/watch?v=4_iT6EGkQfk&ab_channel=ProgrammingwithMosh
// “remove common elements from two arrays javascript” Code Answer’s : https://www.codegrepper.com/code-examples/javascript/remove+common+elements+from+two+arrays+javascript

// toRemove = ["bunny", "dog", "cat"];
// myArray = ["labs", "dog", "cat", "lighthouse"];

// myArray = myArray.filter(function (el) {
//   return toRemove.indexOf(el) < 0;
// });

// console.log(myArray);
