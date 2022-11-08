const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

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

describe("숫자 야구 게임 테스트", () => {
  test("게임 시작 시 문구를 출력합니다.", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다");
  });

  test("스트라이크와 볼을 출력합니다.", () => {
    const logSpy = getLogSpy();
    const randoms = [1, 3, 5];
    const answers = ["123", "982", "521", "719", "136", "135"];
    const messages = [
      "1볼 1스트라이크",
      "낫싱",
      "2볼",
      "1볼",
      "2스트라이크",
      "3스트라이크",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
  });

  test("게임을 재시작합니다.", () => {
    const logSpy = getLogSpy();
    const randoms = [1, 3, 5, 7, 1, 3];
    const answers = ["135", "1", "123", "713"];
    const messages = ["3스트라이크", "1볼 1스트라이크", "3스트라이크"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
  });

  test("사용자의 입력 형식(숫자가 3개가 아님)이 잘못되었을 때 예외가 발생합니다.", () => {
    const randoms = [1, 3, 5];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자의 입력 형식(1부터 9사이가 아닌 숫자)이 잘못되었을 때 예외가 발생합니다.", () => {
    const randoms = [1, 3, 5];
    const answers = ["120"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자의 입력 형식(중복된 수가 있음)이 잘못되었을 때 예외가 발생합니다.", () => {
    const randoms = [1, 3, 5];
    const answers = ["122"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자의 입력 형식(숫자가 아닌 문자가 있음)이 잘못되었을 때 예외가 발생합니다.", () => {
    const randoms = [1, 3, 5];
    const answers = ["1ㄱ2"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
