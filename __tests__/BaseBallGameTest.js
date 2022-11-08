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

  test("일부 숫자 정답시 볼, 스트라이크 갯수 출력", () => {
    const randoms = [7, 3, 1];
    const answers = ["623"];
    const logSpy = getLogSpy();
    const messages = [
      "1볼",
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
