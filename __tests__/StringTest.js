const NumberInput = require("../src/numberInput.js");
const Compare = require("../src/compare.js");
const hint = require("../src/hint.js");

describe("compare", () => {
  test("case1", () => {
    expect(Compare("135", [1,3,5])).toEqual([3,0]);
  });

  test("case2", () => {
    expect(Compare("671", [7,1,3])).toEqual([0,2]);
  });

  test("case3", () => {
    expect(Compare("246", [1,3,5])).toEqual([0,0]);
  });
});

describe("hint", () => {
  test("case1", () => {
    expect(hint([3,0])).toEqual("3스트라이크");
  });

  test("case2", () => {
    expect(hint([1,1])).toEqual("1볼 1스트라이크");
  });

  test("case3", () => {
    expect(hint([1,0])).toEqual("1스트라이크");
  });

  test("case4", () => {
    expect(hint([0,1])).toEqual("1볼");
  });

  test("case5", () => {
    expect(hint([0,0])).toEqual("낫싱");
  });

  test("case6", () => {
    expect(hint([2,1])).toEqual("1볼 2스트라이크");
  });
});

describe("validate", () => {
  test("case1", () => {
    expect(() => {NumberInput.validate("1234")}).toThrow();
  });

  test("case2", () => {
    expect(() => {NumberInput.validate("333")}).toThrow();
  });

  test("case3", () => {
    expect(() => {NumberInput.validate("hi")}).toThrow();
  });
});
