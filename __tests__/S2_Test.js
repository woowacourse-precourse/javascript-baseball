const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

describe('[S2]  유저는 올바른 게임 진행을 통해 재미를 느끼기 위해서 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 맞추고 싶어한다.', () => {
  test('[T2-1] 1 부터 9 까지 서로 다른 세자리 수를 생성해주는 기능이 필요하다.', () => {
    const firstRange = 1;
    const lastRange = 9;
    const length = 3;

    const test_generator_number = MissionUtils.Random.pickUniqueNumbersInRange(
      firstRange,
      lastRange,
      length
    );

    expect(test_generator_number.length).toBe(length);

    test_generator_number.map((number) => {
      expect(number).toBeGreaterThanOrEqual(firstRange);
      expect(number).toBeLessThanOrEqual(lastRange);
      expect(test_generator_number.filter((v) => v === number).length).toBe(1);
    });
  });
  test('[T2-2] 사용자로 부터 1 부터 9 까지 서로 다른 세자리 수를 입력 받는 기능', () => {});
});
