const Attacker = require("./Attacker");

const { Console, Random } = require("@woowacourse/mission-utils");

const { getLogSpy, mockRandoms } = require("../../mockFunction");
const ManualBallGenerator = require("../ManualBallGenerator/ManualBallGenerator");
const AutomaticBallGenerator = require("../AutomaticBallGenerator/AutomaticBallGenerator");
const Ball = require("../Ball/Ball");
const Defender = require("../Defender/Defender");

describe("Attacker", () => {
  test("1번 만에 3스트라이크", async () => {
    const ATTACKER_BALL_GENERATOR = new ManualBallGenerator();
    jest
      .spyOn(ATTACKER_BALL_GENERATOR, "execute")
      .mockReturnValue(new Ball(425));

    const DEFENDER_BALL_GENERATOR = new AutomaticBallGenerator();
    jest
      .spyOn(DEFENDER_BALL_GENERATOR, "execute")
      .mockReturnValue(new Ball(425));

    const ATTACKER = new Attacker(ATTACKER_BALL_GENERATOR);
    const DEFENDER = new Defender(DEFENDER_BALL_GENERATOR);
    const IS_GAME_END_SPY = jest.spyOn(DEFENDER, "isGameEnd");
    await ATTACKER.throwTo(DEFENDER);

    expect(IS_GAME_END_SPY).toHaveBeenCalledTimes(1);
  });

  test("3번 만에 3스트라이크", async () => {
    const ATTACKER_BALL_GENERATOR = new ManualBallGenerator();
    ATTACKER_BALL_GENERATOR.execute = jest.fn();
    const BALL_ARRAY = [new Ball(671), new Ball(216), new Ball(425)];
    BALL_ARRAY.reduce((acc, ball) => {
      return acc.mockReturnValueOnce(ball);
    }, ATTACKER_BALL_GENERATOR.execute);

    const DEFENDER_BALL_GENERATOR = new AutomaticBallGenerator();
    jest
      .spyOn(DEFENDER_BALL_GENERATOR, "execute")
      .mockReturnValue(new Ball(425));

    const ATTACKER = new Attacker(ATTACKER_BALL_GENERATOR);
    const DEFENDER = new Defender(DEFENDER_BALL_GENERATOR);
    const IS_GAME_END_SPY = jest.spyOn(DEFENDER, "isGameEnd");
    await ATTACKER.throwTo(DEFENDER);

    expect(IS_GAME_END_SPY).toHaveBeenCalledTimes(3);
  });
});
