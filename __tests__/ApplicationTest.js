/* eslint-disable */
const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  // jest fn 가짜함수
  // mockImplementationOnce() 호출시 마다 달라지는 함수를 구현할때 사용
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  // mockReturnValueOnce mock 리턴값 설정
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const getLogSpy = () => {
  // MissionUtils.Console객체의 print함수가 몇번 호출됬는지, 어떤 인자가 넘어갔는지 정보를 저장
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  const app = new App();

  test("게임 종료", () => {
    const randoms = [1, 2, 3];
    const answers = ["246", "123", "2"];
    const logSpy = getLogSpy();
    const messages = ["1볼", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("3글자가 아닌, 4글자 예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("3글자가 아닌, 2글자 예외 테스트", () => {
    const randoms = [3, 5, 1];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("숫자가 아닌 값이 들어갈 때 예외 테스트", () => {
    const randoms = [1, 5, 7];
    const answers = ["12a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("숫자가 아닌 값이 들어갈 때 예외 테스트", () => {
    const randoms = [1, 5, 7];
    const answers = ["12a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("중복 값이 들어갈 때 예외 테스트", () => {
    const randoms = [1, 4, 7];
    const answers = ["991"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow();
  });

  test("0이 들어갈 때 예외 테스트", () => {
    const randoms = [1, 5, 7];
    const answers = ["120"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      app.play();
    }).toThrow("1~9사이 숫자만 입력");
  });
});
