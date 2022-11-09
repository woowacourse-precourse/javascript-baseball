const { getLogSpy, mockRandoms, mockQuestions } = require("../../mockFunction");
const BaseballGame = require("./BaseballGame");
const Attacker = require("../Attacker/Attacker");
const AutomaticBallGenerator = require("../AutomaticBallGenerator/AutomaticBallGenerator");
const Defender = require("../Defender/Defender");
const ManualBallGenerator = require("../ManualBallGenerator/ManualBallGenerator");

describe("BaseballGame", () => {
  test("게임 시작", async () => {
    const RANDOM_ARRAY = [1, 3, 5];
    const ANSWER_ARRAY = ["246", "135"];
    const LOG_SPY = getLogSpy();
    const MESSAGE_ARRAY = ["낫싱", "3스트라이크"];

    mockRandoms(RANDOM_ARRAY);
    mockQuestions(ANSWER_ARRAY);

    const ATTACKER = new Attacker(new ManualBallGenerator());
    const DEFENDER = new Defender(new AutomaticBallGenerator());
    const BASEBALL_GAME = new BaseballGame(ATTACKER, DEFENDER);
    BASEBALL_GAME.start();

    MESSAGE_ARRAY.forEach((output) => {
      expect(LOG_SPY).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const ATTACKER = new Attacker(new ManualBallGenerator());
    const DEFENDER = new Defender(new AutomaticBallGenerator());
    const BASEBALL_GAME = new BaseballGame(ATTACKER, DEFENDER);

    expect(BASEBALL_GAME.start).toThrow();
  });
});
