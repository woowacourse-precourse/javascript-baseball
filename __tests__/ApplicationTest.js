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
    const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("(NEW) 재시작 없이 게임 종료", () => {
    // 새로운 테스트 케이스
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "137", "135", "2"];
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

  test("(NEW) 게임 종료 후 재시작 여러 번 + 기타 입력 추가", () => {
    // 새로운 테스트 케이스
    const randoms = [1, 3, 5, 5, 8, 9, 9, 8, 7];
    const answers = ["246", "137", "135", "1", "597", "589", "1", "987", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "2스트라이크", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("(NEW) 게임 재시작 여부 1 또는 2가 아닌 기타 입력", () => {
    // 새로운 테스트 케이스
    // 게임 재시작 명령으로 1 또는 2가 아닌 기타 명령이 들어온 경우 재차 물어본다.
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "137", "135", "12", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "2스트라이크", "3스트라이크", "불가능한 재시작 명령", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", () => {
    // 사용자 입력이 3자리 수가 아닌 경우
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("(NEW) 예외 테스트 - 숫자 이외의 입력", () => {
    // 사용자 입력에 숫자가 아닌 것(특수문자)이 포함된 경우
    const randoms = [1, 3, 5];
    const answers = ["1?4"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("(NEW) 예외 테스트 - 숫자 이외의 입력", () => {
    // 사용자 입력에 숫자가 아닌 것이 포함된 경우
    const randoms = [1, 3, 5];
    const answers = ["1a4"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("(NEW) 예외 테스트 - 숫자 이외의 입력", () => {
    // 사용자 입력에 숫자가 아닌 것(특수문자)이 포함된 경우
    const randoms = [1, 3, 5];
    const answers = ['1"4'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("(NEW) 예외 테스트 - 0을 포함한 입력", () => {
    // 사용자 입력에 0이 포함된 경우
    const randoms = [1, 3, 5];
    const answers = ["104"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("(NEW) 예외 테스트 - 중복을 포함한 입력", () => {
    // 사용자 입력에 중복이 포함된 경우
    const randoms = [1, 3, 5];
    const answers = ["133"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
