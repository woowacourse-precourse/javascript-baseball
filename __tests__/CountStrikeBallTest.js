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

describe('사용자 입력값 평가 테스트2', () => {
  test('사용자 입력값과 정답 비교 테스트', () => {
    const randoms = [1, 2, 3, 4, 5, 6];
    const answers = ['789', '451', '178', '139', '123', '1', '456', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1볼',
      '1스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
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
