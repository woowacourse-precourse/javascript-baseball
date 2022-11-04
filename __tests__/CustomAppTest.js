const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

describe('App 클래스 - get3RandomNumbers()', () => {
  test('MissionUtils.Random.pickUniqueNumbersInRange 함수 동작 테스트', () => {
    const app = new App();
    const isNumber = (item) => typeof item === 'number';

    expect(
      app.get3RandomNumbers().every((item) => isNumber(item)),
    ).toBeTruthy();
    expect([...new Set(app.get3RandomNumbers())]).toHaveLength(3);

    MissionUtils.Console.close();
  });
});

describe('App 클래스 - isStrike()', () => {
  test('주어진 입력값이 random값과 비교 스트라이크인지 확인하는 함수', () => {
    const random = [1, 2, 3];
    const input = [1, 4, 5];

    const app = new App();

    expect(app.isStrike(random[0], input[0])).toBeTruthy();
    expect(app.isStrike(random[1], input[1])).toBeFalsy();
    expect(app.isStrike(random[2], input[2])).toBeFalsy();
  });
});
