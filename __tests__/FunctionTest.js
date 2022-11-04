const { App, refNumbersGetter, stringToArrConverter } = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
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
    const refNumbersArr = refNumbersGetter();
    expect(refNumbersArr.length).toEqual(3);
  });

  test("목표값 내 중복 확인", () => {
    const refNumbersArr = refNumbersGetter();

    let duplicateChecker;
    refNumbersArr.map((number, index) => {
      duplicateChecker =
        refNumbersArr.indexOf(number) === index ? "clear" : "duplicate";
    });
    expect(duplicateChecker).toEqual("clear");
  });

  test("목표값 숫자 범위 1~9 확인", () => {
    const refNumbersArr = refNumbersGetter();

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

describe("입력값 테스트", () => {
  test("입력값 배열화", () => {
    const userInput = "123";
    expect(stringToArrConverter(userInput)).toEqual([1, 2, 3]);
  });
});
