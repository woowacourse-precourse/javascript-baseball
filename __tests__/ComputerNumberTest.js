const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

describe('컴퓨터 숫자 생성', () => {
  test('숫자의 갯수는 세 개이다.', () => {
    const app = new App();
    const result = app.generateComputerNumbers();

    expect(result).toHaveLength(3);
  });
  test('서로 다른 임의의 수로 구성되어 있다', () => {
    const app = new App();
    const numbers = app.generateComputerNumbers();
    const numberSet = new Set(numbers);
    const result = numbers.length === numberSet.size;

    expect(result).toBeTruthy();
  });

  MissionUtils.Console.close();
});
