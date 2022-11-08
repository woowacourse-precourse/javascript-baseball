const App = require("../src/App");
const { Random } = require("@woowacourse/mission-utils");

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

describe("game input validation test", () => {
  const generateValidInput = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    while (result.length !== 3) {
      const num = Random.pickNumberInList(numbers);
      if (!result.includes(num)) result.push(num);
    }
    return result.join("");
  };

  test("invalid input test", () => {
    const longInput = "1234567";
    const containNoneNumberInput = "ab2";
    const containZero = "097";
    const containSpace = "0 12";
    const sameNumberInput = "211";

    expect(app.isValidGameInput(longInput)).toBe(false);
    expect(app.isValidGameInput(containNoneNumberInput)).toBe(false);
    expect(app.isValidGameInput(containZero)).toBe(false);
    expect(app.isValidGameInput(containSpace)).toBe(false);
    expect(app.isValidGameInput(sameNumberInput)).toBe(false);
  });

  test("valid input test", () => {
    for (let i = 0; i < 5; i++) {
      const input = generateValidInput();
      expect(app.isValidGameInput(input)).toBe(true);
    }
  });
});

describe("parse user input", () => {
  test("is correctly parse valid user input", () => {
    const case1 = "123";
    const case2 = "674";
    const case3 = "923";

    const result1 = [1, 2, 3];
    const result2 = [6, 7, 4];
    const result3 = [9, 2, 3];

    expect(app.parseGameInput(case1)).toEqual(result1);
    expect(app.parseGameInput(case2)).toEqual(result2);
    expect(app.parseGameInput(case3)).toEqual(result3);
  });
});
