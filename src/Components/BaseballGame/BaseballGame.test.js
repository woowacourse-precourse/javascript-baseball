const BaseballGame = require("./BaseballGame");

const { getLogSpy, mockRandoms, mockQuestions } = require("../../mockFunction");

describe("BaseballGame", () => {
  test("게임 종료 후 재시작", () => {
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

    const BASEBALL_GAME = new BaseballGame();
    BASEBALL_GAME.start();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
