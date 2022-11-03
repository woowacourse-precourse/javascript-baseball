const computer = require("../src/BaseballUtils");


describe("유틸리티 테스트", () => {
  test("컴퓨터 숫자 배열 크기 테스트", () => {
    console.log(computer());
    expect(computer().length).toBe(3);
  });
  test("컴퓨터 배열 타입 테스트", () => {
    console.log(computer());
    computer().forEach((number) => {
      expect(typeof number === "number");
    });
  });
  
});
