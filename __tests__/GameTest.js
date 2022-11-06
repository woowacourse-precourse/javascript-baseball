const App = require('../src/App');
const COMPUTER = require('../src/constants/COMPUTER');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Game test', () => {
  const app = new App();

  test('게임 시작 테스트', () => {
    const logSpy = getLogSpy();
    const INIT_MESSAGE = '숫자 야구 게임을 시작합니다.';

    app.play();

    expect(app.answer).toHaveLength(COMPUTER.COUNT);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INIT_MESSAGE));
  });
});
