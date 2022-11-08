const Game = require("./Game");
const Computer = require("./Computer");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("게임 시작", () => {
  test("시작시 인트로 문구 출력를 출력한다", () => {
    const intro = "숫자 야구 게임을 시작합니다.";
    const logSpy = getLogSpy();

    const game = new Game();
    game.play();

    expect(logSpy).toHaveBeenCalledWith(intro);
  });
});

describe("유저가 입력한 숫자 판별", () => {
  test("자리와 숫자 모두를 맞혔다면 스트라이크를 출력한다", () => {
    const computer = new Computer();
    const game = new Game();
    const logSpy = getLogSpy();

    computer.correctNumberList = "123".split("");
    game.checkAnswer = jest.fn().mockImplementationOnce((answer) => {
      const [ball, strike] = computer.calcCount(answer);

      game.printResult(ball, strike);
    });

    game.checkAnswer("123");
    expect(logSpy).toHaveBeenCalledWith("3스트라이크");
  });

  test("숫자만 맞혔다면 볼을 출력한다", () => {
    const computer = new Computer();
    const game = new Game();
    const logSpy = getLogSpy();

    computer.correctNumberList = "123".split("");
    game.checkAnswer = jest.fn().mockImplementationOnce((answer) => {
      const [ball, strike] = computer.calcCount(answer);

      game.printResult(ball, strike);
    });

    game.checkAnswer("312");
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("볼"));
    expect(logSpy).toHaveBeenCalledWith(
      expect.not.stringContaining("스트라이크")
    );
  });

  test("모두 맞히지 못했다면 낫싱을 출력한다", () => {
    const computer = new Computer();
    const game = new Game();
    const logSpy = getLogSpy();

    computer.correctNumberList = "123".split("");
    game.checkAnswer = jest.fn().mockImplementationOnce((answer) => {
      const [ball, strike] = computer.calcCount(answer);

      game.printResult(ball, strike);
    });

    game.checkAnswer("456");
    expect(logSpy).toHaveBeenCalledWith("낫싱");
  });

  test("정답을 맞힐 경우 아웃트로 문구를 출력한다", () => {
    const computer = new Computer();
    const game = new Game();
    const logSpy = getLogSpy();

    computer.correctNumberList = "123".split("");
    game.checkAnswer = jest.fn().mockImplementationOnce((answer) => {
      const [ball, strike] = computer.calcCount(answer);

      if (strike === 3) {
        game.printOutro();
      }
    });

    game.checkAnswer("123");
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
    );
  });
});
