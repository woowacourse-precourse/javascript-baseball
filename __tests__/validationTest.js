const App = require("../src/App");

describe("입력값 유효성 테스트", () => {
  test("checkValid메서드에 정수가 아닌 값 넣었을 때 예외 발생 ", () => {
    const inputs = ["테스트", "1.2"];

    inputs.forEach((input) => {
      expect(() => {
        const app = new App();
        app.checkValid(input);
      }).toThrow();
    });
  });

  test("checkValid메서드에 4자리수를 넣었을 때 예외 발생 ", () => {
    const input = "1234";

    expect(() => {
      const app = new App();
      app.checkValid(input);
    }).toThrow();
  });

  test("checkValid메서드에 0이 포함된 값을 넣었을 때 예외 발생 ", () => {
    const input = "103";

    expect(() => {
      const app = new App();
      app.checkValid(input);
    }).toThrow();
  });

  test("checkValid메서드에 중복된 값을 넣었을 때 예외 발생 ", () => {
    const input = "333";

    expect(() => {
      const app = new App();
      app.checkValid(input);
    }).toThrow();
  });

  test("checkValid메서드에 유효한 값을 넣으면 예외 발생시키지 않음  ", () => {
    const input = "123";

    expect(() => {
      const app = new App();
      app.checkValid(input);
    }).not.toThrow();
  });

  test("checkRestart메서드에 1,2를 제외한 값을 넣었을 때 예외 발생 ", () => {
    const input = "3";

    expect(() => {
      const app = new App();
      app.checkRestart(input);
    }).toThrow();
  });

  test("checkRestart메서드에 유효한 값을 넣었을 때 예외 발생하지 않음 ", () => {
    const inputs = ["1", "2"];

    inputs.forEach((input) => {
      expect(() => {
        const app = new App();
        app.checkRestart(input);
      }).not.toThrow();
    });
  });
});
