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
    }).toThrow("서로 다른 숫자 3개를 입력해야 합니다.");
    expect(() => {
      app.checkValidity(wrong2);
    }).toThrow("숫자 3개를 입력해야 합니다.");
    expect(() => {
      app.checkValidity(wrong3);
    }).toThrow("숫자 3개를 입력해야 합니다.");
    expect(() => {
      app.checkValidity(right);
    }).toBeTruthy();
  });

  test("스트라이크와 볼 갯수 옳게 출력하는 지 확인", () => {
    const computer = [1, 2, 3];
    const user = [1, 8, 2];
    const answer = { ballNum: 1, strikeNum: 1 };

    expect(app.getResult(computer, user)).toEqual(answer);
    expect(app.getResult([1, 2, 3], [4, 5, 6])).toEqual({
      ballNum: 0,
      strikeNum: 0,
    });
    expect(app.getResult([1, 2, 3], [3, 1, 2])).toEqual({
      ballNum: 3,
      strikeNum: 0,
    });
  });

  test("메세지 올바르게 출력되는 지 확인", () => {
    const result1 = { ballNum: 2, strikeNum: 1 };
    const result2 = { ballNum: 0, strikeNum: 3 };
    const result3 = { ballNum: 3, strikeNum: 0 };
    const result4 = { ballNum: 0, strikeNum: 0 };

    expect(app.showMessage(result1)).toBe("2볼 1스트라이크");
    expect(app.showMessage(result2)).toBe("3스트라이크");
    expect(app.showMessage(result3)).toBe("3볼");
    expect(app.showMessage(result4)).toBe("낫싱");
  });
});
