const App = require("../src/App");
const Utils = require("../src/Utils");

const repeat = (callbackFn, trial = 100) => {
  for (let repeatCount = 0; repeatCount < trial; repeatCount += 1) {
    callbackFn();
  }
};

describe("숫자 야구 게임 단위 테스트", () => {
  test("generateRandomNumber 메서드로 서로 다른 3자리의 랜덤숫자를 반환", () => {
    const app = new App();
    expect(Utils.removeDuplicatedString("111").length).toEqual(1);
    expect(Utils.removeDuplicatedString("121").length).toEqual(2);
    repeat(() => {
      const randomNumber = app.generateRandomNumber();
      expect(Utils.removeDuplicatedString(randomNumber).length).toEqual(3);
    });
  });

  test("isValidNumber 메서드로 입력 받은 숫자가 서로 다른 3자리의 숫자인지 확인", () => {
    const app = new App();

    const TEST_CASE = [
      {
        input: "",
        result: false,
      },
      {
        input: " ",
        result: false,
      },
      {
        input: "\n",
        result: false,
      },
      {
        input: "1",
        result: false,
      },
      {
        input: "12",
        result: false,
      },
      {
        input: "123",
        result: true,
      },
      {
        input: "111",
        result: false,
      },
      {
        input: "1234",
        result: false,
      },
      {
        input: "abc",
        result: false,
      },
    ];

    TEST_CASE.forEach(({ input, result }) => {
      expect(app.isValidNumber(input)).toBe(result);
    });
  });

  test("getResult 메서드로 스트라이크, 볼 정보를 반환", () => {
    const app = new App();

    const TEST_CASE = [
      {
        inputs: ["123", "123"],
        results: [3, 0],
      },
      {
        inputs: ["713", "123"],
        results: [1, 1],
      },
      {
        inputs: ["713", "145"],
        results: [0, 1],
      },
      {
        inputs: ["713", "671"],
        results: [0, 2],
      },
      {
        inputs: ["713", "256"],
        results: [0, 0],
      },
    ];

    TEST_CASE.forEach(({ inputs, results }) => {
      const [computerNumber, enteredNumber] = inputs;
      const [strikeCount, ballCount] = results;
      const { strike, ball } = app.getResult(computerNumber, enteredNumber);
      expect(strike).toBe(strikeCount);
      expect(ball).toBe(ballCount);
    });
  });
});
