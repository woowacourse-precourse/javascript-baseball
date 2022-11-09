const { mockQuestions, mockRandoms } = require("../../mockFunction");

const Attacker = require("./Attacker");

const ManualBallGenerator = require("../ManualBallGenerator/ManualBallGenerator");
const AutomaticBallGenerator = require("../AutomaticBallGenerator/AutomaticBallGenerator");
const Ball = require("../Ball/Ball");
const Defender = require("../Defender/Defender");

describe("Attacker", () => {
  test("1번 만에 3스트라이크", () => {
    const RANDOM_ARRAY = [1, 3, 5];
    const ANSWER_ARRAY = ["135"];
    mockRandoms(RANDOM_ARRAY);
    mockQuestions(ANSWER_ARRAY);

    const ATTACKER_BALL_GENERATOR = new ManualBallGenerator();
    const DEFENDER_BALL_GENERATOR = new AutomaticBallGenerator();
    const ATTACKER = new Attacker(ATTACKER_BALL_GENERATOR);
    const DEFENDER = new Defender(DEFENDER_BALL_GENERATOR);

    const IS_GAME_END_SPY = jest.spyOn(DEFENDER, "isGameEnd");
    ATTACKER.throwTo(DEFENDER);
    expect(IS_GAME_END_SPY).toHaveBeenCalledTimes(1);
  });

  test("2번 만에 3스트라이크", async () => {
    const RANDOM_ARRAY = [1, 3, 5];
    const ANSWER_ARRAY = ["246", "135"];
    mockRandoms(RANDOM_ARRAY);
    mockQuestions(ANSWER_ARRAY);

    const ATTACKER_BALL_GENERATOR = new ManualBallGenerator();
    const DEFENDER_BALL_GENERATOR = new AutomaticBallGenerator();
    const ATTACKER = new Attacker(ATTACKER_BALL_GENERATOR);
    const DEFENDER = new Defender(DEFENDER_BALL_GENERATOR);

    const IS_GAME_END_SPY = jest.spyOn(DEFENDER, "isGameEnd");
    ATTACKER.throwTo(DEFENDER);
    expect(IS_GAME_END_SPY).toHaveBeenCalledTimes(2);
  });
});
