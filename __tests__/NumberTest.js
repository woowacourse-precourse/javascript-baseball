const App = require("../src/App.js");
const { MAX_NUM_RANGE, MIN_UUM_RANGE, COMPUTER_NUM_LENGTH, RESTART_INPUT_NUM, END_INPUT_NUM } = require("../src/Condition");


describe("랜덤 숫자 테스트", () => {
  test("랜덤으로 만든 숫자의 길이가 3인지", () => {
    const app = new App();
    const computerMadeNum = app.createRandomNum().length;
    const randomNumLength = COMPUTER_NUM_LENGTH;
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
      .filter((el) => el >= MIN_UUM_RANGE && el <= MAX_NUM_RANGE)
      .length;
    const randomNumsLength = COMPUTER_NUM_LENGTH;
    expect(onlyNumberOfRandomNumLength).toEqual(randomNumsLength);
  });

  test("랜덤으로 만든 숫자에 중복 숫자 있는지 테스트", () => {
    const app = new App();
    const randomNumLength = app.createRandomNum().length;
    const randomNumSetSize = new Set(app.createRandomNum()).size;
    expect(randomNumLength).toBe(randomNumSetSize);
  });
})

