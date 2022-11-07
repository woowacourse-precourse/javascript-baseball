const App = require("../src/App");

describe("서로 다른 임의의 3자리 수 생성 테스트", () => {
  const app = new App();
  app.generateComputerDigits();

  test("배열의 길이가 3이다.", () => {
    expect(app.computerDigits).toHaveLength(3);
  });

  test("배열의 각 요소는 1에서 9까지의 수로 이루어져 있다.", () => {
    app.computerDigits.forEach((digit) => {
      expect(digit).toBeGreaterThanOrEqual(1);
      expect(digit).toBeLessThanOrEqual(9);
    });
  });

  test("배열의 각 요소는 서로 다르다.", () => {
    expect(new Set(app.computerDigits).size).toEqual(app.computerDigits.length);
  });

  App.finishGame();
});

describe("유효하지 않은 입력값 예외 처리 테스트", () => {
  const app = new App();

  test("숫자가 아닌 문자열을 포함할 경우 예외를 발생시킨다.", () => {
    expect(() => {
      app.checkUserDigitsValidity("1a2");
    }).toThrow();
  });

  test("입력값의 길이가 3이 아닐 경우 예외를 발생시킨다.", () => {
    expect(() => {
      app.checkUserDigitsValidity("1234");
    }).toThrow();
  });

  test("숫자 0을 포함할 경우 예외를 발생시킨다.", () => {
    expect(() => {
      app.checkUserDigitsValidity("102");
    }).toThrow();
  });

  test("중복된 숫자가 있는 경우 예외를 발생시킨다.", () => {
    expect(() => {
      app.checkUserDigitsValidity("112");
    }).toThrow();
  });
});

describe("채점 테스트", () => {
  const app = new App();
  app.computerDigits = [3, 5, 8];

  test("3스트라이크", () => {
    app.countScore([3, 5, 8]);

    expect(app.score.balls).toEqual(0);
    expect(app.score.strikes).toEqual(3);
  });

  test("2볼 1스트라이크", () => {
    app.countScore([5, 3, 8]);

    expect(app.score.balls).toEqual(2);
    expect(app.score.strikes).toEqual(1);
  });

  test("1볼", () => {
    app.countScore([5, 9, 1]);

    expect(app.score.balls).toEqual(1);
    expect(app.score.strikes).toEqual(0);
  });

  test("낫싱", () => {
    app.countScore([4, 7, 2]);

    expect(app.score.balls).toEqual(0);
    expect(app.score.strikes).toEqual(0);
  });
});
