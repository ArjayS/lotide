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
