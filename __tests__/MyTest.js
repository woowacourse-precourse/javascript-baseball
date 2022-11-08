const App = require("../src/App");

const app = new App();

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

  test("예외처리 테스트", () => {});
});
