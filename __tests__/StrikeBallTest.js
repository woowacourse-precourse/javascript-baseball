function StrikeOrBall(UserInput, Random, Strike, Ball) {
  const StrikeBallobj = {};
  for (let i = 0; i < 3; i++) {
    if (UserInput[i] === Random[i]) {
      Strike += 1;
    } else if (UserInput[i] !== Random[i] && Random.includes(UserInput)) {
      Ball += 1;
    }
  }
  StrikeBallobj.strike = Strike;
  StrikeBallobj.ball = Ball;
  return StrikeBallobj;
}

test('스트라이크 볼 판별', () => {
  const FirstTest = StrikeOrBall('123', '123', 0, 0);
  expect(FirstTest.strike).toBe(3);
  expect(FirstTest.ball).toBe(0);
  const SecondTest = StrikeOrBall('123', '456', 0, 0);
  expect(SecondTest.strike).toBe(0);
  expect(SecondTest.ball).toBe(0);
});
