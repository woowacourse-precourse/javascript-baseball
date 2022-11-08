const App = require("../src/App");

const app = new App();

describe("generate valid game number", () => {
  test("generate valid game number", () => {
    const isThreeDifferntDigitWithoutZero = (numberArray) => {
      const validDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      if (!Array.isArray(numberArray)) return false;
      if (numberArray.length !== 3) return false;
      if (!numberArray.every((num) => validDigits.includes(num))) return false;
      if (
        numberArray[0] === numberArray[1] ||
        numberArray[1] === numberArray[2] ||
        numberArray[0] === numberArray[2]
      ) {
        return false;
      }

      return true;
    };
    for (let i = 0; i < 5; i++) {
      const gameNumbers = app.selectGameNumbers();
      expect(isThreeDifferntDigitWithoutZero(gameNumbers)).toBe(true);
    }
  });
});
