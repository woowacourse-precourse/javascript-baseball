const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
}

describe("기능1과 기능2 테스트", () => {
 test("상대방 결과에 중복값 있는지 테스트", () => {
    expect(() => {
      const app = new App();
      const computerNumber = app.isComputerNumbers();
      
      expect(new Set(computerNumber).size).toEqual(3);
    })
  })

  test("사용자가 0을 입력했을때 RangeError 나는지 테스트", () => {
    const answers = ["103"];

    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(RangeError);
  })

  test("사용자가 글자수를 지키지 않을시 RangeError 나는지 테스트", () => {
    const answers = ["1234"];

    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(RangeError);
  })

  test("사용자가 중복값을 입력시 RangeError 나는지 테스트", () => {
    const answers = ["1234"];

    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(RangeError);
  })

  test("사용자가 숫자외의 값을 입력시 RangeError 나는지 테스트", () => {
    const answers = ["1a@"];

    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(RangeError);
  })
})