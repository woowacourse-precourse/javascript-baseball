const Ball = require("./Ball");

describe("Ball", () => {
  test("getNumber로 숫자 값을 반환", () => {
    const ballNumber = 425;
    const ball = new Ball(ballNumber);

    expect(ball.getNumber()).toBe(ballNumber);
  });

  test("나(공격수)의 Ball이 123이고 컴퓨터(수비수)의 Ball이 425이면 1스트라이크를 반환", () => {
    const ballOfAttacker = new Ball(123);
    const ballOfDefender = new Ball(425);

    expect(ballOfDefender.compareTo(ballOfAttacker)).toBe("1스트라이크");
  });
});
