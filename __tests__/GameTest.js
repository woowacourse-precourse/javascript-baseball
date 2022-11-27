const { describe, expect, test } = require("@jest/globals");
const App = require("../src/App");
const game = require("../src/libs/game.js");
const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../src/libs/const");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("App class의 start() 테스트", () => {
  test("게임시작 문구 출력 테스트", () => {
    const logSpy = getLogSpy();
    const message = MESSAGE.START;

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(message);
  });
});

describe("game.getAnswer() 테스트", () => {
  const numbersArr = new Array(5);
  for (let i = 0; i < numbersArr.length; i++) {
    numbersArr[i] = game.getAnswer();
  }

  test("3자리의 숫자인지 확인하는 테스트", () => {
    numbersArr.forEach((number) => {
      expect(number + "").toHaveLength(3);
    });
  });

  test("0이 포함되어 있지 않은지 확인하는 테스트", () => {
    numbersArr.forEach((number) => {
      expect(number + "").toEqual(expect.not.stringContaining("0"));
    });
  });

  test("중복된 숫자가 있는지 확인하는 테스트", () => {
    numbersArr.forEach((number) => {
      const numberArr = [...new Set([...(number + "")])];
      expect(numberArr).toHaveLength(3);
    });
  });

  test("숫자로만 이루어져 있는지 확인하는 테스트", () => {
    numbersArr.forEach((number) => {
      expect(number + "").not.toBeNaN();
    });
  });
});

describe.each([
  [438, "421", { ballCount: 0, strikeCount: 1 }],
  [438, "253", { ballCount: 1, strikeCount: 0 }],
  [438, "328", { ballCount: 1, strikeCount: 1 }],
  [438, "843", { ballCount: 3, strikeCount: 0 }],
  [438, "179", { ballCount: 0, strikeCount: 0 }],
  [769, "769", { ballCount: 0, strikeCount: 3 }],
])("game.getResult(%d, %s) 테스트", (answer, input, expected) => {
  test(`${expected}을 반환하는 테스트`, () => {
    expect(game.getResult(answer, input)).toEqual(expected);
  });

  test("객체의 key로 ball과 strike를 가지는지 테스트", () => {
    const objectShape = {
      ballCount: expect.any(Number),
      strikeCount: expect.any(Number),
    };

    expect(game.getResult(answer, input)).toEqual(
      expect.objectContaining(objectShape)
    );
  });
});

describe("game.printResult() 테스트", () => {
  test("게임결과 문구를 출력 테스트", () => {
    const logSpy = getLogSpy();

    const answers = [
      game.printResult(0, 1),
      game.printResult(1, 0),
      game.printResult(1, 1),
      game.printResult(3, 0),
      game.printResult(0, 0),
      game.printResult(0, 3),
      game.printResult(2, 1),
    ];

    const messages = [
      "1스트라이크",
      "1볼 ",
      "1볼 1스트라이크",
      "3볼 ",
      "낫싱",
      "3스트라이크",
      "2볼 1스트라이크",
    ];

    mockQuestions(answers);

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });
});
