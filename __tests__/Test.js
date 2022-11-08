const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

describe("야구게임 테스트", () => {
  const app = new App();

  test("case1", () => {
    expect(app.play()).toEqual("낫싱");
  });

  MissionUtils.Console.close();
});