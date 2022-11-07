const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

/*
 ** readLine() 호출 마다
 ** answers["246", "135", "1", "597", "589", "2"]가 차례로 리턴되도록 만드는 함수
 ** (비동기 호출에서 값을 확인하는데 사용)
 */
const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

/*
 ** pickNumberInRange() 호출 마다
 ** randoms[1, 3, 5, 5, 8, 9]가 차례로 리턴되도록 만드는 함수
 */
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
  /*
  jest.fn()
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(3)
  .mockReturnValueOnce(5)
  .mockReturnValueOnce(5)
  .mockReturnValueOnce(8)
  .mockReturnValueOnce(9)
  */
};

/*
 ** jest.fn과 유사한 모의 함수를 생성하지만, MissionUtils.Console[print]에 대한 호출도 추적한다.
 ** jest.spyOn(object, methodName);
 */
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

  test("나의 테스트", () => {
    const randoms = [1, 3, 5, 5, 8, 9, 3, 6, 1];
    const answers = [
      "246",
      "135",
      "1",
      "597",
      "589",
      "1",
      "123",
      "456",
      "789",
      "136",
      "361",
      "2",
    ];
    const logSpy = getLogSpy();
    const messages = [
      "숫자 야구 게임을 시작합니다.",
      "낫싱",
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      "1볼 1스트라이크",
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      "2볼",
      "1볼",
      "낫싱",
      "3볼",
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output, index) => {
      expect(logSpy).toHaveBeenNthCalledWith(index + 1, output);
    });
  });

  test("나의 예외 테스트1", () => {
    const randoms = [1, 3, 5];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("나의 예외 테스트2", () => {
    const randoms = [1, 3, 5];
    const answers = ["12a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
