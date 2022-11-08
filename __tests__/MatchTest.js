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

describe('숫자 야구 게임을 테스트 코드로 플레이한다.', () => {
  const logSpy = getLogSpy();

  test('한 게임에 10번 입력하여 플레이한다.', () => {
    const randoms = [1, 9, 2];
    const answers = [
      '546',
      '789',
      '123',
      '723',
      '823',
      '923',
      '329',
      '392',
      '592',
      '192',
    ];
    const messages = [
      '낫싱',
      '1볼',
      '1볼 1스트라이크',
      '1볼',
      '1볼',
      '2볼',
      '2스트라이크',
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
});
