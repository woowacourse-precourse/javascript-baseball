const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

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

describe('handleCommand', () => {
  test('1이 들어오면 initGame()을 실행한다.', () => {});
  test('2가 들어오면 quit()을 실행한다.', () => {});
  test('1 또는 2가 아닌 값이 들어오면 에러가 발생한다.', () => {
    expect(() => {
      const app = new App();
      app.handleCommand(0);
    }).toThrow();
    expect(() => {
      const app = new App();
      app.handleCommand(3);
    }).toThrow();
    expect(() => {
      const app = new App();
      app.handleCommand(55);
    }).toThrow();
  });
});

describe('숫자 야구 게임', () => {
  test('볼과 스트라이크 체크', () => {
    const randoms = [2, 4, 6];
    const answers = [
      '136',
      '247',
      '127',
      '437',
      '427',
      '462',
      '234',
      '256',
      '246',
      '2',
    ];
    const logSpy = getLogSpy();
    const messages = [
      '1스트라이크',
      '2스트라이크',
      '1볼',
      '1볼',
      '2볼',
      '3볼',
      '1볼 1스트라이크',
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

  test('3스트라이크 후 재시작', () => {
    const randoms = [1, 3, 5, 2, 4, 6, 3, 5, 7];
    const answers = ['135', '1', '246', '1', '357', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '3스트라이크',
      '게임 종료',
      '3스트라이크',
      '게임 종료',
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
});
