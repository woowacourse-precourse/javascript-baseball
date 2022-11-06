const { Console } = require("@woowacourse/mission-utils");
const PickedNumberByComputer = require("../src/baseball/PickedNumberByComputer");

describe("랜덤 숫자 테스트", () => {
  test("랜덤으로 뽑은 숫자 3개 반환", () => {
    // given
    const randomNumbers = PickedNumberByComputer.randomNumInRange();

    // then
    expect(Array.isArray(randomNumbers)).toEqual(true);
    expect(randomNumbers.length).toEqual(3);
  });

  test("랜덤으로 뽑은 숫자 3개 중복 안됨", () => {
    // given
    const randomNumbers = PickedNumberByComputer.randomNumInRange();
    const randomNumbersSet = new Set(randomNumbers);

    // then
    expect(randomNumbers.length === randomNumbersSet.size).toEqual(true);
  });
});

afterAll(() => {
  Console.close();
});
