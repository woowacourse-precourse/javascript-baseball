const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

afterAll(() => {
  MissionUtils.Console.close();
});

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

describe("예외 테스트", () => {
  test("예외 테스트 : 중복 입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["144"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 : 숫자 외 입력1", () => {
    const randoms = [1, 3, 5];
    const answers = ["14ㅎ"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 : 숫자 외 입력2", () => {
    const randoms = [1, 3, 5];
    const answers = ["14 "];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 : 재시작 입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 : 재시작 입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "3435"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
