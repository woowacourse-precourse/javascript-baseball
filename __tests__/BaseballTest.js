const Baseball = require('../src/Baseball');

const { BASEBALL } = require('../src/constants/error');
const { SETTING } = require('../src/constants/game');

describe('Baseball 테스트', () => {
  test('야구공이 숫자가 아닐경우 예외를 던진다.', () => {
    expect(() => {
      new Baseball(['a', 'b', 'c']);
    }).toThrow(BASEBALL.ONLY_NUMBER);
  });

  test(`야구공이 ${SETTING.NUMBER_COUNT}자리가 아닐 경우 예외를 던진다.`, () => {
    expect(() => {
      new Baseball([1, 2, 3, 4]);
    }).toThrow(BASEBALL.LENGTH);
  });

  test('야구공에 중복된 숫자가 있으면 예외를 던진다.', () => {
    expect(() => {
      new Baseball([5, 1, 5]);
    }).toThrow(BASEBALL.DUPLICATE);
  });
});
