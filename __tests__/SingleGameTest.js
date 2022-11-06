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

describe('숫자 야구 게임 단판', () => {
  test('단판전 1', () => {
    const randoms = [1, 3, 5];
    const userInputs = ['123', '456', '789', '126', '134', '135'];
    const logSpy = getLogSpy();
    const messages = [
      '1볼 1스트라이크',
      '1볼',
      '낫싱',
      '1스트라이크',
      '2스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    const app = new App();
    app.playSingleGame();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('단판전 2', () => {
    const randoms = [7, 4, 8];
    const userInputs = ['123', '456', '789', '784', '874', '479', '748'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1볼',
      '1볼 1스트라이크',
      '2볼 1스트라이크',
      '3볼',
      '2볼',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    const app = new App();
    app.playSingleGame();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
