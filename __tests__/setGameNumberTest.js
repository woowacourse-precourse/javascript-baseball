const {
  generateRandomDigit,
  isExist,
  addUniqueRandomDigit,
  App,
} = require("../src/App");

describe("1자리 랜덤 숫자 발생", () => {
  test("case1", () => {
    expect(generateRandomDigit()).toBeTruthy();
  });
});

describe("1자리 랜덤 숫자가 이미 존재하는지 판별", () => {
  test("case1", () => {
    expect(isExist([1, 2, 3], 1)).toBe(true);
  });
  test("case2", () => {
    expect(isExist([1, 2, 3], 4)).toBe(false);
  });
});

describe("이미 존재하지 않는 1자리 랜덤 숫자를 게임 숫자에 추가", () => {
  const gameNumber = [1, 2, 3];
  gameNumber.push = jest.fn();

  test("case1", () => {
    addUniqueRandomDigit(gameNumber, 3);
    expect(gameNumber.push).toHaveBeenCalledTimes(0);
  });
  test("case2", () => {
    addUniqueRandomDigit(gameNumber, 2);
    expect(gameNumber.push).toHaveBeenCalledTimes(0);
  });
  test("case3", () => {
    addUniqueRandomDigit(gameNumber, 5);
    expect(gameNumber.push).toHaveBeenCalledTimes(1);
  });
});

describe("3자리 게임 숫자 설정", () => {
  const app = new App();

  test("case1", () => {
    expect(app.setGameNumber()).toHaveLength(3);
  });
  test("case2", () => {
    app.setGameNumber().forEach((digit) => expect(digit).not.toBeNaN());
  });
});
