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

test("코너 케이스 테스트, 길이 3초과", () => {
    const randoms = [1, 2, 6];
    const answers = ["3468"]

    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("코너 케이스 테스트, 길이 3미만", () => {
    const randoms = [1, 2, 6];
    const answers = ["3"]

    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("코너 케이스 테스트, 0 포함", () => {
    const randoms = [1, 2, 6];
    const answers = ["190"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("코너 케이스 테스트, 중복된 숫자", () => {
    const randoms = [1, 2, 6];
    const answers = ["666"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("코너 케이스 테스트, 숫자 이외의 문자", () => {
    const randoms = [1, 2, 6];
    const answers = ["ha%"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("코너 케이스 테스트, 숫자와 문자 혼용", () => {
    const randoms = [1, 2, 6];
    const answers = ["1y9"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });