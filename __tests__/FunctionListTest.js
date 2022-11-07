const {
  isThreeDigitNumber,
  isOneToNine,
  isDifferentDigitNumber,
  getGameResult,
  isCorrect,
  printResultMessage,
} = require("../src/baseballGame");
const MissionUtils = require("@woowacourse/mission-utils");

const exit = () => {
  return MissionUtils.Console.close();
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("사용자 숫자 유효성 검사", () => {
  test("입력 값이 3자리 숫자인 지 확인", () => {
    expect(isThreeDigitNumber("a12")).toEqual(false);
    expect(isThreeDigitNumber("2435")).toEqual(false);
    expect(isThreeDigitNumber("123")).toEqual(true);
  });

  test("입력 값이 1-9까지 숫자인 지 확인", () => {
    expect(isOneToNine("120")).toEqual(false);
    expect(isOneToNine("123")).toEqual(true);
  });

  test("입력 값이 각 자리 숫자가 서로 다른 숫자인 지 확인", () => {
    expect(isDifferentDigitNumber("111")).toEqual(false);
    expect(isDifferentDigitNumber("112")).toEqual(false);
    expect(isDifferentDigitNumber("123")).toEqual(true);
  });
  exit();
});

describe("입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시", () => {
  test("3개의 숫자를 모두 맞힐 경우", () => {
    const computerNumber = [1, 2, 3];
    const playerNumber = [1, 2, 3];

    expect(getGameResult(computerNumber, playerNumber)).toEqual([3, 0]);
  });

  test("하나도 없는 경우", () => {
    const computerNumber = [1, 2, 3];
    const playerNumber = [4, 5, 6];

    expect(getGameResult(computerNumber, playerNumber)).toEqual([0, 0]);
  });

  test("1스트라이크 1볼", () => {
    const computerNumber = [1, 2, 3];
    const playerNumber = [1, 3, 7];

    expect(getGameResult(computerNumber, playerNumber)).toEqual([1, 1]);
  });
  exit();
});

describe("게임 성공 여부 판단", () => {
  test("게임 성공", () => {
    expect(isCorrect([3, 0])).toEqual(true);
  });

  test("게임 실패", () => {
    expect(isCorrect([1, 2])).toEqual(false);
  });

  exit();
});

describe("입력한 수에 대한 결과 출력", () => {
  test("3스트라이크", () => {
    const logSpy = getLogSpy();
    const strike = 3;
    const ball = 0;
    const result = [strike, ball];

    printResultMessage(result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3스트라이크"));
  });

  test("2볼 1스트라이크", () => {
    const logSpy = getLogSpy();
    const strike = 1;
    const ball = 2;
    const result = [strike, ball];

    printResultMessage(result);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("2볼 1스트라이크")
    );
  });

  test("2스트라이크", () => {
    const logSpy = getLogSpy();
    const strike = 2;
    const ball = 0;
    const result = [strike, ball];

    printResultMessage(result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("2스트라이크"));
  });

  test("1볼", () => {
    const logSpy = getLogSpy();
    const strike = 0;
    const ball = 1;
    const result = [strike, ball];

    printResultMessage(result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("1볼"));
  });

  test("낫싱", () => {
    const logSpy = getLogSpy();
    const strike = 0;
    const ball = 0;
    const result = [strike, ball];

    printResultMessage(result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("낫싱"));
  });

  exit();
});
