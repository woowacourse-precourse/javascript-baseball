const utilFun = require("../src/utils/utils");

describe("컴퓨팅 관련 테스트", () => {
  test("유저와의 컴퓨터의 비교한 값", () => {
    const user = ["357", "573", "753", "375"];
    const computer = "375";

    const message = [
      "2볼 1스트라이크",
      "2볼 1스트라이크",
      "3볼",
      "3스트라이크",
    ];
    for (i = 0; i < user.length; i++) {
      expect(utilFun.compareComputerAndUser(computer, user[i])).toBe(
        message[i]
      );
    }
  });
});
