const readline = require("readline");
const Game = require("./Game");
const User = require("./User");
const MissionUtils = require("@woowacourse/mission-utils");

jest.mock("readline", () => {
  return {
    createInterface: jest.fn().mockReturnValue({
      question: jest
        .fn()
        .mockImplementationOnce((query, callback) => callback()),
      close: jest.fn().mockImplementationOnce(() => undefined),
    }),
  };
});

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

describe("유저", () => {
  test("숫자 입력 문구를 출력한다", () => {
    mockQuestions(["123"]);

    const query = "숫자를 입력하세요 : ";
    const callback = () => {};

    const user = new User();
    user.readAnswer(query, callback);

    expect(MissionUtils.Console.readLine.mock.calls[0][0]).toEqual(query);
  });

  test("유저가 숫자를 입력한다", () => {
    mockQuestions(["123"]);

    const mock = jest.fn();
    const logSpy = jest.spyOn(readline, "createInterface");
    const user = new User();

    user.readAnswer("", mock);

    expect(mock).toHaveBeenCalledWith("123");
    expect(logSpy).toHaveBeenCalled();
  });

  test("길이가 3 이상의 정답을 입력할 경우 예외를 발생시키고 앱을 종료한다", () => {
    mockQuestions(["1234"]);

    expect(() => {
      const user = new User();
      user.readAnswer("", () => {});
    }).toThrow();
  });

  test("중복이 존재하는 정답을 입력할 경우 예외를 발생시키고 앱을 종료한다", () => {
    mockQuestions(["122"]);

    expect(() => {
      const user = new User();
      user.readAnswer("", () => {});
    }).toThrow();
  });

  test("유효하지 않은 정답을 입력할 경우 예외를 발생시키고 앱을 종료한다", () => {
    mockQuestions(["seyeon"]);

    expect(() => {
      const user = new User();
      user.readAnswer("", () => {});
    }).toThrow();
  });

  test("범위를 벗어난 정답을 입력할 경우 예외를 발생시키고 앱을 종료한다", () => {
    mockQuestions(["012"]);

    expect(() => {
      const user = new User();
      user.readAnswer("", () => {});
    }).toThrow();
  });

  test("재시작 숫자 입력 문구를 출력한다", () => {
    mockQuestions(["123"]);

    const query = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";

    const user = new User();
    const game = new Game();
    const logSpy = getLogSpy();

    const callback = (answer) => {
      const correct = answer === "123";

      if (correct) game.printMessage(query);
    };

    user.readAnswer("숫자를 입력하세요 : ", callback);

    expect(logSpy).toHaveBeenCalledWith(query);
  });

  test("유저가 재시작 플래그를 입력한다", () => {
    mockQuestions(["1"]);

    const mock = jest.fn();
    const logSpy = jest.spyOn(readline, "createInterface");
    const user = new User();

    user.readFlag("", mock);

    expect(mock).toHaveBeenCalledWith("1");
    expect(logSpy).toHaveBeenCalled();
  });

  test("1 또는 2가 아닌 플래그를 입력할 경우 예외를 발생시키고 앱을 종료한다", () => {
    mockQuestions(["3"]);

    expect(() => {
      const user = new User();
      user.readFlag("", () => {});
    }).toThrow();
  });
});
