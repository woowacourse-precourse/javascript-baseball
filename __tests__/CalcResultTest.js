const App = require("../src/App");

describe("calcResult test", () => {
  const app = new App();

  test("number of [ball, strike]", () => {
    const inputs = [
      [3, 4, 8],
      [1, 4, 6],
      [4, 6, 8],
      [9, 6, 5],
      [5, 6, 9],
    ];
    app.answer = [5, 6, 9];
    const results = [
      [0, 0],
      [1, 0],
      [0, 1],
      [2, 1],
      [0, 3],
    ];

    inputs.forEach((input, idx) => {
      expect(app.calcResult(input)).toEqual(results[idx]);
    });
  });
});
