const ThreeRandomNumForComputer = require("../src/components/material/ThreeRandomNumForComputer");

describe("컴퓨터가 1~9 범위내에서 서로 다른 3가지 수 뽑기", () => {
  let threeRandomNumForComputer;
  const checkNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  beforeEach(() => {
    threeRandomNumForComputer = new ThreeRandomNumForComputer();
  });
  describe("초기값 확인", () => {
    it("randomNumWithoutDuplication is created empty", () => {
      expect(threeRandomNumForComputer.size()).toBe(0);
    });

    it("상수 RANDOM_NUM_REQUITED is 3?", () => {
      expect(threeRandomNumForComputer.NUM_RANDOM_NUMS_REQUIRED).toBe(3);
    });

    it("상수 RANG_START_NUM = 1 && RANGE_END_NUM = 9 ?", () => {
      expect(threeRandomNumForComputer.RANGE_START_NUM).toBe(1);
      expect(threeRandomNumForComputer.RANGE_END_NUM).toBe(9);
    });
  });

  describe("기능 확인", () => {
    it("뽑은 숫자가 1~9 범위안의 숫자에 해당되는가?", () => {
      const randomNum = threeRandomNumForComputer.pickRandomNum();
      expect(checkNum.includes(randomNum)).toBe(true);
    });

    it("randomNumWithoutDuplication안에 있는 숫자와 중복되지 않으면 넣기", () => {
      threeRandomNumForComputer.pushRandomNumWithoutDuplication();
      expect(threeRandomNumForComputer.size()).toBe(3);
    });

    it("뽑은 숫자들이 서로 다른 3자리의 수인가?", () => {
      const checkNums = new Set(
        threeRandomNumForComputer.returnNumsWithoutDuplication()
      );
      expect(checkNums.size).toBe(3);
    });
  });
});
