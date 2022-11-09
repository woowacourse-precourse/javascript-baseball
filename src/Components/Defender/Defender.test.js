const { getLogSpy } = require("../../mockFunction");
const AutomaticBallGenerator = require("../AutomaticBallGenerator/AutomaticBallGenerator");
const Ball = require("../Ball/Ball");
const Defender = require("./Defender");

describe("Defender", () => {
  test("나(공격수)의 Ball이 425이고 컴퓨터(수비수)의 Ball이 425이면 3스트라이크를 출력", () => {
    const BALL_GENERATOR = new AutomaticBallGenerator();
    jest.spyOn(BALL_GENERATOR, "execute").mockReturnValue(new Ball(425));

    const DEFENDER = new Defender(BALL_GENERATOR);
    const BALL_OF_ATTACKER = new Ball(425);
    const LOG_SPY = getLogSpy();
    DEFENDER.reportAbout(BALL_OF_ATTACKER);

    expect(LOG_SPY).toHaveBeenCalledWith("3스트라이크");
  });

  test("나(공격수)의 Ball이 456이고 컴퓨터(수비수)의 Ball이 425이면 1볼 1스트라이크를 출력", () => {
    const BALL_GENERATOR = new AutomaticBallGenerator();
    jest.spyOn(BALL_GENERATOR, "execute").mockReturnValue(new Ball(456));

    const DEFENDER = new Defender(BALL_GENERATOR);
    const BALL_OF_ATTACKER = new Ball(425);
    const LOG_SPY = getLogSpy();
    DEFENDER.reportAbout(BALL_OF_ATTACKER);

    expect(LOG_SPY).toHaveBeenCalledWith("1볼 1스트라이크");
  });

  test("게임이 끝났으면 true 반환", () => {
    const BALL_GENERATOR = new AutomaticBallGenerator();
    jest.spyOn(BALL_GENERATOR, "execute").mockReturnValue(new Ball(425));

    const DEFENDER = new Defender(BALL_GENERATOR);
    const BALL_OF_ATTACKER = new Ball(425);

    expect(DEFENDER.isGameEnd(BALL_OF_ATTACKER)).toBe(true);
  });
});
