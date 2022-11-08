const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { endApp } = require('../src/Function');
const Function = require('../src/Function');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('App class 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });
  test('play 동작시 computer selectedNumber 랜덤 설정여부 확인', () => {
    app.play();
    expect(app.computer.selectedNumber.length).toBe(3);
    endApp();
  });

  test('resetCountBoard 테스트', () => {
    app.countBoard.strike = 1;
    app.countBoard.ball = 2;

    app.resetCountBoard();
    expect(app.countBoard).toStrictEqual({ strike: 0, ball: 0 });
  });

  test('setCountBoard', () => {
    const examples = [
      [1, 0, [1, 2, 3]],
      [2, 1, [2, 1, 3]],
      [3, 1, [1, 2, 4]],
    ];

    const answers = [
      { strike: 1, ball: 0 },
      { strike: 0, ball: 1 },
      { strike: 0, ball: 0 },
    ];

    examples.forEach((example, index) => {
      app.resetCountBoard();
      app.setCountBoard(example[0], example[1], example[2]);
      expect(app.countBoard).toStrictEqual(answers[index]);
    });
  });

  test('compareUserAndComputer 테스트', () => {
    app.setCountBoard = jest.fn(() => {
      this.countBoard = { strike: '1', ball: '1' };
    });
    app.computer.selectedNumber = '123';
    const mockMakeStringToArray = jest.fn().mockReturnValue(['1', '2', '3']);
    Function.makeStringToArray = mockMakeStringToArray;
    expect(app.countBoard).toStrictEqual({
      strike: 0,
      ball: 0,
    });
  });

  test('makeResult 테스트', () => {
    const logSpy = getLogSpy();
    app.countBoard = { strike: 0, ball: 0 };
    app.makeResult();

    expect(logSpy).toHaveBeenCalledWith('낫싱');
  });
});
