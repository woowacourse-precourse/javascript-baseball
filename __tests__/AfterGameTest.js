/* eslint-disable max-lines-per-function */
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

describe('게임 종료 이후 단계 테스트', () => {
  test('게임 종료 후 재시작 기능 테스트', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['135', '1', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      '숫자 야구 게임을 시작합니다.',
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
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

  test('재시작 여부 입력값 예외 테스트', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['135', 3];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('잘못된 입력입니다. 1 또는 2만 입력 가능합니다.');
  });
});
