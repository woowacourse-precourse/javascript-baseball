const App = require('../src/App');
const COMPUTER = require('../src/constants/COMPUTER');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');

  return logSpy;
};

const mockReadline = (input) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((_, callback) => {
    callback(input);
  });
};

describe('Game test', () => {
  test('게임 시작 테스트', () => {
    const logSpy = getLogSpy();
    const INIT_MESSAGE = '숫자 야구 게임을 시작합니다.';

    const app = new App();
    app.play();

    expect(app.answers).toHaveLength(COMPUTER.ANSWER_LENGTH);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INIT_MESSAGE));
  });

  test('입력값 처리 테스트', () => {
    const input = '123';
    const expectValue = [1, 2, 3];

    mockReadline(input);

    const app = new App();
    app.play();

    expect(app.userInputs).toEqual(expectValue);
  });
});
