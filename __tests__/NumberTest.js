const App = require("../src/App.js");


describe("랜덤 숫자 테스트", () => {
  test("랜덤으로 만든 숫자의 길이가 3인지", () => {
    const app = new App();
    const computerMadeNum = app.createRandomNum().length;
    const randomNumLength = 3;
    expect(computerMadeNum).toBe(randomNumLength);
  });

  test("랜덤으로 만든 숫자의 타입이 숫자인지 확인", () => {
    const app = new App();
    const randomNums = !isNaN(app.createRandomNum());
    const result = true;
    expect(randomNums).toBe(result);
  });

  test("랜덤으로 만든 숫자의 값들이 1~9 사이의 숫자인지 확인", () => {
    const app = new App;
    const randomNums = app.createRandomNum();
    let onlyNumberOfRandomNumLength = randomNums
      .split('')
      .map((e) => parseInt(e, 10))
      .filter((el) => el >= 1 && el <= 9)
      .length;
    const randomNumsLength = 3;
    expect(onlyNumberOfRandomNumLength).toBe(randomNumsLength);
  });
})

