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
  test("시작문구 출력 확인", () => {
    const randoms = [1, 2, 3];
    const answers = ["123", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "숫자 야구 게임을 시작합니다.",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("정답 후 게임 종료", () => {
    const randoms = [5, 8, 9];
    const answers = ["589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
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

  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      "1볼 1스트라이크",
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
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

  test("볼 === 0이고 스트라이크 !== 0인 경우 볼 표시하지 않음", () => {
    const randoms = [1, 3, 5];
    const answers = ["169", "135", "2"];
    const logSpy = getLogSpy();
    const messages = ["볼"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();
    
    messages.forEach((output) => {
      expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("사용자가 글자수 적게 입력할 때 에러", () => {
    const randoms = [1, 3, 5];
    const answers = ["13"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자가 글자수 초과해 입력할 때 에러", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자가 같은 문자를 2번 이상 반복해 입력시 에러", () => {
    const randoms = [1, 3, 5];
    const answers = ["112"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자가 0 입력시 에러", () => {
    const randoms = [1, 3, 5];
    const answers = ["012"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자가 문자 입력시 에러", () => {
    const randoms = [1, 3, 5];
    const answers = ["3a2"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("사용자가 특수문자 입력시 에러", () => {
    const randoms = [1, 3, 5];
    const answers = ["@32"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("게임 종료 후 재시작 질문 시 1,2외의 숫자 입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("게임 종료 후 재시작 질문 시 숫자가 아닌 문자 입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

});
