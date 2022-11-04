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

  test("중복된 숫자가 있으면 예외 발생", () => {
    const answers = ["112"];

    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("입력된 수가 3자리가 아닌 경우 예외 발생", () => {
    const answers = ["1", "12", "1234"];

    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("입력된 값이 1~9까지의 숫자가 아닌 경우 예외 발생", () => {
    const answers = ["가나다", "abc", "$#@", "012"];

    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });
});
