const MissionUtils = require("@woowacourse/mission-utils");

describe("Compuer의 무작위 배열 추출 확인(길이3)", () => {
  test("Computer에서 무작위 숫자 뽑기", () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    expect(num).toContain(randomNumber);
  });

  test("중복 없는 길이 3 배열 만들기", () => {
    let arr = [];
    while (arr.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (arr.includes(randomNumber) === false) {
        arr.push(randomNumber);
      }
    }
    const newSetArrLength = new Set(arr).size;

    expect(newSetArrLength).toBe(arr.length);
  });
});
