const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("출력 테스트", () => {
  test("결과 출력 테스트", () => {
    const result = [
      { ball: 0, strike: 0 },
      { ball: 3, strike: 0 },
      { ball: 1, strike: 1 },
      { ball: 0, strike: 3 },
    ];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "3볼", "1볼 1스트라이크", "3스트라이크"];

    result.forEach((e) => app.resultPrint(e));

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("숫자 비교 테스트", () => {
  const input = [
    [123, [1, 2, 3]],
    [456, [1, 2, 3]],
    [789, [9, 8, 7]],
  ];
  const answer = [
    { ball: 0, strike: 3 },
    { ball: 0, strike: 0 },
    { ball: 2, strike: 1 },
  ];

  input.forEach((myCase, index) => {
    const [user, computer] = myCase;
    const result = app.compareUserAnswer(user, computer);
    test("숫자 비교 테스트", () => {
      expect(result).toEqual(answer[index]);
    });
  });
});

describe("예외처리 테스트", () => {
  test("예외처리 테스트 1", () => {
    const input = "11";
    expect(() => {
      app.answerChecker(input);
    }).toThrow();
  });

  test("예외처리 테스트 2", () => {
    const input = "1234";
    expect(() => {
      app.answerChecker(input);
    }).toThrow();
  });

  test("예외처리 테스트 3", () => {
    const input = 1;

    const result = app.isPlayContinue(input);
    expect(result).toBeTruthy();
  });

  test("예외처리 테스트 4", () => {
    const input = "s";
    expect(() => {
      app.answerChecker(input);
    }).toThrow();
  });
});
