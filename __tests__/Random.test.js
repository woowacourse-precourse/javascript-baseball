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

  test('첫번째 요소는 1부터 3까지 범위의 값을 반환한다.', () => {
    const random = new Random();
    const target = random.getThreeRandomArray()[0];

    expect(target >= 1 && target <= 3).toBeTruthy();
  });

  test('두번째 요소는 4부터 6까지 범위의 값을 반환한다.', () => {
    const random = new Random();
    const target = random.getThreeRandomArray()[1];

    expect(target >= 4 && target <= 6).toBeTruthy();
  });

  test('세번째 요소는 7부터 9까지 범위의 값을 반환한다.', () => {
    const random = new Random();
    const target = random.getThreeRandomArray()[2];

    expect(target >= 7 && target <= 9).toBeTruthy();
  });
});
