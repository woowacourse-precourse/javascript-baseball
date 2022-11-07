const Computer = require('../src/Computer');

describe('Computer class 테스트', () => {
  let computer;

  beforeEach(() => {
    computer = new Computer();
  });

  test('getRandomNumber 값 테스트', () => {
    const number = computer.getRandomNumber();
    expect(number).not.toEqual(0);
  });

  test('setRandomNumber 값 반환 테스트', () => {
    computer.setRandomNumber();
    expect(computer.selectedNumber.length).toBe(3);
  });
});
