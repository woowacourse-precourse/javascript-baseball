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

describe('정답 생성', () => {
  test('정답 생성', () => {
    const app = new App();
    app.generateAnswer();

    expect(app.answer.length).toBe(3);
    expect(new Set(app.answer).size).toBe(3);
    expect([...app.answer].every((number) => number >= 1 && number <= 9)).toBe(true);
  });
});
