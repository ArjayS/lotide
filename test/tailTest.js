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
