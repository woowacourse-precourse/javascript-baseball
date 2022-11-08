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
  test("정답을 맞춘 후 재시작 및 게임 종료 테스트", () => {
    const randoms = [4, 2, 9, 6, 5, 1];
    const answers = ["124", "372", "359", "965", "378", "215", "927"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1볼",
      "1스트라이크",
      "1볼 1스트라이크",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("입력받은 숫자에 중복인 숫자가 존재하는 경우", () => {
    const randoms = [2, 4, 8];
    const answers = ["224"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력받은 숫자에 0이 포함된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["105"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력받은 숫자에 문자가 포함된 경우", () => {
    const randoms = [2, 4, 8];
    const answers = ["a25"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력받은 숫자의 길이가 3이 아닌 경우", () => {
    const randoms = [2, 4, 8];
    const answers = ["28964"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
