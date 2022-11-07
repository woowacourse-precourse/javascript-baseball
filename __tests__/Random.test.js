const MissionUtils = require('@woowacourse/mission-utils');
const Random = require('../src/Random');

const { close } = MissionUtils.Console;

afterEach(() => {
  close();
});

describe('getThreeRandomArray()', () => {
  test('길이가 3인 배열을 반환한다.', () => {
    const random = new Random();

    expect(random.getThreeRandomArray()).toHaveLength(3);
  });
});
