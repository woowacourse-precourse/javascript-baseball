const { ERROR_MESSAGE } = require("../src/Constants");

describe("게임 플러이어 입력 예외 처리 Test", () => {
  const validator = require("../src/Validator");

  test("숫자가 아닌 문자가 입력으로 들어오는 경우 ", () => {
    expect(() => validator.isValidPlayerInput("이삼5")).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER
    );
    expect(() => validator.isValidPlayerInput("/+*'~")).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER
    );
  });

  test("3자리의 수가 아닌 입력이 들어오는 경우", () => {
    expect(() => validator.isValidPlayerInput("01")).toThrow(
      ERROR_MESSAGE.LENGTH
    );
    expect(() => validator.isValidPlayerInput("5984")).toThrow(
      ERROR_MESSAGE.LENGTH
    );
  });

  test("1부터 9까지의 범위를 벗어난 입력이 들어온 경우", () => {
    expect(() => validator.isValidPlayerInput("809")).toThrow(
      ERROR_MESSAGE.RANGE
    );
    expect(() => validator.isValidPlayerInput("800")).toThrow(
      ERROR_MESSAGE.RANGE
    );
  });

  test("중복된 숫자를 포함한 입력이 들어오는 경우", () => {
    expect(() => validator.isValidPlayerInput("772")).toThrow(
      ERROR_MESSAGE.DUPLICATED
    );
    expect(() => validator.isValidPlayerInput("131")).toThrow(
      ERROR_MESSAGE.DUPLICATED
    );
  });

  test("1(재시작) 또는 2(종료) 이외의 입력이 들어오는 경우", () => {
    expect(() => validator.isValidReplayNum("0")).toThrow(
      ERROR_MESSAGE.REAPLY_NUM
    );
    expect(() => validator.isValidReplayNum("종료")).toThrow(
      ERROR_MESSAGE.REAPLY_NUM
    );
    expect(() => validator.isValidReplayNum("876")).toThrow(
      ERROR_MESSAGE.REAPLY_NUM
    );
  });
});
