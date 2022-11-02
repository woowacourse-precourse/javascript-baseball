const App = require("../src/App");

describe("입력값 유효 체크 테스트", () => {
  test("입력값이 유효한 값인지", () => {
    const app = new App();
    const testWordsForInvalid = ["1234", "122", "12d"];
    testWordsForInvalid.forEach((testWord) => {
      expect(app.getIsInputValueValid(testWord)).toEqual(false);
    });
    expect(app.getIsInputValueValid("123")).toEqual(true);
  });
});
