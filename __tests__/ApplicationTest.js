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

  test("게임 종료 후 재시작: 볼과 스트라이크도 잘 출력되는지 확인", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "132", "135", "1", "597", "892", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "2스트라이크",
      "3스트라이크",
      "1볼 1스트라이크",
      "2볼",
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

  test("예외 테스트: 입력값의 길이가 3이 아닌 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("3개의 숫자만 입력하세요.");
  });

  test("예외 테스트: 입력값에 서로 동일한 숫자가 포함된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["122"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("서로 다른 숫자를 입력하세요.");
  });

  test("예외 테스트: 게임 종료 후 1,2 이외의 값 입력한 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "4"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("1 또는 2만 입력해주세요.");
  });

  test("예외 테스트: 입력값에 숫자 이외의 값 포함된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["안12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("문자를 제외한 숫자만 입력하세요.");
  });

  test("예외 테스트: 입력값에 0이 포함된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["102"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("1~9 사이의 숫자만 입력하세요.");
  });
});
