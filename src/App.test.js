const MissionUtils = require('@woowacourse/mission-utils');
const App = require('./App');

describe('게임 시작 문구 출력', () => {
  test('게임 시작 문구 출력', () => {
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    const app = new App();
    app.printGameStartMessage();

    expect(spy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });
});
