const App = require("../src/App");

describe("야구게임 함수 테스트", () => {
  const app = new App();
  test("중복되는 숫자가 있는지 확인", () => {
    const wrong = [5, 4, 4];
    const right = [2, 3, 5];

    expect(app.isEveryNumberUnique(right)).toBeTruthy();
    expect(app.isEveryNumberUnique(wrong)).toBeFalsy();
  });

  test("유효한 숫자를 입력했는지 확인", () => {
    const wrong1 = [2, 3, 2];
    const wrong2 = [2, 3, 9, 0];
    const wrong3 = [1];
    const right = [1, 2, 3];

    expect(() => {
      app.checkValidity(wrong1);
    }).toThrow();
    expect(() => {
      app.checkValidity(wrong2);
    }).toThrow();
    expect(() => {
      app.checkValidity(wrong3);
    }).toThrow();
    expect(() => {
      app.checkValidity(right);
    }).toBeTruthy();
  });

  test("맞는 스트라이크와 볼 갯수를 출력하는 지 확인", () => {
    const computer = [1, 2, 3];
    const user = [1, 8, 2];
    const answer = [1, 1];

    expect(app.getStrikeAndBallNumber(computer, user)).toEqual(answer);
  });
});
