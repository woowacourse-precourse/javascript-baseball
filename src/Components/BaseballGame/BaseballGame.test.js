const BaseballGame = require("./BaseballGame");

const { getLogSpy, mockRandoms, mockQuestions } = require("../../mockFunction");
const Attacker = require("../Attacker/Attacker");
const AutomaticBallGenerator = require("../AutomaticBallGenerator/AutomaticBallGenerator");
const Defender = require("../Defender/Defender");
const ManualBallGenerator = require("../ManualBallGenerator/ManualBallGenerator");

describe("BaseballGame", () => {
  test("게임 종료 후 재시작", async () => {
    const randoms = [
      [1, 3, 5],
      [5, 8, 9],
    ];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const ATTACKER = new Attacker(new ManualBallGenerator());
    const DEFENDER = new Defender(new AutomaticBallGenerator());
    const BASEBALL_GAME = new BaseballGame(ATTACKER, DEFENDER);
    await BASEBALL_GAME.start();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
