const App = require('../src/App');
const Random = require('../src/Random');
const MissionUtils = require('@woowacourse/mission-utils');
const ValidInput = require('../src/IsValidInput');

test('IF random number is valid', () => {
  const IsValidRandomNumber = ValidInput(Random);
  const RandomValue = Number(Random);
  expect(RandomValue).toBeGreaterThanOrEqual(100);
  expect(RandomValue).toBeLessThanOrEqual(999);

  expect(IsValidRandomNumber).toEqual(1);
});
