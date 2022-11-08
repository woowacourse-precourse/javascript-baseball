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
//스트라이크 테스트
describe("숫자 야구 게임", () => {
    test("스트라이크 테스트", () => {
      const randoms = [4, 1, 6];
      const answers = ["256", "216", "416"];
      const logSpy = getLogSpy();
      const messages = [
        "1스트라이크",
        "2스트라이크",
        "3스트라이크",
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

//볼 테스트
describe("숫자 야구 게임", () => {
    test("볼 테스트", () => {
      const randoms = [8, 1, 3];
      const answers = ["286", "186", "381", "813"];
      const logSpy = getLogSpy();
      const messages = [
        "1볼",
        "2볼",
        "3볼",
        "3스트라이크"
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

//n볼 n스트라이크 테스트
describe("숫자 야구 게임", () => {
    test("n볼 n스트라이크 테스트", () => {
      const randoms = [2, 1, 9];
      const answers = ["913", "912", "219"];
      const logSpy = getLogSpy();
      const messages = [
        "1볼 1스트라이크",
        "2볼 1스트라이크",
        "3스트라이크"
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
