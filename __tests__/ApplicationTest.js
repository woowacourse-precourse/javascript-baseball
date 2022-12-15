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

const getOutput = logSpy => {
  return [...logSpy.mock.calls].join('');
};

const runException = inputs => {
  mockRandoms([1, 2, 3]);
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach(log => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9, 1, 2, 3];
    const answers = ['246', '135', '1', '597', '589', '1', '123', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
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

  test.each([
    ['a'],
    ['1'],
    ['2'],
    ['21'],
    ['22'],
    ['23'],
    ['1234'],
    ['ㅁ'],
    [';'],
    [''],
  ])('입력 예외 테스트', input => {
    runException([input]);
  });

  test.each([
    ['123', '0'],
    ['123', 'u'],
    ['123', 'ㅕ'],
    ['123', 'd'],
    ['123', 'ㅇ'],
  ])('3스트라이크 이후 재시작 여부 예외 테스트', (strike, select) => {
    runException([strike, select]);
  });

  test.each([
    ['3', 'D', 'r'],
    ['3', 'D', 'ㄱ'],
    ['3', 'D', 'q'],
    ['3', 'D', 'ㅂ'],
  ])('재시작 입력 예외 테스트', (size, direction, select) => {
    mockRandoms(['1', '0', '1']);
    runException([size, direction, select]);
  });
});
