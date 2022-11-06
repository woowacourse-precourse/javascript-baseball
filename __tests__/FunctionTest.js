const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

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
    const refNumbersArr = app.refNumbersGetter();
    expect(refNumbersArr.length).toEqual(3);
  });

  test("목표값 내 중복 확인", () => {
    const refNumbersArr = app.refNumbersGetter();

    let duplicateChecker;
    refNumbersArr.map((number, index) => {
      duplicateChecker =
        refNumbersArr.indexOf(number) === index ? "clear" : "duplicate";
    });
    expect(duplicateChecker).toEqual("clear");
  });

  test("목표값 숫자 범위 1~9 확인", () => {
    const refNumbersArr = app.refNumbersGetter();

    let rangeChecker;
    refNumbersArr.map((number, index) => {
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
    expect(app.stringToArrConverter(userInput)).toEqual([1, 2, 3]);
  });
});

describe("판정 테스트", () => {
  test("판정", () => {
    const discriminateExamples = [
      [[1, 2, 3], [1, 2, 3], "3스트라이크"],
      [[1, 2, 3], [1, 2, 4], "2스트라이크"],
      [[1, 2, 3], [1, 4, 5], "1스트라이크"],
      [[1, 2, 3], [3, 1, 2], "3볼"],
      [[1, 2, 3], [4, 1, 2], "2볼"],
      [[1, 2, 3], [4, 5, 2], "1볼"],
      [[1, 2, 3], [4, 5, 6], "낫싱"],
      [[1, 2, 3], [3, 2, 1], "2볼 1스트라이크"],
      [[1, 2, 3], [5, 1, 3], "1볼 1스트라이크"],
    ];

    discriminateExamples.map((example) => {
      expect(app.discriminator(example[0], example[1])).toEqual(example[2]);
    });
  });
});
