const App = require("../src/App");

describe("기능 테스트", () => {
  test("컴퓨터 숫자 저장했는지 확인", () => {
    const app = new App();
    app.play();
    const computerNumber = app.computer;
    expect(computerNumber).toHaveLength(3);
  });

  test("입력 받은 숫자와 컴퓨터의 숫자 비교하면서 볼, 스트라이크 개수 저장", () => {
    const app = new App();
    const answer = 123;
    app.computer = [4, 2, 1];
    app.ballAndStrikeCount(answer);
    expect(app.ball).toEqual(1);
    expect(app.strike).toEqual(1);
  });

  test("볼과 스트라이크 개수에 따른 메시지 출력", () => {
    const app = new App();
    app.ball = 1;
    app.strike = 1;
    expect(app.ballAndStrikeMessage()).toEqual("1볼 1스트라이크");
  });
});
