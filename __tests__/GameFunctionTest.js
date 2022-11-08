const App = require('../src/App');

describe('게임 기능 테스트', () => {
  test('입력한 값이 숫자로,배열로 알맞게 들어오는지 체크', () => {
    const app = new App();
    const result = app.convertToNumberArray('123');
    expect(result).toEqual([1, 2, 3]);
  });

  test('볼 출력 체크 ', () => {
    const app = new App();
    const oneBall = app.printResult(1, 0);
    expect(oneBall).toEqual('1볼');
    const twoBall = app.printResult(2, 0);
    expect(twoBall).toEqual('2볼');
    const threeBall = app.printResult(3, 0);
    expect(threeBall).toEqual('3볼');
  });

  test('스트라이크 출력 체크', () => {
    const app = new App();
    const oneStrike = app.printResult(0, 1);
    expect(oneStrike).toEqual('1스트라이크');
    const twoStrike = app.printResult(0, 2);
    expect(twoStrike).toEqual('2스트라이크');
    const threeStrike = app.printResult(0, 3);
    expect(threeStrike).toEqual('3스트라이크');
  });

  test('낫싱 출력 체크', () => {
    const app = new App();
    const result = app.printResult(0, 0);
    expect(result).toEqual('낫싱');
  });

  test('3스트라이크 기능 호출 체크', () => {
    const app = new App();

    app.confirmRetry = jest.fn();
    app.readUserInput = jest.fn();

    app.processNextStep(3);

    expect(app.confirmRetry).toHaveBeenCalled();
    expect(app.readUserInput).not.toHaveBeenCalled();
  });

  test('2스트라이크 기능 호출 체크', () => {
    const app = new App();

    app.confirmRetry = jest.fn();
    app.readUserInput = jest.fn();

    app.processNextStep(2);

    expect(app.confirmRetry).not.toHaveBeenCalled();
    expect(app.readUserInput).toHaveBeenCalled();
  });
});
