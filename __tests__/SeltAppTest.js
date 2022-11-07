const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    })
  }, MissionUtils.Console.readLine);
}

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
}

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
}

describe("기능3과 기능4 테스트", () => {
  test("예외 테스트", () => {
    const randoms = [1, 2, 3, 4, 5, 6];
    const answers = ["123", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(RangeError);
  })

  test("3스트라이크 일때 검사/재시작/종료 출력 테스트", () => {
    const randoms = [1, 2, 3, 4, 5, 6];
    const answers = ["123", "1", "546", "456", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "3스트라이크",
      "2볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    })
  })
})