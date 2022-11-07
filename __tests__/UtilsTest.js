const { pickNumberInRange } = require("../src/Utils");


describe("유틸 정상 출력 테스트", () => {
  test(("pickNumberInRange 정상작동 확인"), () => {
    const random = pickNumberInRange(1, 9);
    const oneToNine = [...Array(9)].map((number, index) => index + 1);
    expect(oneToNine).toContain(random);
  });
});