const App = require("../src/App");
const gameTool = require("../src/GameTool");

describe("gameTool 테스트", () => {
  test("generateRandomNumber, 랜덤으로 겹치지 않는 수 3개 생성", () => {
    const set = new Set();
    const randomNumbers = gameTool.generateRandomNumber();

    [...randomNumbers].forEach((number) => {
      expect(number.toString()).toMatch(/[1-9]/);
      set.add(number);
    });

    expect(set.size).toBe(3);
  });

  test("isValidateNumber, 입력받은 값이 겹치지 않는 3자리 수인 경우 true", () => {
    const wrongNumbers = ['123', '813', '352'];
    wrongNumbers.forEach(wrongNumber => {
      expect(gameTool.isValidateNumber(wrongNumber)).toBe(true);
    });
  });

  test("isValidateNumber, 입력받은 값이 1-9 사이의 숫자가 아닌 경우 false", () => {
    const wrongNumbers = ['240', '2.3', 's56'];
    wrongNumbers.forEach(wrongNumber => {
      expect(gameTool.isValidateNumber(wrongNumber)).toBe(false);
    });
  });

  test("isValidateNumber, 입력받은 값이 3자리가 아닌 경우 false", () => {
    const wrongNumbers = ['1234', '84213', '35'];
    wrongNumbers.forEach(wrongNumber => {
      expect(gameTool.isValidateNumber(wrongNumber)).toBe(false);
    });
  });

  test("isValidateNumber, 입력받은 값이 중복되는 값이 있는 경우 false", () => {
    const wrongNumbers = ['122', '888', '339'];
    wrongNumbers.forEach(wrongNumber => {
      expect(gameTool.isValidateNumber(wrongNumber)).toBe(false);
    });
  });

  test("checkBaseballCount, 스트라이크, 볼 판별", () => {
    const tests = [
      {
        answer: '734',
        input: '137',
        result: {strike: 1, ball: 1},
      },
      {
        answer: '849',
        input: '849',
        result: {strike: 3, ball: 0},
      },
      {
        answer: '276',
        input: '627',
        result: {strike: 0, ball: 3},
      },
    ]
    
    tests.forEach(test => {
      expect(gameTool.checkBaseballCount(test.answer, test.input)).toStrictEqual(test.result);
    })
  });
});


