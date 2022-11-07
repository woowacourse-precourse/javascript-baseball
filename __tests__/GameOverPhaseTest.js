const App = require("../src/App");
const { Console } = require("@woowacourse/mission-utils");

describe("게임 종료 페이즈 입력 값 에러 테스트", () => {
  afterEach(() => {
    Console.close();
  });

  test("유효하지 않은 trigger가 입력되면 에러가 발생해야 함.", () => {
    const answer = "3";
    Console.readLine = jest.fn((question, callback) => {
      callback(answer);
    });

    expect(() => {
      const app = new App();
      app.gameOverPhase();
    }).toThrow();
  });
});
