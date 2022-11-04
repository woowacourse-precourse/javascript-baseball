const App = require("../App.js");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("입력 유효성 검사", () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  test("아무것도 입력되지 않으면 예외 발생", () => {
    const answers = [""];

    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });
});
