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

describe("end game test", () => {
  test("예외 테스트", () => {
    const answers = ["3"];

    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.restartGame();
    }).toThrow();
  });
});
