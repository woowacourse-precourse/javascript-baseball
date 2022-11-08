const App = require("../src/App");
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

  // 테스트 및 검증.
  // test("makeComputerNumber", () => {
  //   expect(app.makeComputerNumber().length).toEqual(3);
  // });

  // test("checkResult", () => {`
  //   expect(app.checkResult("123", [1, 2, 3])).toEqual([0, 3]);
  //   expect(app.checkResult("123", [1, 4, 2])).toEqual([2, 1]);
  //   expect(app.checkResult("123", [4, 5, 1])).toEqual([1, 0]);
  //   expect(app.checkResult("123", [4, 5, 6])).toEqual([0, 0]);
  // });

  // test("resultMessage", () => {
  //   expect(app.resultMessage([0, 3])).toEqual("3스트라이크");
  //   expect(app.resultMessage([2, 1])).toEqual("2볼 1스트라이크");
  //   expect(app.resultMessage([1, 0])).toEqual("1볼");
  //   expect(app.resultMessage([0, 0])).toEqual("낫싱");
  // });

  MissionUtils.Console.close();

});
