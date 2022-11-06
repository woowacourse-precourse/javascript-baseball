const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("숫자 야구 게임", () => {
  test("게임 종료 후 재시작", () => {
    const input = "123";
    const result = input.split("");

    const app = new App();
    app.play();

    expect(result).toContain("2", "1", "3");
    expect(result).toContainEqual("1", "2", "3");
  });
});
