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
  
  test("컴퓨터의 숫자를 모두 맞추는 경우", () => {
    const comArr = [1, 2, 3];
    const userArr = [1, 2, 3];

    const app = new App();
    const result = app.getResult(comArr, userArr);

    expect(result).toEqual([0, 3]);
  })

  test("컴퓨터의 숫자를 일부 맞추는 경우", () => {
    const comArr = [1, 2, 3];
    const userArr = [2, 3, 4];

    const app = new App();
    const result = app.getResult(comArr, userArr);

    expect(result).toEqual([2, 0]);
  })

  test("컴퓨터의 숫자와 일치하는 숫자가 없는 경우", () => {
    const scoreResult = [0, 0];
    const logSpy = getLogSpy();

    const app = new App();
    app.winOrLose(scoreResult);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("낫싱"));
  })

  test("게임 승리 테스트", () => {
    const scoreResult = [[0, 3], [1, 2]];
    const result = [];

    scoreResult.forEach((score) => {
      const app = new App();
      result.push(app.winOrLose(score));
    })

    expect(result).toEqual([true, false]);
  })

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

  test("사용자 입력 예외 테스트", () => {
    const userInput = ["1234", "abc", "12"];
    const result = [];

    userInput.forEach((userInput) => {
      const app = new App();
      result.push(app.validUserInput(userInput))
    })

    expect(result).toEqual([false, false, false]);
  })

  test("다시하기 사용자 입력 예외 테스트", () => {
    const userInput = [1000];

    mockQuestions(userInput)

    expect(() => {
      const app = new App();
      app.newGame();
    }).toThrow()
  })
});
