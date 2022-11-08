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

  test('사용자 입력값 예외 처리 기능', () => {
    const exceptionInputList = [111, 12, '일이삼'];

    exceptionInputList.forEach((exceptionInput) => {
      expect(() => {
        const app = new App();
        app.throwException(exceptionInput);
      }).toThrow();
    });
  });

  test('결과를 출력하는 기능', () => {
    const logSpy = getLogSpy();
    const resultList = [
      { ball: 1, strike: 1 },
      { ball: 1, strike: 0 },
      { ball: 0, strike: 1 },
      { ball: 0, strike: 3 },
      { ball: 0, strike: 0 },
    ];
    const messages = [
      '1볼 1스트라이크',
      '1볼',
      '1스트라이크',
      '3스트라이크',
      '낫싱',
    ];

    resultList.forEach((result, idx) => {
      const app = new App();
      app.printResult(result);

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(messages[idx])
      );
    });
  });
});
