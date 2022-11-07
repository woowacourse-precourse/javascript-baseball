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

  test('3개의 요소 모두 숫자 타입이다.', () => {
    const random = new Random();

    random.getThreeRandomArray().forEach((target) => {
      expect(typeof target).toBe('number');
    });
  });

  test('1부터 9까지 범위의 값을 반환한다.', () => {
    const random = new Random();

    random.getThreeRandomArray().forEach((target) => {
      expect(target >= 1 && target <= 9).toBeTruthy();
    });
  });
});
