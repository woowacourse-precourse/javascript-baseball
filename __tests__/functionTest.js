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

describe('함수 기능 테스트', () => {
  test('숫자가 세자리가 맞는지 확인', () => {
    const app = new App();
    const result = app.computerInput().length;

    expect(result).toEqual(3);
  });
  test("입력되지 않았을 때", () => {
    const answers = [""];

    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("숫자가 아닐 때", () => {
    const answers = ["안녕", "테스트", "코드"];

    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("중복된 숫자 있을 때", () => {
    const answers = ["111"];

    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("입력된 수가 3자리가 아닐 때", () => {
    const answers = ["1", "12", "1234"];

    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("1~9사이의 숫자가 아닐때", () => {
    const answers = ["000", "012"];

    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });
});
