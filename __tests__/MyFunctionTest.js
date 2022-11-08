const App = require("../src/App");
describe("기능 구현 테스트", () => {
  test("makeAnswer함수 테스트 - 서로 다른 3개의 숫자", () => {
    const app = new App();
    const testNumber = app.makeAnswer();
    const testNumberLength = [...new Set(testNumber)].length;

    expect(testNumberLength).toEqual(3);
  });

  test("makeAnswer함수 테스트 - 1 ~ 9까지의 숫자", () => {
    const app = new App();
    const testNumberArray = app.makeAnswer();
    const testNumber = testNumberArray.join("");
    const isTruth = true;

    if (!testNumber.match(/[1-9]{3}/)) isTruth = false;

    expect(isTruth).toBeTruthy();
  });
});
