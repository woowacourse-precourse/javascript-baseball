const App = require("../src/App.js");

describe("사용자 숫자 유효성 검사 메서드 테스트", () => {
  test(`hasOnlyNumber메서드를 'abc' 인자로 호출하면 false를 return한다.`, () => {
    const app = new App();
    const input = "abc";
    const result = app.hasOnlyNumber(input);

    expect(result).toBe(false);
  });

  test(`hasValidLength메서드를 '1234' 인자로 호출하면 false를 return한다.`, () => {
    const app = new App();
    const input = "1234";
    const result = app.hasValidLength(input);

    expect(result).toBe(false);
  });

  test(`hasOnlyUniqueNumber메서드를 '112' 인자로 호출하면 false를 return한다.`, () => {
    const app = new App();
    const input = "112";
    const result = app.hasOnlyUniqueNumber(input);

    expect(result).toBe(false);
  });

  test(`hasOnlyValidRangeNumber메서드를 '012' 인자로 호출하면 false를 return한다.`, () => {
    const app = new App();
    const input = "012";
    const result = app.hasOnlyValidRangeNumber(input);

    expect(result).toBe(false);
  });
});
