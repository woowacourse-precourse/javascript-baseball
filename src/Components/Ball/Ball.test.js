const Ball = require("./Ball");

describe("Ball", () => {
  test("getNumber로 숫자 값을 반환", () => {
    const BALL_NUMBER = 425;
    const BALL = new Ball(BALL_NUMBER);

    expect(BALL.getNumber()).toBe(BALL_NUMBER);
  });

  test("나(공격수)의 Ball이 123이고 컴퓨터(수비수)의 Ball이 425이면 1스트라이크를 반환", () => {
    const BALL_OF_ATTACKER = new Ball(123);
    const BALL_OF_DEFENDER = new Ball(425);

    expect(BALL_OF_DEFENDER.compareTo(BALL_OF_ATTACKER)).toBe("1스트라이크");
  });

  test("나(공격수)의 Ball이 456이고 컴퓨터(수비수)의 Ball이 425이면 1볼 1스트라이크를 반환", () => {
    const BALL_OF_ATTACKER = new Ball(456);
    const BALL_OF_DEFENDER = new Ball(425);

    expect(BALL_OF_DEFENDER.compareTo(BALL_OF_ATTACKER)).toBe(
      "1볼 1스트라이크"
    );
  });

  test("나(공격수)의 Ball이 789이고 컴퓨터(수비수)의 Ball이 425이면 낫싱을 반환", () => {
    const BALL_OF_ATTACKER = new Ball(789);
    const BALL_OF_DEFENDER = new Ball(425);

    expect(BALL_OF_DEFENDER.compareTo(BALL_OF_ATTACKER)).toBe("낫싱");
  });

  test("");
});
