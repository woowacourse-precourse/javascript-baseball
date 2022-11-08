const MissionUtils = require("@woowacourse/mission-utils");
const {
  selectNumQuery,
  selectNextQuery,
  restartQuery,
} = require("../src/Query");
const { checkThreeDifferentNumbers } = require("../src/Error");
const { makeHint, makeBallStrikeCount } = require("../src/Make");

jest.mock("../src/make", () => ({
  makeBallStrikeCount: jest.fn(() => ({ strike: 1, ball: 1 })),
  makeHint: jest.fn(),
  makeRandomNumber: jest.fn(),
}));

jest.mock("../src/Error");

const selectNextQueryMock = jest.fn();

MissionUtils.Console.readLine = jest.fn((_, callback) => callback("123"));

describe("selectNextQuery 함수 테스트", () => {
  const selectNumQueryMock = jest.fn();
  const restartQueryMock = jest.fn();
  MissionUtils.Console.print = jest.fn();

  test("3 스트라이크 인경우", () => {
    selectNextQuery(3, [1, 2, 3], selectNumQueryMock, restartQueryMock);
    expect(restartQueryMock).toBeCalledTimes(1);
    expect(MissionUtils.Console.print).toBeCalledWith(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  });

  test("이외의 경우", () => {
    selectNextQuery(2, [1, 2, 3], selectNumQueryMock, restartQueryMock);
    expect(selectNumQueryMock).toBeCalledTimes(1);
  });
});

describe("restartQuery 함수 테스트", () => {
  const selectNumQueryfn = jest.fn();
  test("1을 입력한 경우", () => {
    MissionUtils.Console.readLine = jest.fn((_, callback) => callback("1"));
    restartQuery(selectNumQueryfn);
    expect(selectNumQueryfn).toBeCalledTimes(1);
  });

  test("2를 입력한 경우", () => {
    MissionUtils.Console.readLine = jest.fn((_, callback) => callback("2"));
    MissionUtils.Console.close = jest.fn();
    restartQuery(selectNumQueryfn);
    expect(MissionUtils.Console.close).toBeCalledTimes(1);
  });
});

describe("selectNumQuery 함수 테스트", () => {
  test("실행 과정", () => {
    selectNumQuery([1, 2, 3], selectNextQueryMock);
    expect(makeHint).toBeCalledTimes(1);
    expect(makeBallStrikeCount).toBeCalledTimes(1);
    expect(checkThreeDifferentNumbers).toBeCalledTimes(1);
    expect(selectNextQueryMock).toBeCalledTimes(1);
  });
});
