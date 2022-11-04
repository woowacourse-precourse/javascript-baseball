const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

describe('App 클래스 - get3RandomNumbers', () => {
  test('MissionUtils.Random.pickUniqueNumbersInRange 함수 동작 테스트', () => {
    const app = new App();
    const isNumber = (item) => typeof item === 'number';

    expect(app.get3RandomNumbers().every((item) => isNumber(item))).toBeTruthy();
    expect([...new Set(app.get3RandomNumbers())]).toHaveLength(3);

    MissionUtils.Console.close();
  });
});
