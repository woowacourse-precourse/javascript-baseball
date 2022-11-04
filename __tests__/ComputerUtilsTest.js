const computerUtils = require('../src/utils/computerUtils');
const COMPUTER = require('../src/constants/COMPUTER');

describe('서로 다른 임의의 수 3개 생성 테스트', () => {
  const randomNumbers = computerUtils.getRandomNumber();

  test('중복 숫자 포함 확인', () => {
    expect([...new Set(randomNumbers)]).toHaveLength(COMPUTER.COUNT);
  });

  test('배열 안에 포함된 값은 1이상 9이하', () => {
    const sortedRandomNumbers = randomNumbers.sort((value1, value2) => value1 - value2);

    expect(sortedRandomNumbers[0]).toBeGreaterThanOrEqual(COMPUTER.START_NUMBER);
    expect(sortedRandomNumbers[2]).toBeLessThanOrEqual(COMPUTER.END_NUMBER);
  });
});
