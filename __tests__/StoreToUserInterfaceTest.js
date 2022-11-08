const MissionUtils = require('@woowacourse/mission-utils');
const GameStatusStore = require('../src/stores/GameStatusStore');
const GameStatusUI = require('../src/userInterfaces/GameStatusUI');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('GameStatusStore와 GameStatusUI의 상태변경 테스트', () => {
  test('store의 상태가 바뀌면 UI 가 업데이트 되는지 테스트', () => {
    const gameStatusStore = new GameStatusStore();
    const gameStatusUI = new GameStatusUI();
    const logSpy = getLogSpy();

    gameStatusStore.injection(gameStatusUI);
    gameStatusStore.setGameStatus('START');

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });
});
