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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("유저 입력 정보 유효성 테스트", () => {
  test("유저가 1부터 9사이의 숫자를 입력하지 않았을 때 입력했을 때 걸러내는 테스트", () => {
    const answers = [1, 3, 5];
    const errorInput = [["-12"], ["8 8"], ["50."]];

    errorInput.map((errorInput) =>
      expect(() => {
        mockRandoms(answers);
        mockQuestions(errorInput);
        const app = new App();
        app.play();
      }).toThrow()
    );
  });

  test("유저가 서로 다른 세자리수가 아닌 값을 입력했을 때 걸러내는 테스트", () => {
    const answers = [1, 3, 5];
    const errorInput = [["122"], ["888"], ["50"]];

    errorInput.map((errorInput) =>
      expect(() => {
        mockRandoms(answers);
        mockQuestions(errorInput);
        const app = new App();
        app.play();
      }).toThrow()
    );
  });
});
