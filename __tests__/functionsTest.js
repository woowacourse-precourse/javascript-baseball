const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("야구 게임 테스트", () => {
  test("시작 메세지 출력", () => {
    const logSpy = jest.spyOn(console, "log");
    logSpy.mockClear();

    const app = new App();
    app.startGame();

    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("컴퓨터 숫자 랜덤", () => {
    const number = [1, 2, 3];

    mockRandoms(number);

    const app = new App();
    const result = app.selectComputer();

    expect(result).toEqual("123");
  });

  test("사용자 숫자 입력 받기", () => {
    const userNumber = ["456"];

    mockQuestions(userNumber);

    const app = new App();
    const result = app.selectUser();

    expect(result).toEqual("456");
  });

  test("예외사항: 사용자 숫자 길이가 올바르지 않음", () => {
    const computer = "123";
    const user = "1234";

    expect(() => {
      const app = new App();
      app.countScore(computer, user);
    }).toThrow();
  });

  test("예외사항: 사용자 입력 값이 숫자가 아님", () => {
    const computer = "123";
    const user = "abc";

    expect(() => {
      const app = new App();
      app.countScore(computer, user);
    }).toThrow();
  });

  test("점수 카운트하기", () => {
    const computer = "589";
    const user = "597";

    const app = new App();
    const result = app.calculateScore(computer, user);

    expect(result).toEqual([1, 1]);
  });

  test("점수 출력", () => {
    const logSpy = jest.spyOn(console, "log");
    logSpy.mockClear();

    const score = [1, 1];

    const app = new App();
    app.printScore(score);

    expect(logSpy).toHaveBeenCalledWith("1볼 1스트라이크");
  });

  test("숫자 모두 맞음", () => {
    const logSpy = jest.spyOn(console, "log");
    logSpy.mockClear();

    const result = "3스트라이크";

    const app = new App();
    app.isAnswer(result);

    expect(logSpy).toHaveBeenCalledWith("게임 종료");
  });

  test("숫자 맞지 않음", () => {
    const logSpy = jest.spyOn(console, "log");
    logSpy.mockClear();

    const randoms = [1, 3, 5];
    const answers = ["246", "135"];
    const messages = ["낫싱", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
