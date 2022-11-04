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

const getReadlineSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "readLine");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  test("1-9까지 서로 다른 임의의 수 3개 생성", () => {
    const app = new App();
    const randoms = app.generateRandomNums(1, 9, 3);
    const unduplicatedArray = [...new Set(randoms)];

    expect(randoms).toHaveLength(3);
    expect(unduplicatedArray).toHaveLength(3);
    expect(randoms.includes(0)).toEqual(false);
  });

  test("야구결과-낫싱", () => {
    const randoms = [1, 2, 3];
    const answers =  ["897", "123", "2"];
    const logSpy = getLogSpy();
    
    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
  });
  test("야구결과-1볼", () => {
    const randoms = [1, 2, 3];
    const answers =  ["246", "123", "2"];
    const logSpy = getLogSpy();
    
    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼'));
  });
  test("야구결과-1스트라이크", () => {
    const randoms = [1, 2, 3];
    const answers =  ["149", "123", "2"];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1스트라이크'));
    
  });
  test("야구결과-1볼 1스트라이크", () => {
    const randoms = [1, 2, 3];
    const answers =  ["139", "123", "2"];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼 1스트라이크'));
  });

  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["135", "1", "589", "2"];
    const logSpy = getLogSpy();

    const messages = [
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
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
  
  test("예외처리-0을 포함한 숫자입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["013"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외처리-0을 포함한 숫자입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["013"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test("예외처리-문자 입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["_29"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test("예외처리-중복되는 숫자 입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["229"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test("예외처리-3자리 이상 입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["2198"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
