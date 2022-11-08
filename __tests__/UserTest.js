const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const User = require("../src/User");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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

describe("유저 플로우", () => {
  test("게임 시작 문구 출력", () => {
    const app = new App();
    const logSpy = getLogSpy();
    app.play();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test("정답시 게임 종료", () => {
    const randoms = [7, 3, 1];
    const answers = ["731"];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('게임 종료'));
  });
  
  test("게임 재시작", () => {
    const randoms = [7, 3, 1, 3, 4, 5];
    const answers = ["731", "1", "364"];
    const logSpy = getLogSpy();
    const messages = [
      "3스트라이크",
      "1볼 1스트라이크"
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
