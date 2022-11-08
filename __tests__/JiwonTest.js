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

describe("정상동작 케이스 예시", () => {
  test("정답을 맞춘 후 게임 종료", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["486", "134", "135", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "2스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("정답을 맞춘 후 재시작", () => {
    const randoms = [4, 5, 8, 1, 5, 3];
    const answers = ["231", "513", "541", "845", "412", "451", "458", "1", "523", "513", "153", "2" ];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1볼",
      "2볼",
      "3볼",
      "1스트라이크",
      "2스트라이크",
      "3스트라이크",
      "1볼 1스트라이크",
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
    });
  });
});

describe("비정상동작 케이스 예시", () => {
  test("입력값 길이가 3이 아닌 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["4532"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  
  test("입력값이 문자인 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["지원"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력값이 문자인 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["jiwon"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  
  test("입력값이 특수문자가 포함된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["`13"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력값이 띄어쓰기가 포함된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = [" 13"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력값이 특수문자가 포함된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["-23"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력값이 중복된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["114"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력값에 0이 포함된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["105"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("재실행 입력값이 1, 2가 아닌 경우", () => {
    const randoms = [4, 5, 8, 1, 5, 3];
    const answers = ["231", "458", "hi" ];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});