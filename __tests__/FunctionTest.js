const App = require("../src/App");

const app = new App();

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
    const refNumbersArray = app.refNumbersArrayGetter();
    expect(refNumbersArray.length).toEqual(3);
  });

  test("목표값 내 중복 확인", () => {
    const refNumbersArray = app.refNumbersArrayGetter();

    let duplicateChecker;
    refNumbersArray.map((number, index) => {
      duplicateChecker =
        refNumbersArray.indexOf(number) === index ? "clear" : "duplicate";
    });
    expect(duplicateChecker).toEqual("clear");
  });

  test("목표값 숫자 범위 1~9 확인", () => {
    const refNumbersArray = app.refNumbersArrayGetter();

    let rangeChecker;
    refNumbersArray.map((number, index) => {
      rangeChecker =
        Number.isInteger(number) && number < 10 && number > 0
          ? "clear"
          : "rangeOver";
    });
    expect(rangeChecker).toEqual("clear");
  });
});

describe("입력값 배열화 테스트", () => {
  test("입력값 배열화", () => {
    const userInput = "123";
    expect(app.stringToNumberArrayConverter(userInput)).toEqual([1, 2, 3]);
  });
});

describe("판정 테스트", () => {
  test("스트라이크 카운터 테스트", () => {
    const strikeTestExamples = [
      [[1, 2, 3], [1, 2, 3], 3],
      [[1, 2, 3], [1, 2, 4], 2],
      [[1, 2, 3], [1, 4, 5], 1],
      [[1, 2, 3], [3, 1, 2], 0],
      [[1, 2, 3], [4, 1, 2], 0],
      [[1, 2, 3], [4, 5, 2], 0],
      [[1, 2, 3], [4, 5, 6], 0],
      [[1, 2, 3], [3, 2, 1], 1],
      [[1, 2, 3], [5, 1, 3], 1],
    ];

    strikeTestExamples.map((example) => {
      expect(app.strikeCounter(example[0], example[1])).toEqual(example[2]);
    });
  });

  test("볼 카운터 테스트", () => {
    const ballTestExamples = [
      [[1, 2, 3], [1, 2, 3], 0],
      [[1, 2, 3], [1, 2, 4], 0],
      [[1, 2, 3], [1, 4, 5], 0],
      [[1, 2, 3], [3, 1, 2], 3],
      [[1, 2, 3], [4, 1, 2], 2],
      [[1, 2, 3], [4, 5, 2], 1],
      [[1, 2, 3], [4, 5, 6], 0],
      [[1, 2, 3], [3, 2, 1], 2],
      [[1, 2, 3], [5, 1, 3], 1],
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
  test("예외 테스트", () => {
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

    errorInputList.map((errorInput) => {
      expect(() => {
        app.errorChecker(errorInput);
      }).toThrow();
    });
  });
});
