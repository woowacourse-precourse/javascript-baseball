const App = require("../src/App");
const { ERROR_MESSAGE } = require("../src/Constants");

describe("야구게임 함수 테스트", () => {
  const app = new App();
  test("중복되는 숫자가 있는지 확인", () => {
    const wrong = [5, 4, 4];
    const right = [2, 3, 5];

    expect(app.isEveryNumberUnique(right)).toBeTruthy();
    expect(app.isEveryNumberUnique(wrong)).toBeFalsy();
  });

  test("유효한 숫자를 입력했는지 확인", () => {
    const repeat = [2, 3, 2];
    const overNumber = [2, 3, 9, 0];
    const underNumber = [1];
    const hasZero = [0, 1, 2];
    const right = [1, 2, 3];

    expect(() => {
      app.checkValidity(repeat);
    }).toThrow(ERROR_MESSAGE.REPEAT);
    expect(() => {
      app.checkValidity(overNumber);
    }).toThrow(ERROR_MESSAGE.QUANTITY);
    expect(() => {
      app.checkValidity(underNumber);
    }).toThrow(ERROR_MESSAGE.QUANTITY);
    expect(() => {
      app.checkValidity(hasZero);
    }).toThrow(ERROR_MESSAGE.HAS_ZERO);
    expect(() => {
      app.checkValidity(right);
    }).toBeTruthy();
  });

  test("스트라이크와 볼 갯수 옳게 출력하는 지 확인", () => {
    const computer = [1, 2, 3];

    expect(app.getResult(computer, [1, 8, 2])).toEqual({
      ballNum: 1,
      strikeNum: 1,
    });
    expect(app.getResult(computer, [4, 5, 6])).toEqual({
      ballNum: 0,
      strikeNum: 0,
    });
    expect(app.getResult(computer, [3, 1, 2])).toEqual({
      ballNum: 3,
      strikeNum: 0,
    });
  });
});
