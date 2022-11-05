const App = require("../src/App");
const RandomNumber = require("../src/RandomNumber");
const CheckConstraints = require("../src/CheckConstraints");
const Player = require("../src/Player");
const MissionUtils = require("@woowacourse/mission-utils");
const ReStart = require("../src/ReStart");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  test("게임 시작 메세지 출력", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.showStartMessage();

    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("컴퓨터 랜덤 숫자 생성", () => {
    const randomSpy = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
    const constraintsSpy = jest.spyOn(
      CheckConstraints.prototype,
      "checkConstraints"
    );

    RandomNumber.makeRandomNumber();

    expect(randomSpy).toHaveBeenCalled();
    expect(randomSpy).toHaveBeenCalledWith(1, 9);
    expect(constraintsSpy).toBeTruthy();
    expect(constraintsSpy).toHaveBeenCalledTimes(1);
  });

  test("플레이어 숫자 입력", () => {
    const readSpy = jest.spyOn(MissionUtils.Console, "readLine");
    const constraintsSpy = jest.spyOn(
      CheckConstraints.prototype,
      "checkConstraints"
    );

    const player = new Player();
    player.getPlayerInput();

    expect(readSpy).toHaveBeenCalled();
    expect(readSpy).toHaveBeenCalledTimes(1);
    expect(constraintsSpy).toBeTruthy();
    expect(constraintsSpy).toHaveBeenCalledTimes(1);
  });

  test("점수 산정", () => {
    const logSpy = getLogSpy();
    const player = new Player();

    player.COMPUTER = [1, 2, 3];
    player.comparePlayerInputWithRadomNumber("123");
    expect(player.strike).toEqual(3);
    expect(player.ball).toEqual(0);
    expect(logSpy).toHaveBeenCalledWith("3스트라이크");
    expect(logSpy).toHaveBeenCalledWith(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );

    player.COMPUTER = [3, 2, 5];
    player.comparePlayerInputWithRadomNumber("123");
    expect(player.strike).toEqual(1);
    expect(player.ball).toEqual(1);
    expect(logSpy).toHaveBeenCalledWith("1볼 1스트라이크");

    player.COMPUTER = [7, 2, 9];
    player.comparePlayerInputWithRadomNumber("972");
    expect(player.strike).toEqual(0);
    expect(player.ball).toEqual(3);
    expect(logSpy).toHaveBeenCalledWith("3볼");

    player.COMPUTER = [7, 2, 9];
    player.comparePlayerInputWithRadomNumber("136");
    expect(player.strike).toEqual(0);
    expect(player.ball).toEqual(0);
    expect(logSpy).toHaveBeenCalledWith("낫싱");
  });

  test("게임 재시작 여부 질문", () => {
    const logSpy = getLogSpy();
    const restartSpy = jest.spyOn(ReStart.prototype, "decideReStart");

    const player = new Player();

    player.COMPUTER = [1, 2, 3];
    player.comparePlayerInputWithRadomNumber("123");

    expect(player.strike).toEqual(3);
    expect(player.ball).toEqual(0);
    expect(logSpy).toHaveBeenCalledWith("3스트라이크");
    expect(logSpy).toHaveBeenCalledWith(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    expect(restartSpy).toHaveBeenCalled();
    expect(restartSpy).toHaveBeenCalledTimes(1);
  });

  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
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

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
