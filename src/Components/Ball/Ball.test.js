const Ball = require('./Ball');

describe('Ball', () => {
  test('getNumber로 숫자 값을 반환', () => {
    const ballNumber = 425;
    const ball = new Ball(ballNumber);

    expect(ball.getNumber()).toBe(ballNumber);
  });
});
