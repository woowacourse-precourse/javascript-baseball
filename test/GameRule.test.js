describe("게임룰을 기반으로 User의 입력값과 Computer의 값을 비교 기능 테스트", () => {
  test("두 배열을 비교하여 게임 규칙에 따라 strike와 ball을 count 하는 함수 기능 테스트", () => {
    function strikeAndBall(user, computer) {
      let ballCount = 0;
      let strikeCount = 0;

      for (let i = 0; i < 3; i++) {
        if (user[i] === computer[i]) {
          strikeCount = strikeCount + 1;
        }
        if (user[i] !== computer[i] && computer.includes(user[i])) {
          ballCount = ballCount + 1;
        }
      }
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
    const user = ["1", "2", "3"];
    const computer = ["2", "1", "3"];

    expect(strikeAndBall(user, computer)).toBe(`2볼 1스트라이크`);
  });
});
