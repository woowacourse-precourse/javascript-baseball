const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("숫자 야구 게임 테스트", () => {
  const app = new App();
  test("예외처리 테스트", () => {
    const EXCEPT_STR = ["123"];

    EXCEPT_STR.map((str) => {
      expect(() => {
        app.checkException(str);
      }).toThrow();
    });
  });

  test("서로 다른 랜덤숫자 받기 테스트", () => {
    for (let i = 0; i < 100; i++) {
      expect(app.checkSameNumber("234")).toEqual(false);
    }
  });

  test("3스트라이크 테스트", () => {
    expect(app.checkResult("123", "123")).toEqual(true);
  });
});
