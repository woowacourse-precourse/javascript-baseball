const Computer = require('../src/Computer');
const User = require('../src/User');

describe('User 테스트', () => {
  test('테스트', () => {
    const numbers = [1, 2, 3];
    const computer = new Computer();
    computer.pickRandomBaseball();
    const user = new User();

    const guessSpy = jest.spyOn(user, 'guess');

    user.guess(numbers, computer);

    expect(guessSpy).toHaveBeenCalledWith(expect.any(Array), expect.any(Computer));
  });
});
