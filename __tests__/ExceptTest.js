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

describe("사용자 3자리 수 입력 테스트", () => {
  test("3자리의 수를 입력하지 않은 경우", () => {
    const randoms = [2, 4, 6];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("3자리의 숫자를 입력하지 않아 에러가 발생하였습니다.");
  });

  test("숫자를 입력하지 않은 경우", () => {
    const randoms = [2, 4, 6];
    const answers = ["ab3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("숫자를 입력하지 않아 에러가 발생하였습니다.");
  });

  test("중복되는 숫자를 입력한 경우", () => {
    const randoms = [2, 4, 6];
    const answers = ["244"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("중복되는 숫자가 있어 에러가 발생하였습니다.");
  });

  test("0이 포함되어 있는 경우", () => {
    const randoms = [2, 4, 6];
    const answers = ["105"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("1부터 9사이의 숫자가 아닌 0이 포함되어 있어 에러가 발생하였습니다.");
  });
});