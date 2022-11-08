const App = require("../src/App");
const { Console } = require("@woowacourse/mission-utils");

describe("숫자 야구 게임 시작 메세지 출력 기능 테스트", () => {
  afterEach(() => {
    Console.close();
  });
  test("App class가 초기화 되면 게임 시작 메세지가 출력되어야 함", () => {
    const logSpy = jest.spyOn(Console, "print");
    const output = "시작합니다.";
    new App();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
