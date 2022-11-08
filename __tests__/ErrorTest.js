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

describe('입력값 예외 테스트', () => {
  test('중복 숫자 여부 테스트', () => {
    const randoms = [2, 4, 7];
    const answers = ['132', '439', '291', '442'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('숫자 이외에 값이 들어올 경우 테스트', () => {
    const randoms = [3, 1, 8];
    const answers = ['286', '213', '468', '951', '231.'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('숫자를 3개 입력하지 않았을 경우 테스트', () => {
    const randoms = [7, 2, 4];
    const answers = ['632', '468', '921', '2', '151'];
    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('0을 입력했을 경우 테스트', () => {
    const randoms = [8, 9, 2];
    const answers = ['653', '745', '984', '065'];
    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
})