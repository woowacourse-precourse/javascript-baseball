const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();

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
  
  test("모든 경우의 힌트 출력", () => {
    const randoms = [1, 3, 5];
    const answers = ["246", "324", "521", "351", "152", "153", "146", "137", "135", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1볼",
      "2볼",
      "3볼",
      "1볼 1스트라이크",
      "2볼 1스트라이크",
      "1스트라이크",
      "2스트라이크",
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


  test('printResult 기능 테스트', () => {
    const ball = 2;
    const strike = 1;
    const result = app.printResult(ball, strike);

    expect(result).toEqual(MissionUtils.Console.print('2볼 1스트라이크'));
  });
});
