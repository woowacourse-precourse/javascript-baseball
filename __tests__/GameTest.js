const App = require("../src/App");
const { Console, Random } = require("@woowacourse/mission-utils");

describe("메서드 테스트", () => {
  test("3자리 숫자를 생성", () => {
    const app = new App();
    app.makeRandomNumber();
    const result = app.correctNumber.length;

    expect(result).toEqual(3);
  });

  test("중복되지 않는 수 생성", () => {
    const app = new App();
    app.makeRandomNumber();
    const result = new Set([...app.correctNumber.split("")]).size;

    expect(result).toEqual(3);
  });

  test("무효 입력 값 유효성 검사", () => {
    const app = new App();
    const input = ["113", "012", "1234", "aaa", "1", ""];
    let result = [];
    for (let i = 0; i < input.length; i++) {
      result.push(app.isValidInput(input[i]));
    }

    expect(result).not.toContain(true);
  });

  test("유효 입력 값 유효성 검사", () => {
    const app = new App();
    const input = ["123", "456", "789", "987", "654", "321"];
    let result = [];
    for (let i = 0; i < input.length; i++) {
      result.push(app.isValidInput(input[i]));
    }

    expect(result).not.toContain(false);
  });

  test("사용자 입력 값 평가", () => {
    const app = new App();
    app.correctNumber = "123";
    const input = ["123", "145", "451", "142", "789"];
    let result = [];
    for (let i = 0; i < input.length; i++) {
      app.gradeInput(input[i]);
      result.push();
    }

    expect(result).toEqual([]);
  });
});
