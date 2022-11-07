const Computer = require('../src/Computer');

describe('Computer class 테스트', () => {
  test('getRandomNumber 값 테스트', () => {
    const computer = new Computer();
    const number = computer.getRandomNumber();
    expect(number).not.toEqual(0);
  });
});
