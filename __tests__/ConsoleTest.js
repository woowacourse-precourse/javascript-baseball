const App = require('../src/App');

describe('유효성 테스트', () => {
  const app = new App();

  test('시작 메세지 출력', () => {
    const logSpy = jest.spyOn(console, 'log');
    logSpy.mockClear();

    app.play();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('종료 메세지 출력', () => {
    const logSpy = jest.spyOn(console, 'log');
    logSpy.mockClear();

    const scoreResult = '3스트라이크';

    app.printScoreResult(scoreResult);

    expect(logSpy).toHaveBeenCalledWith(
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
    );
  });
});
