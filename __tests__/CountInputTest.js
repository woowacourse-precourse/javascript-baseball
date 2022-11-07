const countInput = require("../src/countInput.js");
const App = require("../src/App.js");

describe("스트라이크와 볼 갯수 카운트 기능 테스트", () => {
  test(`countInput 볼 카운트 확인`, () => {
    const computerInput = [7, 8, 9];
    const userInput = [9, 7, 8];
    const result = [3, 0];

    const methodResult = countInput(computerInput, userInput);

    expect(methodResult).toEqual(result);
  });

  test(`countInput 스트라이크 카운트 확인`, () => {
    const computerInput = [7, 8, 9];
    const userInput = [7, 1, 2];
    const result = [0, 1];

    const methodResult = countInput(computerInput, userInput);

    expect(methodResult).toEqual(result);
  });

  test(`countInput 스트라이크,볼 카운트 확인`, () => {
    const computerInput = [7, 8, 9];
    const userInput = [7, 2, 8];
    const result = [1, 1];

    const methodResult = countInput(computerInput, userInput);

    expect(methodResult).toEqual(result);
  });
});
