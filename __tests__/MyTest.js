const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("숫자 야구 게임 테스트", () => {
  const app = new App();
  test("예외처리 테스트", () => {
    const EXCEPT_STR = [undefined, "", "abc", "1234", "112"];

    EXCEPT_STR.map((str) => {
      expect(() => {
        app.checkException(str);
      }).toThrow();
    });
  });
});
