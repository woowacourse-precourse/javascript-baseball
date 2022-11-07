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
    const answers = ["246", "513", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3볼",
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

  test("예외 테스트: 숫자가 4개가 입력된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트: 숫자가 2개가 입력된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트: 중복된 숫자가 입력된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["113"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트: 0이 입력된 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["012"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});

describe("기능 구현 메소드 테스트", () => {
  test("makeAnswer 실행 시 랜덤 숫자 배열을 answer프로퍼티에 저장", () => {
    const randoms = [1, 3, 5];
    const answers = ["123"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.makeAnswer();
    expect(app.answer).toEqual(randoms);
  });

  test("compareScore 실행 시 입력과 answer프로퍼티를 비교하여 strike와 ball 프로퍼티의 값을 증가시킨다.", () => {
    const randoms = [1, 3, 5];
    const answers = ["123"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    app.makeAnswer();
    app.compareScore(answers[0]);
    expect(app.strike).toBe(1);
    expect(app.ball).toBe(1);
  });

  test("createResultMessage 실행 시 strike와 ball 프로퍼티의 값을 바탕으로 결과 메시지를 반환한다.", () => {
    const randoms = [1, 3, 5];
    const answers = ["123"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.makeAnswer();
    app.compareScore(answers[0]);
    expect(app.createResultMessage()).toBe("1볼 1스트라이크");
  });
});
