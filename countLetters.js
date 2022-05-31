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

console.log(result1);
