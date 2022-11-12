const Computer = require('../src/player/Computer');
const User = require('../src/player/User');

describe('User class 테스트', () => {
  test('숫자를 입력받는다.', () => {
    const input = '123';
    const result = [1, 2, 3];
    const user = new User();
    user.setNumber(input);
    expect(user.number).toEqual(result);
  });
});

describe('Computer class 테스트', () => {
  test('컴퓨터의 랜덤 숫자를 생성한다.', () => {
    const computer = new Computer();
    computer.setNumber();
    expect(computer.number).toHaveLength(3);
  });
});
