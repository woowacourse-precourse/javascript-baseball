/* eslint-disable max-lines-per-function */
const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const getSpy = (object, methodName) => {
  const spy = jest.spyOn(object, methodName);
  spy.mockClear();
  return spy;
};

describe('숫자 야구 게임', () => {
  test('게임 시작 문구 출력', () => {
    const logSpy = getSpy(MissionUtils.Console, 'print');
    const message = '숫자 야구 게임을 시작합니다.';

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(message);
  });
});
