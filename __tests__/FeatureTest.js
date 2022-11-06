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
});
