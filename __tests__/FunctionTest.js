const { validByRegex } = require('../src/Function');

describe('Function 테스트', () => {
  test('validByRegex 테스트', () => {
    const input = ['123', '890', '678', '1234'];
    const answer = [false, true, false, true];

    const message = input.map(el => validByRegex(el));
    expect(message).toStrictEqual(answer);
  });
});
