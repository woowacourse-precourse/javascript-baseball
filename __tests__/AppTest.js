const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const { MESSAGE } = require("../src/static/constants");

describe("App", () => {
  test("앱 실행 메시지 출력", () => {
    const app = new App();
    const consoleSpy = jest.spyOn(MissionUtils.Console, "print");
    
    app.printStartMessage();

    expect(consoleSpy).toHaveBeenCalledWith(MESSAGE.startApp);
  });
});
