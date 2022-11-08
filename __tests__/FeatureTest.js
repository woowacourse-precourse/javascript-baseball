const { Random, Console } = require("@woowacourse/mission-utils");
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
    for (let i = 0; i < 5; i += 1) {
      app.selectGameNumbers();
      expect(isThreeDifferntDigitWithoutZero(app.gameNumbers)).toBe(true);
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

    expect(App.isValidGameInput(longInput)).toBe(false);
    expect(App.isValidGameInput(containNoneNumberInput)).toBe(false);
    expect(App.isValidGameInput(containZero)).toBe(false);
    expect(App.isValidGameInput(containSpace)).toBe(false);
    expect(App.isValidGameInput(sameNumberInput)).toBe(false);
  });

  test("valid input test", () => {
    for (let i = 0; i < 5; i += 1) {
      const input = generateValidInput();
      expect(App.isValidGameInput(input)).toBe(true);
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

    expect(App.parseGameInput(case1)).toEqual(result1);
    expect(App.parseGameInput(case2)).toEqual(result2);
    expect(App.parseGameInput(case3)).toEqual(result3);
  });
});

describe("game result", () => {
  test("count same index same number", () => {
    const case11 = [1, 2, 3];
    const case12 = [2, 3, 1];
    const result1 = 0;
    app.gameNumbers = case11;
    expect(app.getNumOfSameIndexSameNumber(case12)).toEqual(result1);

    const case21 = [7, 4, 3];
    const case22 = [4, 6, 3];
    const result2 = 1;
    app.gameNumbers = case21;
    expect(app.getNumOfSameIndexSameNumber(case22)).toEqual(result2);

    const case31 = [8, 5, 2];
    const case32 = [8, 5, 2];
    const result3 = 3;
    app.gameNumbers = case31;
    expect(app.getNumOfSameIndexSameNumber(case32)).toEqual(result3);
  });
  test("count same number", () => {
    const case11 = [1, 2, 3];
    const case12 = [2, 3, 1];
    const result1 = 3;
    app.gameNumbers = case11;
    expect(app.getNumOfSameNumber(case12)).toEqual(result1);

    const case21 = [7, 4, 3];
    const case22 = [4, 6, 3];
    const result2 = 2;
    app.gameNumbers = case21;
    expect(app.getNumOfSameNumber(case22)).toEqual(result2);

    const case31 = [1, 4, 7];
    const case32 = [8, 5, 2];
    const result3 = 0;
    app.gameNumbers = case31;
    expect(app.getNumOfSameNumber(case32)).toEqual(result3);
  });

  test("count strike, ball", () => {
    const case11 = [1, 2, 3];
    const case12 = [2, 3, 1];
    const result1 = { ball: 3, strike: 0 };
    app.gameNumbers = case11;
    expect(app.getGameResult(case12)).toEqual(result1);

    const case21 = [7, 4, 3];
    const case22 = [4, 6, 3];
    const result2 = { strike: 1, ball: 1 };
    app.gameNumbers = case21;
    expect(app.getGameResult(case22)).toEqual(result2);

    const case31 = [1, 4, 7];
    const case32 = [8, 5, 2];
    const result3 = { strike: 0, ball: 0 };
    app.gameNumbers = case31;
    expect(app.getGameResult(case32)).toEqual(result3);
  });
});

describe("print game result", () => {
  test("is corretly print game result?", () => {
    const logSpy = jest.spyOn(Console, "print");
    const case1 = { ball: 0, strike: 0 };
    const case2 = { ball: 2, strike: 0 };
    const case3 = { ball: 0, strike: 1 };
    const case4 = { ball: 1, strike: 2 };
    const printResults = ["낫싱", "2볼", "1스트라이크", "1볼 2스트라이크"];

    App.printGameResult(case1);
    App.printGameResult(case2);
    App.printGameResult(case3);
    App.printGameResult(case4);

    printResults.forEach((print) => {
      expect(logSpy).toHaveBeenCalledWith(print);
    });
  });
});

describe("validation of game over input", () => {
  test("valid game over input", () => {
    const notDigit = "a";
    const notOneOrTwo = "3";
    const twoDigit = "12";
    const longNonDigit = "asd";

    expect(App.isValidGameOverInput(notDigit)).toBe(false);
    expect(App.isValidGameOverInput(notOneOrTwo)).toBe(false);
    expect(App.isValidGameOverInput(twoDigit)).toBe(false);
    expect(App.isValidGameOverInput(longNonDigit)).toBe(false);
  });

  test("invalid game over input", () => {
    const one = "1";
    const two = "2";

    expect(App.isValidGameOverInput(one)).toBe(true);
    expect(App.isValidGameOverInput(two)).toBe(true);
  });
});
