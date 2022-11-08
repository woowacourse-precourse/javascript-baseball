const App = require("../src/App.js");

const app = new App();

describe("컴퓨터 랜덤 숫자 생성 테스트", () => {
  test("숫자는 세 자리수", () => {
    const computerInput = app.generateComputerInput().length;

    expect(computerInput).toBe(3);
  });

  test("서로 다른 숫자로 구성", () => {
    const computerNumber = app.generateComputerInput();
    const computerNumberSet = new Set(computerNumber);

    expect(computerNumber.length).toBe(computerNumberSet.size);
  });
});
