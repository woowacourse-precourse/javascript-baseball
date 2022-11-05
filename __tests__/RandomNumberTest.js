const RandomNumber = require('../src/RandomNumber');
const { Console } = require('@woowacourse/mission-utils');

describe('RandomNumber 클래스 - makeNew()', () => {
  test('서로 다른 임의의 세 숫자가 있는지 확인', () => {
    const isNumber = (item) => typeof item === 'number';

    expect(RandomNumber.makeNew().every((item) => isNumber(item))).toBeTruthy();
    expect([...new Set(RandomNumber.makeNew())]).toHaveLength(3);

    Console.close();
  });
});
