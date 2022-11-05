const App = require('../src/App');

describe('함수 테스트', () => {
  const app = new App();

  test('난수 테스트', () => {
    const randomList = app.createRandomList();
    const set = new Set(randomList);

    expect(set.size).toEqual(3);
    set.forEach((number) => {
      expect(number).not.toEqual(0);
    });
  });

  test('볼 스트라이크 계산', () => {
    const randomArray = [1, 3, 5];
    const inputArray = [3, 1, 5];
    const { ball, strike } = app.calculateCount(randomArray, inputArray);

    expect(ball).toEqual(2);
    expect(strike).toEqual(1);
  });

  test('출력 문자열 생성', () => {
    const ball = 2;
    const strike = 1;
    const result = app.createResultString(ball, strike);

    expect(result).toEqual('2볼 1스트라이크');
  });
});
