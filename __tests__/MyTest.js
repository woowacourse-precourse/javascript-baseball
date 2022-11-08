const App = require('../src/App');
const { PHRASE, BASEBALL, GAME } = require('../src/constants');
const { Console } = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('기능 목록 테스트', () => {
  test('게임 시작 문구를 출력하는 기능', () => {
    const app = new App();
    const logSpy = getLogSpy();

    app.printStartPhrase();

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(PHRASE.START));
  });
});
