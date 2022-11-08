const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

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
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('3볼.', () => {
    const app = new App();
    app.correctAnswer = [5, 2, 4];
    let result = app.solve('452');

    expect(result).toStrictEqual([3, 0]);
  });

  test('1볼 1스트라이크.', () => {
    const app = new App();
    app.correctAnswer = [6, 7, 3];
    let result = app.solve('632');

    expect(result).toStrictEqual([1, 1]);
  });

  test('예외사항을 체크하는 함수 테스트(있는경우 true)).', () => {
    const app = new App();
    let result = app.handleException('62');

    expect(result).toBe(true);
  });
  test('예외사항을 체크하는 함수 테스트(없는경우 false)).', () => {
    const app = new App();
    let result = app.handleException('623');

    expect(result).toBe(false);
  });
});
