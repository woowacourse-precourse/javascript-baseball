const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const { getLogSpy } = require('./ApplicationTest');

describe('게임 초기 시작 문구 테스트', () => {
  test('게임 초기 시작 문구', () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('숫자 야구 게임을 시작합니다.')
    );
  });
});
