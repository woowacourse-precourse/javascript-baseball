const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

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
  test('1게임 플레이', () => {
    const randoms = [9, 8, 4];
    const answers = ['374', '385', '538', '312', '485', '548', '684', '984', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '1스트라이크',
      '1스트라이크',
      '1볼',
      '낫싱',
      '1볼 1스트라이크',
      '2볼',
      '2스트라이크',
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

  test('재시작 테스트', () => {
    const randoms = [...Array(11).fill([1, 2, 3])].flat();
    const answers = [...Array(10).fill(['123', '1']), '123', '2'].flat();
    const logSpy = getLogSpy();
    const messages = [...Array(10).fill('3스트라이크'), '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('스트라이크 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['189', '839', '895', '139', '195', '935', '135', '2'];
    const logSpy = getLogSpy();
    const messages = [
      ...Array(3).fill('1스트라이크'),
      ...Array(3).fill('2스트라이크'),
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

  test('볼 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = [
      '891',
      '819',
      '389',
      '893',
      '589',
      '859',
      '319',
      '913',
      '391',
      '519',
      '591',
      '951',
      '359',
      '593',
      '953',
      '135',
      '2',
    ];
    const logSpy = getLogSpy();
    const messages = [...Array(6).fill('1볼'), ...Array(9).fill('2볼'), '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('낫싱 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = [
      '246',
      '247',
      '248',
      '249',
      '467',
      '468',
      '469',
      '678',
      '679',
      '789',
      '135',
      '2',
    ];
    const logSpy = getLogSpy();
    const messages = [...Array(10).fill('낫싱'), '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
