const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('게임', () => {
    const randoms = [7, 8, 9, 3, 2, 4];
    const answers = [
      '123',
      '456',
      '987',
      '789',
      '1',
      '123',
      '521',
      '524',
      '324',
      '3',
      '2',
    ];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '낫싱',
      '2볼 1스트라이크',
      '3스트라이크',
      '1볼 1스트라이크',
      '1볼',
      '2스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['111'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
