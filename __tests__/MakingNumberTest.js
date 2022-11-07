const App = require("../src/App");

describe("임의의 숫자 생성 테스트", () => {
  test("1부터 9사이의 값을 생성", () => {
    const app = new App();
    const randomNumber = app.generateNumber();

    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(10);
  });
  test("정답으로 임의의 서로 다른 3자리 수를 생성", () => {
    const app = new App();
    const numbers = app.generateAnswer();

    //3자리의 수를 생성하는가
    expect(numbers.length).toBe(3);
    //서로 다른 숫자를 생성하는가
    let visited = Array.from({ length: 10 }, (_) => false);
    for (let i = 0; i < 3; i++) {
      const curNum = numbers[i];
      expect(visited[curNum]).toBe(false);
      visited[curNum] = true;
    }
  });
});
