const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe("capitalizeFirstLetters", () => {
  it("Is a function and accepts one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  
  it('transforms javaScript correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
  });

  it("Works for an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});