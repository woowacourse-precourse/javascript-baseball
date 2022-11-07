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

describe('출력값 테스트', () => {
  test('게임 시작 메시지 출력', () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('숫자 야구 게임을 시작합니다'),
    );
  });

  test('입력 값을 볼, 스트라이크로 판단하여 결과를 출력', () => {
    const logSpy = getLogSpy();
    mockQuestions(['135']);
    mockRandoms([1, 3, 5]);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith('3스트라이크');
  });

  test('3개의 숫자를 모두 맞힐 경우 게임을 종료', () => {
    const logSpy = getLogSpy();
    mockQuestions(['123']);
    mockRandoms([1, 2, 3]);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('게임 종료'));
  });

  test('게임이 종료되었을 때 게임을 다시 시작하거나 완전히 종료', () => {
    mockQuestions(['123', '1', '456', '2']);
    mockRandoms([1, 2, 3, 4, 5, 6]);

    const app = new App();
    const handleMenuInputSpy = jest.spyOn(app, 'handleMenuInput');
    app.play();

    expect(handleMenuInputSpy).toHaveBeenCalledWith('1');
    expect(handleMenuInputSpy).toHaveBeenCalledWith('2');
  });
});
