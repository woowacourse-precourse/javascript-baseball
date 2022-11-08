const { Console } = require('@woowacourse/mission-utils');
const RandomNumber = require('../src/RandomNumber');

describe('RandomNumber 클래스 - makeNew()', () => {
  test('서로 다른 임의의 세 숫자가 있는지 확인', () => {
    const random = RandomNumber.makeNew();
    const isNumber = (item) => typeof item === 'number';

    expect(random.every((item) => isNumber(item))).toBeTruthy();
    expect([...new Set(random)]).toHaveLength(3);

    Console.close();
  });
});
