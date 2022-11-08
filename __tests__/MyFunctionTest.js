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

  test("compareTwoNumbers함수 테스트 - 스트라이크, 볼 체크", () => {
    const app = new App();
    const answer = [1, 3, 5];
    const number = [3, 2, 1];
    const testNumberArray = app.compareTwoNumbers(answer, number);

    expect(testNumberArray[0]).toEqual(0);
    expect(testNumberArray[1]).toEqual(2);
  });

  test("checkEnd함수 테스트 - 3스트라이크 일 때", () => {
    const app = new App();
    const hint = [3, 0];
    const test = app.checkEnd(hint);

    expect(test).toBeTruthy();
  });

  test("checkEnd함수 테스트 - 3스트라이크 일 때", () => {
    const app = new App();
    const hint = [3, 0];
    const test = app.checkEnd(hint);

    expect(test).toBeTruthy();
  });

  test("checkEnd함수 테스트 - 3스트라이크가 아닐 때", () => {
    const app = new App();
    const hint = [2, 0];
    const test = app.checkEnd(hint);

    expect(test).toBeFalsy();
  });
});
