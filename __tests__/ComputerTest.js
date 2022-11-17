const BaseballHint = require('../src/BaseballHint');
const Computer = require('../src/Computer');

describe('Computer 테스트', () => {
  test('컴퓨터가 주는 힌트는 BaseballHint 인스턴스여야 한다.', () => {
    const computer = new Computer();
    computer.pickRandomBaseball();

    expect(computer.giveHint([1, 2, 3])).toBeInstanceOf(BaseballHint);
  });
});
