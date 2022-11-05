const App = require("../src/App");
const RandomNumber = require("../src/RandomNumber");
const CheckConstraints = require("../src/CheckConstraints");
const GetUserIput = require("../src/GetUserInput");
const GameResult = require("../src/GameResult");
const MissionUtils = require("@woowacourse/mission-utils");

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

    const getUserInput = new GetUserIput();
    getUserInput.getUserInput();

    expect(readSpy).toHaveBeenCalled();
    expect(readSpy).toHaveBeenCalledTimes(1);
    expect(constraintsSpy).toBeTruthy();
    expect(constraintsSpy).toHaveBeenCalledTimes(1);
  });

  test("점수 산정", () => {
    const gameResult = new GameResult();

    gameResult.COMPUTER = [1, 2, 3];
    gameResult.showGameResult("123");
    expect(gameResult.strike).toEqual(3);
    expect(gameResult.ball).toEqual(0);

    gameResult.COMPUTER = [3, 2, 5];
    gameResult.showGameResult("123");
    expect(gameResult.strike).toEqual(1);
    expect(gameResult.ball).toEqual(1);

    gameResult.COMPUTER = [7, 2, 9];
    gameResult.showGameResult("972");
    expect(gameResult.strike).toEqual(0);
    expect(gameResult.ball).toEqual(3);

    gameResult.COMPUTER = [7, 2, 9];
    gameResult.showGameResult("136");
    expect(gameResult.strike).toEqual(0);
    expect(gameResult.ball).toEqual(0);
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
