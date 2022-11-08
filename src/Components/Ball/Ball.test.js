const Ball = require("./Ball");

describe("Ball", () => {
  test("getNumber로 숫자 값을 반환", () => {
    const BALL_NUMBER = 425;
    const BALL = new Ball(ballNumber);

    expect(BALL.getNumber()).toBe(ballNumber);
  });

  test("나(공격수)의 Ball이 123이고 컴퓨터(수비수)의 Ball이 425이면 1스트라이크를 반환", () => {
    const BALL_OF_ATTACKER = new Ball(123);
    const BALL_OF_DEFENDER = new Ball(425);

    expect(BALL_OF_DEFENDER.compareTo(BALL_OF_ATTACKER)).toBe("1스트라이크");
  });
});
