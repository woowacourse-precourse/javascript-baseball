const App = require("../src/App");
const { Console, Random } = require("@woowacourse/mission-utils");
const app = new App();

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(console, "log");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임 시작 문구", () => {
  test("숫자 야구 게임을 시작합니다.", () => {
    const logSpy = getLogSpy();
    const message = "숫자 야구 게임을 시작합니다.";

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });
});

describe("목표값 테스트", () => {
  test("목표값 개수", () => {
    const refNumbers = app.refNumbersGetter();
    expect(refNumbers.length).toEqual(3);
  });

  test("목표값 내 중복 확인", () => {
    const refNumbers = app.refNumbersGetter();

    let duplicateChecker;

    for (let i = 0; i < 3; i++) {
      duplicateChecker =
        refNumbers.indexOf(refNumbers[i]) === i ? "clear" : "duplicate";
    }

    expect(duplicateChecker).toEqual("clear");
  });

  test("목표값 숫자 범위 1~9 확인", () => {
    const refNumbers = app.refNumbersGetter();

    let duplicateChecker;

    for (let i = 0; i < 3; i++) {
      rangeChecker =
        refNumbers[i] < 10 && refNumbers[i] > 0 ? "clear" : "rangeOver";
    }
    expect(rangeChecker).toEqual("clear");
  });
});

describe("판정 테스트", () => {
  test("스트라이크 카운터 테스트", () => {
    const strikeTestExamples = [
      ["123", "123", 3],
      ["123", "124", 2],
      ["123", "145", 1],
      ["123", "312", 0],
      ["123", "412", 0],
      ["123", "452", 0],
      ["123", "456", 0],
      ["123", "321", 1],
      ["123", "513", 1],
    ];

    strikeTestExamples.map((example) => {
      expect(app.strikeCounter(example[0], example[1])).toEqual(example[2]);
    });
  });

  test("볼 카운터 테스트", () => {
    const ballTestExamples = [
      ["123", "123", 0],
      ["123", "124", 0],
      ["123", "145", 0],
      ["123", "312", 3],
      ["123", "412", 2],
      ["123", "452", 1],
      ["123", "456", 0],
      ["123", "321", 2],
      ["123", "513", 1],
    ];

    ballTestExamples.map((example) => {
      expect(app.ballCounter(example[0], example[1])).toEqual(example[2]);
    });
  });

  test("판정", () => {
    const discriminateExamples = [
      [3, 0, "3스트라이크"],
      [2, 0, "2스트라이크"],
      [1, 0, "1스트라이크"],
      [0, 3, "3볼"],
      [0, 2, "2볼"],
      [0, 1, "1볼"],
      [0, 0, "낫싱"],
      [1, 2, "2볼 1스트라이크"],
      [1, 1, "1볼 1스트라이크"],
    ];

    discriminateExamples.map((example) => {
      expect(app.discriminator(example[0], example[1])).toEqual(example[2]);
    });
  });
});

describe("예외 테스트", () => {
  test("사용자 숫자 입력 입력 예외 테스트", () => {
    const errorInputList = [
      "1234",
      "1",
      "12",
      "asd",
      "ㅁㄴㅇ",
      "1;2",
      "1ㅏ2",
      "1l2",
    ];

    const errorOutputList = [
      "3자리의 숫자를 입력해주세요.",
      "3자리의 숫자를 입력해주세요.",
      "3자리의 숫자를 입력해주세요.",
      "숫자만 입력해주세요.",
      "숫자만 입력해주세요.",
      "숫자만 입력해주세요.",
      "숫자만 입력해주세요.",
      "숫자만 입력해주세요.",
    ];

    errorInputList.map((errorInput, index) => {
      expect(() => app.totalUserInputErrorChecker(errorInput)).toThrow(
        errorOutputList[index]
      );
    });
  });

  test("게임 재시작 입력 예외 테스트", () => {
    const errorInputList = ["3", "4", "5", "6", "ㅁㄴㅇ", "1;2", "1ㅏ2", "1l2"];
    const errorOutput = "1또는 2만 입력할 수 있습니다.";

    errorInputList.map((errorInput) => {
      mockQuestions(errorInputList);
      expect(() => app.reStartSelector()).toThrow(errorOutput);
    });
  });
});
