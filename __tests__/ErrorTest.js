const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('숫자 입력 예외 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('0이 포함되면 예외가 발생해야 한다.', () => {
    const randoms = [1, 3, 5];
    const invalidInput = ['106'];

    mockRandoms(randoms);
    mockQuestions(invalidInput);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('중복된 숫자가 있다면 예외가 발생해야 한다.', () => {
    const randoms = [1, 3, 5];
    const invalidInput = ['116'];

    mockRandoms(randoms);
    mockQuestions(invalidInput);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('숫자 이외의 문자가 있다면 예외가 발생해야 한다.', () => {
    const randoms = [1, 3, 5];
    const invalidInput = ['1a6'];

    mockRandoms(randoms);
    mockQuestions(invalidInput);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('입력 길이가 3이 아니라면 예외가 발생해야 한다.', () => {
    const randoms = [1, 3, 5];
    const invalidInput = ['1326'];

    mockRandoms(randoms);
    mockQuestions(invalidInput);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});

describe('재시작 여부 입력 예외 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('1, 2 이외의 값 입력 시 예외가 발생해야 한다.', () => {
    const invalidInput = ['a'];

    mockQuestions(invalidInput);

    expect(() => {
      const app = new App();
      app.readRestartInput();
    }).toThrow();
  });
});
