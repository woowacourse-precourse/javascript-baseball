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

  test('1에서 9까지 서로 다른 임의의 수 3개를 만드는 기능', () => {
    const app = new App();
    const numberList = app.answerNumberList;

    app.createNumberList();

    // 세 자리 수
    expect(numberList.length).toEqual(GAME.NUMBER_COUNT);

    numberList.forEach((number, idx) => {
      // 숫자
      expect(typeof number).toEqual('number');

      // 서로 다른 수
      const newList = [...numberList];
      newList.splice(idx, 1);
      expect(newList).toEqual(expect.not.arrayContaining([number]));
    });
  });
});
