const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

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

describe("My Own Code Test Operation", () => {
  test("게임 시작 문구 정상 출력 테스트", () => {
    const INIT_MESSAGE = "숫자 야구 게임을 시작합니다.";
    const logSpy = getLogSpy();
    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(INIT_MESSAGE);
  });

  test("정답 여부에 따른 게임 재시작 및 게임 종료 테스트", () => {
    const randoms = [1, 3, 5, 8, 4, 5];
    const answer = [
      "123",
      "456",
      "135",
      "1",
      "123",
      "456",
      "789",
      "458",
      "845",
      "2",
    ];
    const logSpy = getLogSpy();
    const messages = [
      "1볼 1스트라이크",
      "1볼",
      "3스트라이크",
      "낫싱",
      "2볼",
      "1볼",
      "3볼",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answer);

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
});
