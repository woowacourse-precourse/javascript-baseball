const MissionUtils = require("@woowacourse/mission-utils");
const App = require("./App");

describe("게임함수확인용", () => {
  const app = new App();

  test("makeComNum_1", () => {
    expect(app.makeComNum().length).toEqual(3);
  });

  // 아래 close 를 하지않을 시 test가 끝나지 않음
  MissionUtils.Console.close();
});
