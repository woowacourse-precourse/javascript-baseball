const App = require("../src/App");

describe("기능 목록 테스트", () => {
  test("컴퓨터가 랜덤 숫자 배열을 얻음", () => {
    const app = new App();
    app.setRandomNumbers();

    app.computer.forEach((number) => {
      expect(number >= 1 && number <= 9).toBeTruthy();
    });

    const [first, second, third] = app.computer;

    expect(first !== second).toBeTruthy();
    expect(first !== third).toBeTruthy();
    expect(second !== third).toBeTruthy();
  });

  test("사용자가 입력한 문자열 숫자를 숫자 배열로 변환", () => {
    const input = "123";

    const app = new App();
    const result = app.separateNumbers(input);

    expect(result).toContain(2, 1, 3);
    expect(result).toContainEqual(1, 2, 3);
  });

  test("사용자가 입력한 숫자와 컴퓨터의 랜덤 숫자를 비교하여 볼과 스트라이크를 계산", () => {
    const computerInputs = [
      [1, 2, 3],
      [1, 2, 4],
      [1, 4, 5],
      [1, 3, 4],
      [1, 3, 2],
      [1, 3, 4],
      [1, 3, 5],
    ];

    const userInputs = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [5, 1, 3],
      [5, 1, 3],
    ];

    const answers = [
      { strike: 3, ball: 0 },
      { strike: 2, ball: 0 },
      { strike: 1, ball: 0 },
      { strike: 1, ball: 1 },
      { strike: 1, ball: 2 },
      { strike: 0, ball: 2 },
      { strike: 0, ball: 3 },
    ];

    const app = new App();

    computerInputs.forEach((computer, index) => {
      const result = app.mark(computer, userInputs[index]);

      expect(result).toEqual(answers[index]);
    });
  });
});
