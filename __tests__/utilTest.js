const countBallAndStrike = require("../src/utils/countBallAndStrike");
const printGameMessage = require("../src/utils/printGameMessage");
const verifyInputNumber = require("../src/utils/verifyInputNumber");

describe("유틸함수 동작 테스트", () => {
  test("볼 스트라이크 개수 확인 동작 테스트", () => {
    expect(countBallAndStrike("123", "321")).toEqual({ strike: 1, ball: 2 });
    expect(countBallAndStrike("123", "456")).toEqual({ strike: 0, ball: 0 });
    expect(countBallAndStrike("789", "786")).toEqual({ strike: 2, ball: 0 });
    expect(countBallAndStrike("467", "746")).toEqual({ strike: 0, ball: 3 });
    expect(countBallAndStrike("641", "361")).toEqual({ strike: 1, ball: 1 });
    expect(countBallAndStrike("361", "361")).toEqual({ strike: 3, ball: 0 });
  });

  test("입력값 검증 함수 테스트", () => {
    expect(verifyInputNumber("123")).toBe(true);
    expect(verifyInputNumber("312")).toBe(true);
    expect(verifyInputNumber("1523")).toBe(false);
    expect(verifyInputNumber("a13")).toBe(false);
    expect(verifyInputNumber("952")).toBe(true);
  });

  test("볼 스트라이크 출력 함수 테스트", () => {
    expect(printGameMessage(1, 2)).toBe("2볼 1스트라이크");
    expect(printGameMessage(1, 0)).toBe("1스트라이크");
    expect(printGameMessage(0, 2)).toBe("2볼");
    expect(printGameMessage(3, 0)).toBe("3스트라이크");
    expect(printGameMessage(0, 0)).toBe("낫싱");
  });
});
