// const assertEqual = require("../assertEqual");
// const tail = require("../tail");

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it(`returns ["squirrel", "cat", "dog"] for ["trashDog", "squirrel", "cat", "dog"]`, () => {
    const result = tail(["trashDog", "squirrel", "cat", "dog"]);
    assert.deepEqual(result, ["squirrel", "cat", "dog"]);
  });
});
