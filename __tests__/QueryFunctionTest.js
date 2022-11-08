const MissionUtils = require("@woowacourse/mission-utils");
const { selectNextQuery } = require("../src/Query");

jest.mock("../src/make", () => ({
  makeBallStrikeCount: jest.fn(() => ({ strike: 1, ball: 1 })),
  makeHint: jest.fn(),
  makeRandomNumber: jest.fn(),
}));

jest.mock("../src/Error");

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
