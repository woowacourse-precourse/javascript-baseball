describe("게임 플러이어 입력 예외 처리 Test", () => {
  const validator = require("../src/Validator");

  test("숫자가 아닌 문자가 입력으로 들어오는 경우 ", () => {
    expect(() => validator.isValidPlayerInput("이삼5")).toThrow(
      "숫자로만 입력해주세요."
    );
    expect(() => validator.isValidPlayerInput("/+*'~")).toThrow(
      "숫자로만 입력해주세요."
    );
  });

  test("3자리의 수가 아닌 입력이 들어오는 경우", () => {
    expect(() => validator.isValidPlayerInput("01")).toThrow(
      "3자리의 수를 입력해주세요."
    );
    expect(() => validator.isValidPlayerInput("5984")).toThrow(
      "3자리의 수를 입력해주세요."
    );
  });

  test("1부터 9까지의 범위를 벗어난 입력이 들어온 경우", () => {
    expect(() => validator.isValidPlayerInput("809")).toThrow(
      "1부터 9까지의 수만 입력해주세요."
    );
    expect(() => validator.isValidPlayerInput("800")).toThrow(
      "1부터 9까지의 수만 입력해주세요."
    );
  });

  test("중복된 숫자를 포함한 입력이 들어오는 경우", () => {
    expect(() => validator.isValidPlayerInput("772")).toThrow(
      "서로 다른 3자리를 입력해주세요."
    );
    expect(() => validator.isValidPlayerInput("131")).toThrow(
      "서로 다른 3자리를 입력해주세요."
    );
  });

  test("1(재시작) 또는 2(종료) 이외의 입력이 들어오는 경우", () => {
    expect(() => validator.isValidReplayNum("0")).toThrow(
      "1 또는 2를 입력하세요."
    );
    expect(() => validator.isValidReplayNum("종료")).toThrow(
      "1 또는 2를 입력하세요."
    );
    expect(() => validator.isValidReplayNum("876")).toThrow(
      "1 또는 2를 입력하세요."
    );
  });
});
