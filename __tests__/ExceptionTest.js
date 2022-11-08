const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("숫자 야구 - 예외 테스트", () => {
  test("예외 - 입력값이 1~9로 이루어지지 않은 경우(알파벳)", () => {
    const answers = ["abc"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.readNum();
    }).toThrow();
  });

  test("예외 - 입력값이 1~9로 이루어지지 않은 경우(실수형)", () => {
    const answers = ["0.12"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.readNum();
    }).toThrow();
  });

  test("예외 - 입력값이 1~9로 이루어지지 않은 경우(숫자0)", () => {
    const answers = [0, 1, 2];

    expect(() => {
      const app = new App();
      app.isValidNum(answers);
    }).toThrow();
  });

  test("예외 - 입력된 수가 중복되는 경우", () => {
    const answers = [1, 1, 2];

    expect(() => {
      const app = new App();
      app.isValidNum(answers);
    }).toThrow();
  });

  test("예외 - 게임 종료 후 입력값으로 1이나 2가 아닌 다른 값이 들어온 경우", () => {
    const answers = ["3"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.replay();
    }).toThrow();
  });
});
